import { AstronomicalObjectTypeEnum } from "../../models/astronomical-object";
import { OrbitalPoint } from "../../models/orbital-point";
import { Star, StarDTO } from "../../models/star";
import {
  isStarSpectralType,
  StarSpectralType,
  isStarSpectralTypeDTO,
  StarSpectralTypeEnum,
} from "../../models/star-spectral-type";
import { StellarEvolution } from "../../models/stellar-evolution";

export const fillResultAsStar = (star: Star, starDTO: StarDTO): void => {
  star.name = starDTO.name;
  star.mass = starDTO.mass;
  star.luminosity = starDTO.luminosity;
  star.radius = starDTO.radius;
  star.age = starDTO.age;
  star.population = starDTO.population as StellarEvolution;
  star.temperature = starDTO.temperature;
  star.luminosityClass = starDTO.luminosity_class;
  star.type = AstronomicalObjectTypeEnum.Star;
  star.zones = starDTO.zones.map((z) => ({ start: z.start, end: z.end, zoneType: z.zone_type }));
  star.specialTraits = starDTO.special_traits;

  const spectralTypeDTO = starDTO.spectral_type;
  if (isStarSpectralType(spectralTypeDTO)) {
    star.spectralType = spectralTypeDTO as StarSpectralType;
    star.spectralTypeSubClass = null;
  } else if (isStarSpectralTypeDTO(spectralTypeDTO)) {
    for (const [key, value] of Object.entries(spectralTypeDTO)) {
      if (!!key && value !== undefined) {
        star.spectralType = key as StarSpectralTypeEnum;
        star.spectralTypeSubClass = value as number;
      }
    }
    if (star.spectralType === undefined || star.spectralTypeSubClass === undefined) {
      throw new Error(`Haven't managed to fill properly the following ${spectralTypeDTO}`);
    }
  } else {
    throw new Error(`Should add a new case in my pseudo-match for ${spectralTypeDTO}`);
  }
};

export const updateDepth = (orbitalPoint: OrbitalPoint) => {
  let depth = 0;
  let current = orbitalPoint;
  while (current.ownOrbit.primaryBody != null) {
    depth++;
    current = current.ownOrbit.primaryBody;
  }
  orbitalPoint.depth = depth;
};
