import { StarSystem, StarSystemDTO } from "../models/star-system";

export interface SetStarSystemAction {
    type: string;
    payload: StarSystem;
}

export interface SetStarSystemFromDTOAction {
    type: string;
    payload: StarSystemDTO;
}
