import { CelestialBeltDetails } from "./celestial-belt-details";
import { CelestialRingDetails } from "./celestial-ring-details";


export interface CelestialDiskTypeInterface {
  /// A ring, like Saturn's ones.
  Ring?: CelestialRingDetails;
  /// A belt, like the asteroid belt.
  Belt?: CelestialBeltDetails;
}
export enum CelestialDiskTypeEnum {
  /// A broad, flat structure of gas and dust surrounding a young star.
  ProtoplanetaryDisk = "ProtoplanetaryDisk",
  /// Like the Oort cloud, a shell that goes around what it orbits without being constrained to a plane.
  Shell = "Shell",
}
export type CelestialDiskType =
  | keyof typeof CelestialDiskTypeEnum
  | typeof CelestialDiskTypeEnum
  | CelestialDiskTypeInterface;
