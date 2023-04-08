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
import { AstronomicalObject } from "../../models/astronomical-object";
import { getStarColorAsNumber } from "../../utils/color";
import { OrbitalPoint } from "../../models/orbital-point";
import { selectAstronomicalObject } from "../../store/astronomical-object.slice";
import { Galaxy } from "../../models/galaxy";
import { AnyAction } from "@reduxjs/toolkit";
import { ShiningStar } from "./ShiningStar";

export const SIZE = 2000;
export const CANVAS_SIZE = 3000;

interface PixiSatellite extends PIXI.Graphics {
  id: number;
  speed: number;
  rotation: number;
  radius: number;
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
  const toDraw = [];
  const idsToCheck = [...currentObject.satelliteIds];
  let orbitalPoint = currentObject;

  while (idsToCheck.length > 0) {
    const id = idsToCheck.pop();
    orbitalPoint = system.allObjects.find((op: { id: any }) => op.id === id)!;
    idsToCheck.push(...orbitalPoint.satelliteIds);
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
  const maxAvailableDistance = SIZE / 2.2;
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

  for (let i = 0; i < parentPoint.satelliteIds.length; i++) {
    const id = parentPoint.satelliteIds[i];
    const orbitalPoint = toDraw.find((op) => op.id === id);

    if (!orbitalPoint) throw new Error(`OrbitalPoint n°${id} should have been found!`);

    // Create the path that the satellite will follow
    let path = new PIXI.Graphics() as PixiPath;
    path.lineStyle(1, pathColors[(orbitalPoint?.depth || 0) % pathColors.length]);
    let drawnDistance = (orbitalPoint.distanceFromPrimary || 0) * multiplier;
    path.drawEllipse(0, 0, drawnDistance, drawnDistance);
    path.endFill();
    path.id = orbitalPoint.id;
    path.zIndex = parent.zIndex - 2;
    parent.addChild(path);

    // Create a new satellite
    let satellite = drawObject(orbitalPoint, multiplier);
    drawnDistance -= orbitalPoint.type === AstronomicalObject.Void ? satellite.radius : 0;
    satellite.y = i === 1 ? -drawnDistance : drawnDistance;
    satellite.id = orbitalPoint.id;
    satellite.speed = 0.001 * (orbitalPoint.depth || 1);
    satellite.angle = randomRotation + (i * 360) / parentPoint.satelliteIds.length;
    satellite.zIndex = parent.zIndex + 1;
    parent.addChild(satellite);
    satellite.sortableChildren = true;
    satellites.push(satellite);
    satellite.on("click", (event) => {
      dispatch(selectAstronomicalObject(orbitalPoint));
    });

    if (orbitalPoint.satelliteIds?.length > 0) {
      drawSatellites(orbitalPoint, satellite, toDraw, pathColors, satellites, multiplier, dispatch);
    }
  }
}

/** Draws a graphical representation of an {@link OrbitalPoint} object. */
function drawObject(orbitalPoint: OrbitalPoint, multiplier: number) {
  let satellite = new PIXI.Graphics() as PixiSatellite;
  satellite.interactive = true;
  satellite.buttonMode = true;
  satellite.on("mouseover", (event) => {
    satellite.tint = 0xffffff;
  });
  let radius = calculateDisplayRadius(orbitalPoint, multiplier);
  satellite.radius = radius;

  if (orbitalPoint.type === AstronomicalObject.Star) {
    const color = getStarColorAsNumber((orbitalPoint as Star).temperature);
    satellite.on("mouseout", (event) => {
      satellite.tint = color;
    });
    let blur = new PIXI.Graphics();
    blur.beginFill(color);
    blur.drawEllipse(0, 0, radius, radius);
    blur.endFill();
    let blurFilter = new PIXI.filters.BlurFilter();
    blurFilter.blur = radius * 0.05;
    blur.filters = [blurFilter];
    satellite.addChild(blur);
    blur = new PIXI.Graphics();
    blur.beginFill(color);
    blur.drawEllipse(0, 0, radius, radius);
    blur.endFill();
    blurFilter = new PIXI.filters.BlurFilter();
    blurFilter.blur = radius * 0.2;
    blur.filters = [blurFilter];
    satellite.addChild(blur);

    satellite.beginFill(color);
    satellite.drawEllipse(0, 0, radius, radius);
    satellite.endFill();
  } else if (orbitalPoint.type === AstronomicalObject.Void) {
    satellite.on("mouseout", (event) => {
      satellite.tint = 0x00ff00;
    });
    satellite.beginFill(0x00ff00);
    drawVoidCross(radius, satellite);
    satellite.endFill();
  } else {
    throw new Error(
      `OrbitalPoint n°${orbitalPoint.id} has a type (${orbitalPoint.type}) for which no case implemented!`,
    );
  }

  return satellite;
}

/** Draws a cross-shaped graphics object to represent an empty gravitational point in space. */
function drawVoidCross(radius: number, satellite: PixiSatellite) {
  const thirdOfRadius = radius * 0.33;
  const halfOfRadius = radius * 0.5;
  const twoThirdsOfRadius = radius * 0.66;
  satellite.drawPolygon(
    new PIXI.Polygon([
      thirdOfRadius,
      halfOfRadius,
      twoThirdsOfRadius,
      halfOfRadius,
      twoThirdsOfRadius,
      halfOfRadius + thirdOfRadius,
      radius,
      halfOfRadius + thirdOfRadius,
      radius,
      halfOfRadius + twoThirdsOfRadius,
      twoThirdsOfRadius,
      halfOfRadius + twoThirdsOfRadius,
      twoThirdsOfRadius,
      halfOfRadius + radius,
      thirdOfRadius,
      halfOfRadius + radius,
      thirdOfRadius,
      halfOfRadius + twoThirdsOfRadius,
      0,
      halfOfRadius + twoThirdsOfRadius,
      0,
      halfOfRadius + thirdOfRadius,
      thirdOfRadius,
      halfOfRadius + thirdOfRadius,
      thirdOfRadius,
      halfOfRadius,
    ]),
  );
}

/** Scales the radius of the given {@link OrbitalPoint} using the given multiplier so that it fits in the canvas. */
function calculateDisplayRadius(center: OrbitalPoint, multiplier: number) {
  let radius = (center as Star).radius || 0;
  if (center.type === AstronomicalObject.Void) {
    radius = 5;
  } else {
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
