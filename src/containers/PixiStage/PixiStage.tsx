import { Dispatch, MutableRefObject, useEffect, useRef } from "react";
import "./PixiStage.css";
import * as PIXI from "pixi.js";
import { createViewport } from "../../utils/pixi-viewport";
import { Viewport } from "pixi-viewport";
import { useDispatch, useSelector } from "react-redux";
import { StarSystem } from "../../models/star-system";
import { Star } from "../../models/star";
import { calculateStarRadiusForGraph } from "../../utils/star-display";
import { convertSolarRadiiToAU } from "../../utils/units";
import { AstronomicalObjectTypeEnum } from "../../models/astronomical-object";
import { getStarColorAsNumber } from "../../utils/color";
import { OrbitalPoint } from "../../models/orbital-point";
import { selectAstronomicalObject } from "../../store/astronomical-object.slice";
import { Galaxy } from "../../models/galaxy";
import { AnyAction } from "@reduxjs/toolkit";
import { ShiningStar } from "./ShiningStar";
import { Orbit } from "../../models/orbit";
2;
export const CANVAS_SIZE = 3000;

interface PixiSatellite extends PIXI.Graphics {
  id: number;
  speed: number;
  rotation: number;
  radius: number;
  ownOrbit: Orbit | null;
}

interface PixiPath extends PIXI.Graphics {
  id: number;
  radius: number;
}

export function PixiStage({}) {
  const ref = useRef(null);
  const appRef = useRef<PIXI.Application | null>(null);
  const viewportRef = useRef<Viewport | null>(null);
  const width = useRef<number>(300);
  const height = useRef<number>(200);
  const dispatch = useDispatch();
  const system = useSelector((s: any) => s.starSystem.current) as StarSystem;
  const currentObject = useSelector((s: any) => s.astronomicalObject.current) as OrbitalPoint;
  const galaxy = useSelector((s: any) => s.galaxy.current) as Galaxy;

  // App creation
  useEffect(() => {
    if (!appRef.current) {
      createPixiApp(appRef);
      initViewport(
        viewportRef as MutableRefObject<Viewport>,
        appRef as MutableRefObject<PIXI.Application>,
      );
      window.addEventListener("resize", () => refreshSize(width, height, appRef, viewportRef));
    }
  }, []);

  // Star system drawing
  useEffect(() => {
    if (!!appRef.current && !!viewportRef.current) {
      cleanAndRedrawOrbits(
        viewportRef as MutableRefObject<Viewport>,
        appRef as MutableRefObject<PIXI.Application>,
        currentObject,
        system,
        dispatch,
      );
      centerView(viewportRef as MutableRefObject<Viewport>);
      setTimeout(() => refreshSize(width, height, appRef, viewportRef));
    }
    return () =>
      window.removeEventListener("resize", () => refreshSize(width, height, appRef, viewportRef));
  }, [system, currentObject, appRef]);

  return <div id="pixi-container" className="pixi" ref={ref}></div>;
}

/** Calculates and updates the size of the canvas in response to changes in the size of other elements on the page. */
function refreshSize(
  width: MutableRefObject<number>,
  height: MutableRefObject<number>,
  appRef: MutableRefObject<PIXI.Application | null>,
  viewportRef: MutableRefObject<Viewport | null>,
) {
  const contentBox = document.getElementById("content-box");
  const header = document.getElementById("header");
  const details = document.getElementById("details");
  const mapButtons = document.getElementById("map-buttons");

  width.current = (mapButtons?.offsetWidth || 2) - 2;
  height.current =
    (contentBox?.offsetHeight || 80) -
    (header?.offsetHeight || 0) -
    (details?.offsetHeight || 0) -
    74;

  if (!!appRef.current) {
    appRef.current.renderer.resize(width.current, height.current);
    viewportRef.current?.resize(width.current, height.current);
    const container = document.getElementById("pixi-container");
    if (!!container) {
      container.style.width = `${width}px`;
      container.style.height = `${height}px`;
      setTimeout(() => viewportRef?.current?.fit());
    }
  }
}

/** Creates a new Viewport object and adds it to the PixiJS application. */
function initViewport(
  viewportRef: MutableRefObject<Viewport>,
  appRef: MutableRefObject<PIXI.Application>,
) {
  viewportRef.current = createViewport(
    CANVAS_SIZE,
    CANVAS_SIZE,
    appRef.current.renderer.width,
    appRef.current.renderer.height,
    appRef.current.renderer as PIXI.Renderer,
  );
  viewportRef.current.sortableChildren = true;
  appRef.current.stage.addChild(viewportRef.current);
}

/** Creates a new PIXI.Application object and adds it to the DOM. */
function createPixiApp(appRef: MutableRefObject<PIXI.Application | null>) {
  const container = document.getElementById("pixi-container");
  appRef.current = new PIXI.Application({
    backgroundColor: 0x222222,
    antialias: true,
    resolution: 1,
    autoDensity: true,
    resizeTo: container || undefined,
  });
  appRef.current.stage.sortableChildren = true;

  // Append the new app to the DOM manually (for some reason React's lifecycle doesn't like the standard Pixi way)
  if (container && appRef.current) {
    container.appendChild(appRef.current.view);
  }
}

/** Centers the viewport on the center of the canvas. */
function centerView(viewportRef: MutableRefObject<Viewport>) {
  viewportRef.current.moveCenter(CANVAS_SIZE / 2, CANVAS_SIZE / 2);
}

/** Draws the orbits of the objects in the star system. */
function drawOrbits(
  system: StarSystem,
  currentObject: OrbitalPoint,
  app: PIXI.Application,
  viewport: Viewport,
  dispatch: Dispatch<AnyAction>,
) {
  const objectsToDraw = getOrbitalPointsToDraw(system, currentObject);
  const maxDistance = getMaxDistance(objectsToDraw);
  const multiplier = calculateMultiplier(maxDistance);
  const center = CANVAS_SIZE / 2;

  const systemContainer = createSystemContainer(center, viewport);
  const centerObject = createCenterObject(currentObject, multiplier, dispatch);
  systemContainer.addChild(centerObject);

  const satellites = [centerObject];
  const pathColors = [0x666666, 0x107b99, 0x5f92c0];

  drawSatellites(
    currentObject,
    centerObject,
    objectsToDraw,
    pathColors,
    satellites,
    multiplier,
    dispatch,
  );

  // Set up a ticker that will move all satellites each frame
  app.ticker.add((delta: number) => {
    for (const satellite of satellites) {
      if (satellite.transform) satellite.angle += satellite.speed * delta;
    }
  });
}

/** Returns an array of objects to draw based on the currently selected object. */
function getOrbitalPointsToDraw(system: StarSystem, currentObject: OrbitalPoint) {
  const toDraw: OrbitalPoint[] = [];
  const idsToCheck = currentObject.orbits.flatMap((o) => o.satelliteIds);
  let orbitalPoint = currentObject;

  while (idsToCheck.length > 0) {
    const id = idsToCheck.pop();
    orbitalPoint = system.allObjects.find((op: { id: any }) => op.id === id)!;
    for (const newId of orbitalPoint.orbits.flatMap((o) => o.satelliteIds)) {
      if (!idsToCheck.includes(newId) && !toDraw.find((p) => p.id === newId)) {
        idsToCheck.push(newId);
      }
    }
    toDraw.push(orbitalPoint);
  }

  return toDraw;
}

/** Returns the maximum distance of any object in the array. */
function getMaxDistance(objectsToDraw: any[]) {
  return objectsToDraw
    .map((op: { distanceFromPrimary: any }) => op.distanceFromPrimary || 0)
    .reduce((a: number, b: number) => Math.max(a, b), -Infinity);
}

/** Calculates a scaling factor allowing us to scale the system's elements so that they fit the canvas size. */
function calculateMultiplier(maxDistance: number) {
  const maxAvailableDistance = CANVAS_SIZE / 2.5;
  return (1 / (maxDistance <= 0 ? 1 : maxDistance)) * maxAvailableDistance;
}

/** Creates the main container used to display a given system. */
function createSystemContainer(center: number, viewport: Viewport) {
  const systemContainer = new PIXI.Graphics();
  systemContainer.position.set(center, center);
  viewport.addChild(systemContainer);
  return systemContainer;
}

/** Draws the object that will be at the system's center. */
function createCenterObject(
  currentObject: OrbitalPoint,
  multiplier: number,
  dispatch: Dispatch<AnyAction>,
) {
  const centerObject = drawObject(currentObject, multiplier);
  centerObject.id = currentObject.id;
  centerObject.speed = 0.001;
  centerObject.angle = Math.random() * 360;
  centerObject.sortableChildren = true;
  centerObject.on("click", () => {
    dispatch(selectAstronomicalObject(currentObject));
  });
  return centerObject;
}

/** Recursively destroys every children of a given Container. */
function recursivelyClearEverything(container: PIXI.Container) {
  container.children.forEach((child) => {
    recursivelyClearEverything(child as PIXI.Container);
    child.destroy();
  });
}

/** Redraws everything. */
function cleanAndRedrawOrbits(
  viewportRef: MutableRefObject<Viewport>,
  appRef: MutableRefObject<PIXI.Application>,
  currentObject: OrbitalPoint,
  system: StarSystem,
  dispatch: Dispatch<AnyAction>,
) {
  recursivelyClearEverything(viewportRef.current);
  setTimeout(() => {
    if (!!appRef.current && !!viewportRef.current && !!currentObject) {
      recursivelyClearEverything(viewportRef.current);
      drawStarfield(viewportRef.current, appRef.current);
      drawOrbits(system, currentObject, appRef.current, viewportRef.current, dispatch);
    }
  });
}

/** Draws a simple flickering starfield. */
function drawStarfield(viewport: Viewport, app: PIXI.Application) {
  const starTexture = PIXI.Texture.from("/assets/shining-star.png");
  const particleContainer = new PIXI.ParticleContainer(
    CANVAS_SIZE,
    {
      scale: true,
      position: true,
      rotation: false,
      uvs: false,
      alpha: true,
    },
    undefined,
    true,
  );
  const stars = createStars(starTexture, particleContainer);
  const starfieldContainer = createStarfieldContainer(particleContainer);
  viewport.addChild(starfieldContainer);

  // Update the stars each frame
  app.ticker.add((delta) => {
    for (const star of stars) {
      (star as ShiningStar).update(delta);
    }
  });
}

/** Creates the stars that will form the flickering starfield. */
function createStars(starTexture: PIXI.Texture, container: PIXI.Container) {
  const stars: ShiningStar[] = [];

  for (let i = 0; i < 10000; i++) {
    const star = new ShiningStar(starTexture);
    star.x = Math.random() * CANVAS_SIZE;
    star.y = Math.random() * CANVAS_SIZE;
    star.scale.set(Math.random() * 0.02 + 0.005);
    star.angle = 45;
    container.addChild(star);
    stars.push(star);
  }

  return stars;
}

/** Returns a container that will contain the given container and sit in the background while not being interactable. */
function createStarfieldContainer(container: PIXI.Container) {
  const starfieldContainer = new PIXI.Container();
  starfieldContainer.interactive = false;
  starfieldContainer.interactiveChildren = false;
  starfieldContainer.zIndex = -10000;
  starfieldContainer.addChild(container);
  return starfieldContainer;
}

/** Draws the orbits and satellites of a given astronomical object. */
function drawSatellites(
  parentPoint: OrbitalPoint,
  parent: PIXI.Graphics,
  toDraw: OrbitalPoint[],
  pathColors: number[],
  satellites: PixiSatellite[],
  multiplier: number,
  dispatch: Dispatch<AnyAction>,
) {
  let randomRotation = Math.random() * 360;

  const orbits = parentPoint.orbits.flatMap((orbit) => orbit.satelliteIds);
  for (let i = 0; i < orbits.length; i++) {
    const id = orbits[i];
    const orbitalPoint = toDraw.find((op) => op.id === id);

    if (!orbitalPoint) throw new Error(`OrbitalPoint n°${id} should have been found!`);

    // Create the path that the satellite will follow
    let path = new PIXI.Graphics() as PixiPath;
    path.lineStyle(1, pathColors[(orbitalPoint?.depth || 0) % pathColors.length]);
    let drawnDistance = (orbitalPoint.ownOrbit.averageDistance || 0) * multiplier;
    path.drawEllipse(0, 0, drawnDistance, drawnDistance);
    path.endFill();
    path.id = orbitalPoint.id;
    path.zIndex = parent.zIndex - 2;
    parent.addChild(path);

    // Create a new satellite
    let satellite = drawObject(orbitalPoint, multiplier);
    satellite.y =
      orbitalPoint.type === AstronomicalObjectTypeEnum.GaseousDisk ||
      orbitalPoint.type === AstronomicalObjectTypeEnum.IcyDisk ||
      orbitalPoint.type === AstronomicalObjectTypeEnum.TelluricDisk
        ? 0
        : i === 1
        ? -drawnDistance
        : drawnDistance;
    satellite.id = orbitalPoint.id;
    satellite.speed = 0.001 * (orbitalPoint.depth || 1);
    satellite.angle = randomRotation + (i * 360) / parentPoint.orbits.length;
    satellite.zIndex = parent.zIndex + 1;
    parent.addChild(satellite);

    satellite.sortableChildren = true;
    satellites.push(satellite);
    satellite.on("click", (event) => {
      console.log(`Should select ${(orbitalPoint as any).name} (${orbitalPoint.type})`);
      dispatch(selectAstronomicalObject(orbitalPoint));
    });

    if (orbitalPoint.orbits.length > 0) {
      drawSatellites(orbitalPoint, satellite, toDraw, pathColors, satellites, multiplier, dispatch);
    }
  }
}

/** Draws a graphical representation of an {@link OrbitalPoint} object. */
function drawObject(orbitalPoint: OrbitalPoint, multiplier: number) {
  let radius = calculateDisplayRadius(orbitalPoint, multiplier);
  let satellite = new PIXI.Graphics() as PixiSatellite;
  satellite.radius = radius;

  satellite.interactive = true;
  satellite.buttonMode = true;
  satellite.on("mouseover", (event) => {
    satellite.tint = 0xffffff;
  });

  if (orbitalPoint.type === AstronomicalObjectTypeEnum.Star) {
    const color = getStarColorAsNumber((orbitalPoint as Star).temperature);
    satellite.on("mouseout", (event) => {
      satellite.tint = color;
    });
    drawStar(satellite, color, radius);
  } else if (orbitalPoint.type === AstronomicalObjectTypeEnum.Void) {
    satellite.on("mouseout", (event) => {
      satellite.tint = 0x00ff00;
    });
    drawVoidCross(radius, satellite);
  } else if (orbitalPoint.type === AstronomicalObjectTypeEnum.GaseousBody) {
    satellite.on("mouseout", (event) => {
      satellite.tint = 0xcccc5e;
    });
    drawBody(satellite, 0xcccc5e, radius);
  } else if (orbitalPoint.type === AstronomicalObjectTypeEnum.IcyBody) {
    satellite.on("mouseout", (event) => {
      satellite.tint = 0x3dd5ff;
    });
    drawBody(satellite, 0x3dd5ff, radius);
  } else if (orbitalPoint.type === AstronomicalObjectTypeEnum.TelluricBody) {
    satellite.on("mouseout", (event) => {
      satellite.tint = 0x916c33;
    });
    drawBody(satellite, 0x916c33, radius);
  } else if (orbitalPoint.type === AstronomicalObjectTypeEnum.GaseousDisk) {
    satellite.on("mouseout", (event) => {
      satellite.tint = 0xcccc5e;
    });
    drawDisk(satellite, 0xcccc5e, radius);
  } else if (orbitalPoint.type === AstronomicalObjectTypeEnum.IcyDisk) {
    satellite.on("mouseout", (event) => {
      satellite.tint = 0x3dd5ff;
    });
    drawDisk(satellite, 0x3dd5ff, radius);
  } else if (orbitalPoint.type === AstronomicalObjectTypeEnum.TelluricDisk) {
    satellite.on("mouseout", (event) => {
      satellite.tint = 0x916c33;
    });
    drawDisk(satellite, 0x916c33, radius);
  } else {
    throw new Error(
      `OrbitalPoint n°${orbitalPoint.id} has a type (${orbitalPoint.type}) for which no case implemented!`,
    );
  }

  return satellite;
}

/** Draws a Star with its light halo. */
function drawStar(satellite: PixiSatellite, color: number, radius: number) {
  drawBlurredStar(color, radius, 0.05, satellite);
  drawBlurredStar(color, radius, 0.2, satellite);
  satellite.beginFill(color);
  satellite.drawEllipse(0, 0, radius, radius);
  satellite.endFill();
}

/** Draws a Body. */
function drawBody(satellite: PixiSatellite, color: number, radius: number) {
  satellite.beginFill(color);
  satellite.drawEllipse(0, 0, radius, radius);
  satellite.endFill();
}

/** Draws a Disk. */
function drawDisk(satellite: PixiSatellite, color: number, radius: number) {
  satellite.lineStyle(5, color);
  satellite.drawEllipse(0, 0, radius, radius);
  satellite.endFill();
}

/** Draws the blurred version of a star to act as its halo. */
function drawBlurredStar(
  color: number,
  radius: number,
  blurFactor: number,
  satellite: PixiSatellite,
): void {
  let blur = new PIXI.Graphics();
  blur.beginFill(color);
  blur.drawEllipse(0, 0, radius, radius);
  blur.endFill();
  let blurFilter = new PIXI.filters.BlurFilter();
  blurFilter.blur = radius * blurFactor;
  blur.filters = [blurFilter];
  satellite.addChild(blur);
}

/** Draws a cross-shaped graphics object to represent an empty gravitational point in space. */
function drawVoidCross(radius: number, satellite: PixiSatellite) {
  satellite.beginFill(0x00ff00);
  satellite.drawRect(-radius, -radius * 0.25, radius * 2, radius * 0.5);
  satellite.drawRect(-radius * 0.25, -radius, radius * 0.5, radius * 2);
  satellite.endFill();
}

/** Scales the radius of the given {@link OrbitalPoint} using the given multiplier so that it fits in the canvas. */
function calculateDisplayRadius(center: OrbitalPoint, multiplier: number) {
  let radius = (center as Star).radius || 0;
  if (center.type === AstronomicalObjectTypeEnum.Void) {
    radius = 5;
  } else if (
    center.type === AstronomicalObjectTypeEnum.GaseousDisk ||
    center.type === AstronomicalObjectTypeEnum.IcyDisk ||
    center.type === AstronomicalObjectTypeEnum.TelluricDisk
  ) {
    radius = (center.ownOrbit?.averageDistance || 0) * multiplier;
  } else {
    if (center.type !== AstronomicalObjectTypeEnum.Star) {
      radius = convertEarthRadiiToSunRadii(radius);
    }
    radius = convertSolarRadiiToAU(radius);
    radius = radius * multiplier;
    radius = normalize(radius);
  }
  return radius;
}

/** Normalizes the radius of an {@link OrbitalPoint} object, so that it is never too small. */
function normalize(radius: number): number {
  return radius < 25 ? calculateStarRadiusForGraph(radius, 25) : radius;
}

/** For non-stars celestial bodies, convert their radius from Earth radii to Sun radii for display. */
function convertEarthRadiiToSunRadii(earthRadii: number): number {
  const earthRadiusInKm = 6371; // Earth's average radius in kilometers
  const sunRadiusInKm = 696340; // Sun's average radius in kilometers
  const sunRadiusPerEarthRadius = sunRadiusInKm / earthRadiusInKm;

  return earthRadii / sunRadiusPerEarthRadius;
}
