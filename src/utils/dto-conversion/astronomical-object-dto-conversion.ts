import { isVoidDTO, AstronomicalObject } from "../../models/astronomical-object";
import { OrbitalPointDTO, OrbitalPoint } from "../../models/orbital-point";
import { isStarDTO, Star, StarDTO } from "../../models/star";
import { fillResultAsStar } from "./star-dto-conversion";

export const convertOrbitalPointWithoutReferencesFromDTO = (dto: OrbitalPointDTO): OrbitalPoint => {
  let result = {
    id: dto.id,
    depth: 0,
    ownOrbit: {
      primaryBody: null,
      averageDistance: dto.own_orbit?.average_distance || null,
      eccentricity: dto.own_orbit?.eccentricity || 0.0,
      satelliteIds: dto.own_orbit?.satellite_ids || [],
    },
    orbits: [],
  } as unknown as OrbitalPoint;

  let dtoType = dto.object;
  if (isVoidDTO(dtoType)) {
    result.type = AstronomicalObject.Void;
  } else if (isStarDTO(dtoType)) {
    fillResultAsStar(result as Star, dtoType as StarDTO);
  } else {
    throw new Error(`Should add a new case in my pseudo-match for ${dtoType}`);
  }

console.log(result);


  return result;
};
