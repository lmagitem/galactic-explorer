import { Dispatch, useEffect, useRef } from "react";
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
import { AnyAction } from "@reduxjs/toolkit";
import { Galaxy } from "../../models/galaxy";

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

let app: PIXI.Application;
let viewport: Viewport;

export function PixiStage({}) {
  const dispatch = useDispatch();
  const system = useSelector((s: any) => s.starSystem.current) as StarSystem;
  const currentObject = useSelector((s: any) => s.astronomicalObject.current) as OrbitalPoint;
  const galaxy = useSelector((s: any) => s.galaxy.current) as Galaxy;
  const ref = useRef(null);
  let wrapperCurrent: any;
  let width = 300;
  let height = 200;

  const onResize = () => {
    const contentBox = document.getElementById("content-box");
    const header = document.getElementById("header");
    const details = document.getElementById("details");
    const mapButtons = document.getElementById("map-buttons");

    width = (mapButtons?.offsetWidth || 2) - 2;
    height =
      (contentBox?.offsetHeight || 80) -
      (header?.offsetHeight || 0) -
      (details?.offsetHeight || 0) -
      74;

    if (!!app) {
      app.renderer.resize(width, height);
      viewport.resize(width, height);
      const container = document.getElementById("pixi-container");
      if (!!container) {
        container.style.width = `${width}px`;
        container.style.height = `${height}px`;
      }
    }
  };

  useEffect(() => {
    if (!app) {
      const container = document.getElementById("pixi-container");
      app = new PIXI.Application({
        backgroundColor: 0x222222,
        antialias: true,
        resolution: 1,
        resizeTo: container || undefined,
      });
      app.stage.sortableChildren = true;
      viewport = createViewport(
        CANVAS_SIZE,
        CANVAS_SIZE,
        app.renderer.width,
        app.renderer.height,
        app.renderer as PIXI.Renderer,
      );
      viewport.sortableChildren = true;
      app.stage.addChild(viewport);
    } else {
      recursivelyClearEverything(viewport);
    }

    setTimeout(() => {
      if (!!currentObject) {
        drawOrbits(system, currentObject, app, viewport, dispatch);
      }
    });

    if (!!wrapperCurrent) {
      if (wrapperCurrent.children.length <= 0) wrapperCurrent.appendChild(app.view);
    } else {
      wrapperCurrent = ref.current as any;
      window.addEventListener("resize", onResize);
    }
    viewport.moveCenter(CANVAS_SIZE / 2, CANVAS_SIZE / 2);

    setTimeout(() => onResize());

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [system, currentObject]);

  return <div id="pixi-container" className="pixi" ref={ref}></div>;
}

const drawOrbits = (
  system: StarSystem,
  currentObject: OrbitalPoint,
  app: PIXI.Application,
  viewport: Viewport,
  dispatch: Dispatch<AnyAction>,
) => {
  // Get everything that must be drawn
  const toDraw: OrbitalPoint[] = [];
  const idsToCheck: number[] = [...currentObject.satelliteIds];
  let orbitalPoint: OrbitalPoint = currentObject;
  while (idsToCheck.length > 0) {
    const id = idsToCheck.pop();
    orbitalPoint = system.allObjects.find((op) => op.id === id)!;
    idsToCheck.push(...orbitalPoint.satelliteIds);
    toDraw.push(orbitalPoint);
  }

  // Calculate the multiplier to use for scaling purposes
  const maxDistance = toDraw
    .map((op) => op.distanceFromPrimary || 0)
    .reduce((a, b) => Math.max(a, b), -Infinity);
  const maxAvailableDistance = SIZE / 2.2;
  const multiplier = (1 / (maxDistance <= 0 ? 1 : maxDistance)) * maxAvailableDistance;

  let radius = calculateDisplayRadius(currentObject, multiplier);
  radius = radius * 5;
  const zero = CANVAS_SIZE / 2;

  // Center planet
  const systemContainer = new PIXI.Graphics();
  systemContainer.position.x = zero;
  systemContainer.position.y = zero;
  viewport.addChild(systemContainer);
  let centerObject = drawObject(currentObject, multiplier);
  centerObject.id = currentObject.id;
  centerObject.speed = 0.001;
  centerObject.angle = Math.random() * 360;
  centerObject.sortableChildren = true;
  systemContainer.addChild(centerObject);

  // Set up data
  let satellites: PixiSatellite[] = [centerObject];
  let pathColors = [0x666666, 0x107b99, 0x5f92c0];

  drawSatellites(currentObject, centerObject, toDraw, pathColors, satellites, multiplier, dispatch);

  // Set up a ticker that will move all satellites each frame
  app.ticker.add((delta: number) => {
    for (let i = 0, l = satellites.length; i < l; i++) {
      if (!!satellites[i].transform) satellites[i].angle += satellites[i].speed * delta;
    }
  });
};

function addNebula(viewport: Viewport) {
  const nebula = PIXI.Texture.from("/nebula.jpg");
  const background = new PIXI.Sprite(nebula);
  background.anchor.x = 0.5;
  background.anchor.y = 0.5;
  background.position.x = CANVAS_SIZE / 2;
  background.position.y = CANVAS_SIZE / 2;
  background.scale.x = 2;
  background.scale.y = 2;
  background.zIndex = -5000;
  viewport.addChild(background);
}

function recursivelyClearEverything(container: PIXI.Container) {
  container.children.forEach((child) => {
    recursivelyClearEverything(child as PIXI.Container);
    child.destroy();
  });
}

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

function drawObject(orbitalPoint: OrbitalPoint, multiplier: number) {
  let satellite = new PIXI.Graphics() as PixiSatellite;
  satellite.interactive = true;
  satellite.buttonMode = true;
  satellite.on("mouseover", (event) => {
    satellite.tint = 0xffffff;
  });
  console.log("id", orbitalPoint.id);
  let radius = calculateDisplayRadius(orbitalPoint, multiplier);
  satellite.radius = radius;

  if (orbitalPoint.type === AstronomicalObject.Star) {
    const color = getStarColorAsNumber((orbitalPoint as Star).temperature);
    satellite.on("mouseout", (event) => {
      satellite.tint = color;
    });
    satellite.beginFill(color);
    satellite.drawEllipse(0, 0, radius, radius);
    satellite.endFill();
  } else if (orbitalPoint.type === AstronomicalObject.Void) {
    satellite.on("mouseout", (event) => {
      satellite.tint = 0x00ff00;
    });
    satellite.beginFill(0x00ff00);
    satellite.drawPolygon(
      new PIXI.Polygon([
        radius * 0.33,
        radius * 0.5,
        radius * 0.66,
        radius * 0.5,
        radius * 0.66,
        radius * 0.5 + radius * 0.33,
        radius,
        radius * 0.5 + radius * 0.33,
        radius,
        radius * 0.5 + radius * 0.66,
        radius * 0.66,
        radius * 0.5 + radius * 0.66,
        radius * 0.66,
        radius * 0.5 + radius,
        radius * 0.33,
        radius * 0.5 + radius,
        radius * 0.33,
        radius * 0.5 + radius * 0.66,
        0,
        radius * 0.5 + radius * 0.66,
        0,
        radius * 0.5 + radius * 0.33,
        radius * 0.33,
        radius * 0.5 + radius * 0.33,
        radius * 0.33,
        radius * 0.5,
      ]),
    );
    satellite.endFill();
  } else {
    throw new Error(
      `OrbitalPoint n°${orbitalPoint.id} has a type (${orbitalPoint.type}) for which no case implemented!`,
    );
  }

  return satellite;
}

function calculateDisplayRadius(center: OrbitalPoint, multiplier: number) {
  let radius = (center as Star).radius || 0;
  if (center.type === AstronomicalObject.Void) {
    radius = 5;;
  } else {
    console.log("multiplier", multiplier);
    console.log("radius 1", radius);
    radius = convertSolarRadiiToAU(radius);
    console.log("radius 2", radius);
    radius = radius * multiplier;
    console.log("radius 3", radius);
    radius = normalize(radius);
    console.log("radius 4", radius);
  }
  return radius;
}

function normalize(radius: number): number {
  return radius < 25 ? calculateStarRadiusForGraph(radius, 25) : radius;
}
