import { CelestialBody, CelestialBodyDTO } from "./celestial-body";
import { CelestialDisk, CelestialDiskDTO } from "./celestial-disk";
import { Star, StarDTO } from "./star";

export interface AstronomicalObjectInterface {
  Star?: Star;
  TelluricBody?: CelestialBody;
  IcyBody?: CelestialBody;
  GaseousBody?: CelestialBody;
  TelluricDisk?: CelestialDisk;
  IcyDisk?: CelestialDisk;
  GaseousDisk?: CelestialDisk;
}
export enum AstronomicalObjectEnum {
  Void = "Void",
  Spacecraft = "Spacecraft",
}
export type AstronomicalObject = typeof AstronomicalObjectEnum | keyof typeof AstronomicalObjectEnum | AstronomicalObjectInterface;

export interface AstronomicalObjectDTOInterface {
  Star?: StarDTO;
  TelluricBody?: CelestialBodyDTO;
  IcyBody?: CelestialBodyDTO;
  GaseousBody?: CelestialBodyDTO;
  TelluricDisk?: CelestialDiskDTO;
  IcyDisk?: CelestialDiskDTO;
  GaseousDisk?: CelestialDiskDTO;
}
export enum AstronomicalObjectDTOEnum {
  Void = "Void",
  Spacecraft = "Spacecraft",
}
export type AstronomicalObjectDTO = typeof AstronomicalObjectDTOEnum | keyof typeof AstronomicalObjectDTOEnum | AstronomicalObjectDTOInterface;

export enum AstronomicalObjectTypeEnum {
  Void = "Void",
  Star = "Star",
  TelluricBody = "TelluricBody",
  IcyBody = "IcyBody",
  GaseousBody = "GaseousBody",
  TelluricDisk = "TelluricDisk",
  IcyDisk = "IcyDisk",
  GaseousDisk = "GaseousDisk",
  Spacecraft = "Spacecraft",
}
export type AstronomicalObjectType = typeof AstronomicalObjectTypeEnum | keyof typeof AstronomicalObjectTypeEnum;
