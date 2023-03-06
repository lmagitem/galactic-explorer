import { Stage } from "@pixi/react";
import { useEffect, useLayoutEffect, useRef } from "react";

export function PixiStage({}) {
  const ref = useRef(null);
  let width = (ref?.current as any)?.offsetWidth - 2 || 0;
  let height = (ref?.current as any)?.offsetHeight - 2 || 0;
  const onResize = () =>{
    console.log(
      "pixi width",
      ref.current ? (ref?.current as any).offsetWidth : 0
    );
    width = (ref?.current as any)?.offsetWidth - 2;
     height = (ref?.current as any)?.offsetHeight - 2;}

  useEffect(() => {
  }, [ref.current]);


  useLayoutEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div className="grow pixi" ref={ref}>
    </div>
  );
}

// // Create the Pixi.js renderer and stage
// var app = new PIXI.Application({
//     backgroundColor: 0x222222,
//     width: window.innerWidth,
//     height: window.innerHeight
//   });
//   document.body.appendChild(app.view);
//   var stage = app.stage;

//   // Center planet
//   var center = new PIXI.Graphics();
//   center.beginFill(0xffffff);
//   center.drawEllipse(app.screen.width / 2, app.screen.height / 2, app.screen.width / 20, app.screen.width / 20);
//   center.endFill();
//   stage.addChild(center);

//   // Prototype objects that will be used to instantiate the others
//   var satelliteProto = new PIXI.Graphics();
//   satelliteProto.beginFill(0xeeeeee);
//   satelliteProto.drawEllipse(0, 0, app.screen.width / 100, app.screen.width / 100);
//   satelliteProto.endFill();

//   var pathProto = new PIXI.Graphics();
//   pathProto.lineStyle(1, 0x999999);
//   pathProto.drawEllipse(0, 0, 0, 0);

//   // Set up data
//   var satellites = [], depth = 3;
//   var satelliteColors = [0x107B99, 0x5F92C0, 0xc7509f];
//   var pathColors = [0x666666, 0x107B99, 0x5F92C0];

//   // Create seven satellites and paths. Definition is further down.
//   for (var i = 0, l = 7; i < l; i++) {
//     createSatellite({
//       parent: center, depth: 1,
//       distance: (i + 1) * app.screen.width / 6,
//       radius: app.screen.width / 100,
//       speed: 1
//     });
//   }

//   // Set up a ticker that will move all satellites each frame
//   app.ticker.add(function () {
//     for (var i = 0, l = satellites.length; i < l; i++) {
//       satellites[i].rotation += satellites[i].speed;
//     }
//   });

//   // Definition for a satellite and its corresponding path
//   function createSatellite (options) {

//     // Create the path that the satellite will follow
//     var path = pathProto.clone();
//     path.radius = options.distance;
//     path.lineStyle(1, pathColors[options.depth - 1]);
//     path.x = options.x || 0;
//     path.y = options.y || 0;
//     options.parent.addChild(path);

//     // Create a new satellite
//     var satellite = satelliteProto.clone();
//     satellite.position.set(0, options.distance * (Math.round(Math.random()) ? 1 : -1));
//     satellite.speed = Math.random() * (2 * Math.random() - 0.5) + 0.5;
//     satellite.radius = options.radius;
//     satellite.x = options.x || 0;
//     satellite.y = options.y || 0;
//     satellite.tint = satelliteColors[options.depth - 1];
//     satellite.rotation = Math.random() * 360;
//     options.parent.addChild(satellite);
//     satellites.push(satellite);

//     // Create another satellite that will circle around this satellite
//     if (options.depth < depth) {
//       createSatellite({
//         parent: satellite, depth: options.depth + 1,
//         distance: options.radius * 7,
//         radius: options.radius / 1.5,
//         x: satellite.position.x * -1, y: satellite.position.y * -1,
//         speed: 10
//       });
//     }
//   }
