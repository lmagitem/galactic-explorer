import {
  AstronomicalObjectDTOEnum,
  AstronomicalObjectDTOInterface,
  AstronomicalObjectTypeEnum,
} from "../../models/astronomical-object";
import { CelestialBody, CelestialBodyDTO } from "../../models/celestial-body";
import { CelestialDisk, CelestialDiskDTO } from "../../models/celestial-disk";
import { OrbitalPointDTO, OrbitalPoint } from "../../models/orbital-point";
import { Star, StarDTO } from "../../models/star";
import { ZoneType } from "../../models/zone-type";
import { fillResultAsCelestialBody } from "./celestial-body-dto-conversion";
import { fillResultAsCelestialDisk } from "./celestial-disk-dto-conversion";
import { fillResultAsStar } from "./star-dto-conversion";
import { OrbitDTO, Orbit } from "/home/luc/Projects/galactic-explorer/src/models/orbit";

export const convertOrbitalPointWithoutReferencesFromDTO = (dto: OrbitalPointDTO): OrbitalPoint => {
  let result = {
    id: dto.id,
    depth: 0,
    ownOrbit: convertOrbit(dto.own_orbit),
    orbits: dto.orbits.map((o) => convertOrbit(o)),
    type: AstronomicalObjectTypeEnum.Void,
  } as OrbitalPoint;

  let ao = dto.object;
  if (ao === AstronomicalObjectDTOEnum.Void) {
    result.type = AstronomicalObjectTypeEnum.Void;
  } else if ((ao as AstronomicalObjectDTOInterface).Star !== undefined) {
    fillResultAsStar(result as Star, (ao as AstronomicalObjectDTOInterface).Star as StarDTO);
  } else if (
    (ao as AstronomicalObjectDTOInterface).GaseousBody !== undefined ||
    (ao as AstronomicalObjectDTOInterface).TelluricBody !== undefined ||
    (ao as AstronomicalObjectDTOInterface).IcyBody !== undefined
  ) {
    const aoi = ao as AstronomicalObjectDTOInterface;
    fillResultAsCelestialBody(
      result as CelestialBody,
      (aoi.GaseousBody !== undefined
        ? aoi.GaseousBody
        : aoi.TelluricBody !== undefined
        ? aoi.TelluricBody
        : aoi.IcyBody) as CelestialBodyDTO,
    );
  } else if (
    (ao as AstronomicalObjectDTOInterface).GaseousDisk !== undefined ||
    (ao as AstronomicalObjectDTOInterface).TelluricDisk !== undefined ||
    (ao as AstronomicalObjectDTOInterface).IcyDisk !== undefined
  ) {
    const aoi = ao as AstronomicalObjectDTOInterface;
    console.log(
      `${aoi.GaseousDisk?.name ?? aoi.IcyDisk?.name ?? aoi.TelluricDisk?.name ?? "unknown"}`,
      aoi,
    );
    fillResultAsCelestialDisk(
      result as CelestialDisk,
      (aoi.GaseousDisk !== undefined
        ? aoi.GaseousDisk
        : aoi.TelluricDisk !== undefined
        ? aoi.TelluricDisk
        : aoi.IcyDisk) as CelestialDiskDTO,
    );
  } else {
    throw new Error(`Should add a new case in my pseudo-match for ${ao}`);
  }

  return result;
};

export const convertOrbit = (orbit?: OrbitDTO | null) =>
  ({
    primaryBody: null,
    averageDistance: orbit?.average_distance || null,
    eccentricity: orbit?.eccentricity || 0.0,
    satelliteIds: orbit?.satellite_ids || [],
    averageDistanceFromSystemCenter: orbit?.average_distance_from_system_center ?? 0.0,
    inclination: orbit?.inclination ?? 0.0,
    orbitalPeriod: orbit?.orbital_period ?? 0.0,
    zone: orbit?.zone ?? ZoneType.ForbiddenZone,
  }) as Orbit;
