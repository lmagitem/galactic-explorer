import { AstronomicalObjectType, VoidDTO } from "./astronomical-object";
import { StarDTO } from "./star";

export interface OrbitalPoint {
    id: number;
    depth: number;
    primaryBody: OrbitalPoint | null;
    distanceFromPrimary: number | null;
    satellite_ids: number[];
    type: AstronomicalObjectType;
}

export interface OrbitalPointDTO {
    id: number;
    primary_body_id: number | null;
    distance_from_primary: number | null;
    satellite_ids: number[];
    object: VoidDTO | StarDTO;
}
