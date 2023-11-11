import { AstronomicalObjectTypeEnum } from "../models/astronomical-object";
import { CelestialBody } from "../models/celestial-body";
import { CelestialDisk } from "../models/celestial-disk";
import { OrbitalPoint } from "../models/orbital-point";
import { Star } from "../models/star";
import { StarSystem } from "../models/star-system";

export const formatOrbitalPointName = (
  orbitalPoint: OrbitalPoint | undefined,
  system: StarSystem | undefined,
  recursive = true,
): string => {
  if (orbitalPoint === undefined || system === undefined) return "";

  if (orbitalPoint.type === AstronomicalObjectTypeEnum.Void) {
    if (orbitalPoint.ownOrbit.primaryBody === null) return "Center of the System";
    else if (orbitalPoint.orbits.length > 0)
      return recursive
        ? `Barycentre ${orbitalPoint.id} (${orbitalPoint.orbits
            .flatMap((o) => o.satelliteIds)
            .map((id) =>
              formatOrbitalPointName(
                system.allObjects.find((o) => o.id === id),
                system,
                false,
              ),
            )
            .join(", ")})`
        : `Barycentre ${orbitalPoint.id}`;
    else return "Empty Space";
  } else if (orbitalPoint.type === AstronomicalObjectTypeEnum.Star) {
    return (orbitalPoint as Star).name;
  } else if (
    orbitalPoint.type === AstronomicalObjectTypeEnum.GaseousBody ||
    orbitalPoint.type === AstronomicalObjectTypeEnum.TelluricBody ||
    orbitalPoint.type === AstronomicalObjectTypeEnum.IcyBody
  ) {
    return (orbitalPoint as CelestialBody).name;
  } else if (
    orbitalPoint.type === AstronomicalObjectTypeEnum.GaseousDisk ||
    orbitalPoint.type === AstronomicalObjectTypeEnum.TelluricDisk ||
    orbitalPoint.type === AstronomicalObjectTypeEnum.IcyDisk
  ) {
    return (orbitalPoint as CelestialDisk).name;
  } else {
    throw new Error(`Should add a new case in my pseudo-match for ${orbitalPoint}`);
  }
};
