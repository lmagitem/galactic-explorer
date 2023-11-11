import { CelestialRingComposition } from "./celestial-ring-composition";
import { CelestialRingLevel } from "./celestial-ring-level";

export interface CelestialRingDetails {
    /// Specific ring details
    level: CelestialRingLevel,
    /// What the ring is made of
    composition: CelestialRingComposition,
}

export interface CelestialRingDetailsDTO {
    /// Specific ring details
    level: CelestialRingLevel,
    /// What the ring is made of
    composition: CelestialRingComposition,
}