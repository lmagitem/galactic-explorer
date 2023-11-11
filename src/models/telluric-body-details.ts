import { CelestialBodyWorldType } from "./celestial-body-world-type";
import { TelluricBodyComposition } from "./telluric-body-composition";

export interface TelluricBodyDetails {
    /// The main composition of this world.
    bodyType: TelluricBodyComposition,
    /// The type of this world.
    worldType: CelestialBodyWorldType,
}

export interface TelluricBodyDetailsDTO {
    /// The main composition of this world.
    body_type: TelluricBodyComposition,
    /// The type of this world.
    world_type: CelestialBodyWorldType,
}