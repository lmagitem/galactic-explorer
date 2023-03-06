import { OrbitalPoint } from "../models/orbital-point";

export interface SelectAstronomicalObjectAction {
    type: string;
    payload: OrbitalPoint;
}
