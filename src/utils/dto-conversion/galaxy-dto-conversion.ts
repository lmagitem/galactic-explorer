import { GalaxyDTO, Galaxy } from "../../models/galaxy";
import { GalacticMapDivisionLevel, GalacticMapDivisionLevelDTO } from "../../models/galactic-map-division-level";
import { GalacticHex, GalacticHexDTO } from "../../models/galactic-hex";
import { convertStarSystemFromDTO } from "./star-system-dto-conversion";
import hash from 'object-hash';

export const convertGalaxyFromDTO = (dto: GalaxyDTO): Galaxy => {
    let result = {
        settings: hash.sha1(dto.settings),
        neighborhood: dto.neighborhood,
        index: dto.index,
        name: dto.name,
        age: dto.age,
        isDominant: dto.is_dominant,
        isMajor: dto.is_major,
        category: dto.category,
        subCategory: dto.sub_category,
        specialTraits: dto.special_traits,
        divisions: dto.divisions
    } as unknown as Galaxy;

    result.divisionLevels = dto.division_levels.map((level) => convertGalacticDivisionLevelFromDTO(level));

    result.hexes = dto.hexes.map((hex) => convertGalacticHexFromDTO(hex));

    return result;
};

export const convertGalacticDivisionLevelFromDTO = (dto: GalacticMapDivisionLevelDTO): GalacticMapDivisionLevel => ({
    level: dto.level,
    xSubdivisions: dto.x_subdivisions,
    ySubdivisions: dto.y_subdivisions,
    zSubdivisions: dto.z_subdivisions
});

export const convertGalacticHexFromDTO = (dto: GalacticHexDTO): GalacticHex => ({
    index: dto.index,
    neighborhood: dto.neighborhood,
    contents: dto.contents.map((system) => convertStarSystemFromDTO(system)),
});
