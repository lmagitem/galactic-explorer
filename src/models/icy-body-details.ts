import { CelestialBodyWorldType } from "./celestial-body-world-type";

export interface IcyBodyDetails {
    /// The type of this world.
    worldType: CelestialBodyWorldType,
}

export interface IcyBodyDetailsDTO {
    /// The type of this world.
    world_type: CelestialBodyWorldType,
}