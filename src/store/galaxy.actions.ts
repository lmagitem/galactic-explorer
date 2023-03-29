import { Galaxy, GalaxyDTO } from "../models/galaxy";

export interface SetGalaxyAction {
    type: string;
    payload: Galaxy;
}

export interface SetGalaxyFromDTOAction {
    type: string;
    payload: GalaxyDTO;
}
