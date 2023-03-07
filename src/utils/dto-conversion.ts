import { OrbitalPointDTO, OrbitalPoint } from "../models/orbital-point";
import { StarSystemDTO, StarSystem } from "../models/star-system";
import { AstronomicalObject, isVoidDTO } from "../models/astronomical-object";
import { isStarDTO, Star, StarDTO } from "../models/star";
import { isStarSpectralType, isStarSpectralTypeDTO, StarSpectralType, StarSpectralTypeEnum } from "../models/star-spectral-type";

export const convertStarSystemFromDTO = (dto: StarSystemDTO): StarSystem => {
    let result = {
        allObjects: [],
    } as unknown as StarSystem;

    // Build the OrbitalPoints
    dto.all_objects.forEach((orbitalPointDTO: OrbitalPointDTO) => {
        result.allObjects.push(convertOrbitalPointWithoutReferencesFromDTO(orbitalPointDTO));
    });

    // Add references in the OrbitalPoints
    result.allObjects.forEach((orbitalPoint: OrbitalPoint) => {
        const orbitalPointDTO = dto.all_objects.find((op: OrbitalPointDTO) => op.id === orbitalPoint.id);
        if (!orbitalPointDTO) throw new Error(`Should have found a DTO with the following id: ${orbitalPoint.id}`);

        orbitalPoint.primaryBody = result.allObjects.find((op: OrbitalPoint) => op.id === orbitalPointDTO.primary_body_id) || null;
    });

    // Add references in the StarSystem
    result.center = result.allObjects.find((op: OrbitalPoint) => op.id === dto.center_id) as OrbitalPoint;
    if (!result.center) throw new Error(`Should found an OrbitalPoint with the following id: ${dto.center_id}`);
    result.mainStar = result.allObjects.find((op: OrbitalPoint) => op.id === dto.main_star_id) as Star;
    if (!result.mainStar) throw new Error(`Should found a Star with the following id: ${dto.main_star_id}`);

    // Update depths
    result.allObjects.forEach((orbitalPoint: OrbitalPoint) => updateDepth(orbitalPoint));

    // Sort by depth
    result.allObjects.sort((a: OrbitalPoint, b: OrbitalPoint) => a.depth - b.depth);

    return result;
};

const convertOrbitalPointWithoutReferencesFromDTO = (dto: OrbitalPointDTO): OrbitalPoint => {
    let result = {
        id: dto.id,
        depth: 0,
        primaryBody: null,
        distanceFromPrimary: dto.distance_from_primary,
        satelliteIds: dto.satellite_ids,
    } as unknown as OrbitalPoint;

    let dtoType = dto.object;
    if (isVoidDTO(dtoType)) {
        result.type = AstronomicalObject.Void;
    } else if (isStarDTO(dtoType)) {
        fillResultAsStar(result as Star, dtoType as StarDTO);
    } else {
        throw new Error(`Should add a new case in my pseudo-match for ${dtoType}`);
    }

    return result;
};

const fillResultAsStar = (star: Star, starDTO: StarDTO): void => {
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

const updateDepth = (orbitalPoint: OrbitalPoint) => {
    let depth = 0;
    let current = orbitalPoint;
    while (current.primaryBody != null) {
        depth++;
        current = current.primaryBody;
    }
    orbitalPoint.depth = depth;
}
