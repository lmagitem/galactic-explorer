import { useEffect, useRef } from "react";
import "./PixiStage.css";
import * as PIXI from "pixi.js";
import { createViewport } from "../../utils/pixi-viewport";
import { Viewport } from "pixi-viewport";
import { useSelector } from "react-redux";
import { StarSystem } from "../../models/star-system";
import { Star } from "../../models/star";
import {
  calculateOrbitalPointDistanceForGraph,
  calculateStarRadiusForGraph,
} from "../../utils/star-display";
import { convertSolarRadiiToAU } from "../../utils/units";
import { AstronomicalObject } from "../../models/astronomical-object";
import { getStarColor, getStarColorAsNumber } from "../../utils/color";
import { OrbitalPoint } from "../../models/orbital-point";

export const SIZE = 5000;
interface PixiSatellite extends PIXI.Graphics {
  speed: number;
  rotation: number;
  radius: number;
}

interface PixiPath extends PIXI.Graphics {
  radius: number;
}

export function PixiStage({}) {
  const system = useSelector(
    (state: any) => state.starSystem.current
  ) as StarSystem;
  const ref = useRef(null);
  let app: PIXI.Application;
  let viewport: Viewport;
  let wrapperCurrent: any;
  let width = 300;
  let height = 200;

  const onResize = () => {
    console.log("pixi width", ref.current ? wrapperCurrent.offsetWidth : 0);
    width = wrapperCurrent?.offsetWidth - 2;
    height = wrapperCurrent?.offsetHeight - 2;
  };

  const addOrbits = () => {
    const center = system.center;
    let radius = (center as Star).radius || 0;
    radius = convertSolarRadiiToAU(radius);
    radius = radius < 10 ? calculateStarRadiusForGraph(radius) : radius;
    radius = radius * 5;
    const zero = SIZE / 2 - radius;

    // Center planet
    let orbitCenter = new PIXI.Graphics();
    orbitCenter.beginFill(0x00ff00);
    orbitCenter.drawPolygon([
      0,
      0,
      radius * 0.33,
      0,
      radius * 0.66,
      0,
      radius * 0.66,
      radius * 0.33,
      radius,
      radius * 0.33,
      radius,
      radius * 0.66,
      radius * 0.66,
      radius * 0.66,
      radius * 0.66,
      radius,
      radius * 0.33,
      radius,
      radius * 0.33,
      radius * 0.66,
      0,
      radius * 0.66,
      0,
      radius * 0.33,
      radius * 0.33,
      radius * 0.33,
      radius * 0.33,
      0,
    ]);
    orbitCenter.endFill();
    orbitCenter.position.set(zero, zero);
    viewport.addChild(orbitCenter);

    // Set up data
    let satellites: PixiSatellite[] = [];
    let satelliteColors = [0x107b99, 0x5f92c0, 0xc7509f];
    let pathColors = [0x666666, 0x107b99, 0x5f92c0];

    drawSatellites(center, orbitCenter, system, pathColors, satellites);

    // Create seven satellites and paths. Definition is further down.
    // for (let i = 0, l = 7; i < l; i++) {
    //   createSatellite({
    //     parent: orbitCenter,
    //     depth: 1,
    //     distance: ((i + 1) * app.screen.width) / 6,
    //     radius: app.screen.width / 100,
    //     speed: 1,
    //   });
    // }

    // Set up a ticker that will move all satellites each frame
    app.ticker.add((delta) => {
      for (let i = 0, l = satellites.length; i < l; i++) {
        satellites[i].angle += satellites[i].speed * delta;
      }
    });

    console.log(app);

    // Definition for a satellite and its corresponding path
    function createSatellite(options: {
      parent: any;
      depth: any;
      distance: any;
      radius: any;
      speed?: number;
      x?: any;
      y?: any;
    }) {
      // Create the path that the satellite will follow
      let path = new PIXI.Graphics() as PixiPath;
      path.lineStyle(1, pathColors[options.depth - 1]);
      path.drawEllipse(
        options.x || 0,
        options.y || 0,
        options.distance * 2,
        options.distance * 2
      );
      options.parent.addChild(path);

      // Create a new satellite
      let satellite = new PIXI.Graphics() as PixiSatellite;
      satellite.beginFill(satelliteColors[options.depth - 1]);
      satellite.drawEllipse(
        options.x || 0,
        options.y || 0,
        options.radius * 2,
        options.radius * 2
      );
      satellite.endFill();
      satellite.position.set(
        0,
        options.distance * (Math.round(Math.random()) ? 1 : -1)
      );
      satellite.speed =
        0.001 *
        (Math.random() * (2 * Math.random() - 0.5) + 0.5) *
        options.speed!;
      satellite.rotation = Math.random() * 360;
      options.parent.addChild(satellite);
      satellites.push(satellite);

      // Create another satellite that will circle around this satellite
      if (options.depth < depth) {
        createSatellite({
          parent: satellite,
          depth: options.depth + 1,
          distance: options.radius * 7,
          radius: options.radius / 1.5,
          x: satellite.position.x * -1,
          y: satellite.position.y * -1,
          speed: options.depth * options.speed!,
        });
      }
    }
  };

  useEffect(() => {
    wrapperCurrent = ref.current as any;
    window.addEventListener("resize", onResize);
    onResize();

    app = new PIXI.Application({
      backgroundColor: 0x222222,
      width,
      height,
      antialias: true,
      resolution: 1,
    });
    viewport = createViewport(
      SIZE,
      SIZE,
      app.renderer.width,
      app.renderer.height,
      app.renderer as PIXI.Renderer
    );
    app.stage.addChild(viewport);
    viewport.moveCenter(SIZE / 2, SIZE / 2);
    addOrbits();

    if (!!wrapperCurrent && wrapperCurrent.children.length <= 0) {
      wrapperCurrent.appendChild(app.view);
    }

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return <div className="grow pixi" ref={ref}></div>;
}

function drawSatellites(
  parentPoint: OrbitalPoint,
  parent: PIXI.Graphics,
  system: StarSystem,
  pathColors: number[],
  satellites: PixiSatellite[]
) {
  let randomRotation = Math.random() * 360;
  for (let i = 0; i < parentPoint.satelliteIds.length; i++) {
    const id = parentPoint.satelliteIds[i];
    const orbitalPoint = system.allObjects.find((op) => op.id === id);

    if (!orbitalPoint)
      throw new Error(`OrbitalPoint n°${id} should have been found!`);

    // Create the path that the satellite will follow
    let path = new PIXI.Graphics() as PixiPath;
    path.lineStyle(
      1,
      pathColors[(orbitalPoint?.depth || 0) % pathColors.length]
    );
    const drawnDistance = calculateOrbitalPointDistanceForGraph(
      (orbitalPoint.distanceFromPrimary || 0) * 10
    );
    path.drawEllipse(0, 0, drawnDistance, drawnDistance);
    path.endFill();
    parent.addChild(path);

    // Create a new satellite
    let satellite = new PIXI.Graphics() as PixiSatellite;
    let radius = (orbitalPoint as Star).radius || 0;
    radius = convertSolarRadiiToAU(radius);
    radius = radius < 10 ? calculateStarRadiusForGraph(radius) : radius;
    if (orbitalPoint.type === AstronomicalObject.Star) {
      satellite.beginFill(
        getStarColorAsNumber((orbitalPoint as Star).temperature)
      );
      satellite.drawEllipse(0, drawnDistance, radius, radius);
      satellite.endFill();
    } else if (orbitalPoint.type === AstronomicalObject.Void) {
      satellite.beginFill(0x00ff00);
      satellite.drawPolygon([
        radius * 0.33,
        drawnDistance - radius * 0.5,
        radius * 0.66,
        drawnDistance - radius * 0.5,
        radius * 0.66,
        drawnDistance - radius * 0.5 + radius * 0.33,
        radius,
        drawnDistance - radius * 0.5 + radius * 0.33,
        radius,
        drawnDistance - radius * 0.5 + radius * 0.66,
        radius * 0.66,
        drawnDistance - radius * 0.5 + radius * 0.66,
        radius * 0.66,
        drawnDistance - radius * 0.5 + radius,
        radius * 0.33,
        drawnDistance - radius * 0.5 + radius,
        radius * 0.33,
        drawnDistance - radius * 0.5 + radius * 0.66,
        0,
        drawnDistance - radius * 0.5 + radius * 0.66,
        0,
        drawnDistance - radius * 0.5 + radius * 0.33,
        radius * 0.33,
        drawnDistance - radius * 0.5 + radius * 0.33,
        radius * 0.33,
        drawnDistance - radius * 0.5,
      ]);
      satellite.endFill();
    }
    satellite.speed = 0.001 * (orbitalPoint.depth || 1);
    satellite.angle =
      randomRotation + (i * 360) / parentPoint.satelliteIds.length;
    parent.addChild(satellite);
    satellites.push(satellite);

    if (orbitalPoint.satelliteIds?.length > 0) {
      drawSatellites(orbitalPoint, satellite, system, pathColors, satellites);
    }
  }
}
