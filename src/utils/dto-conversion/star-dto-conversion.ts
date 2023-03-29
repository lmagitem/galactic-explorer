import { AstronomicalObject } from "../../models/astronomical-object";
import { OrbitalPoint } from "../../models/orbital-point";
import { Star, StarDTO } from "../../models/star";
import { isStarSpectralType, StarSpectralType, isStarSpectralTypeDTO, StarSpectralTypeEnum } from "../../models/star-spectral-type";

export const fillResultAsStar = (star: Star, starDTO: StarDTO): void => {
    star.type = AstronomicalObject.Star;
    star.name = starDTO.Star.name;
    star.mass = starDTO.Star.mass;
    star.luminosity = starDTO.Star.luminosity;
    star.radius = starDTO.Star.radius;
    star.age = starDTO.Star.age;
    star.temperature = starDTO.Star.temperature;
    star.luminosityClass = starDTO.Star.luminosity_class;

    const spectralTypeDTO = starDTO.Star.spectral_type;
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
}

export const updateDepth = (orbitalPoint: OrbitalPoint) => {
    let depth = 0;
    let current = orbitalPoint;
    while (current.primaryBody != null) {
        depth++;
        current = current.primaryBody;
    }
    orbitalPoint.depth = depth;
}
