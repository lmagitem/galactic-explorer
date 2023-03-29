import { GalacticNeighborhoodDensity } from "./galactic-neighborhood-density";
import { Universe } from "./universe";

export interface GalacticNeighborhood {
    /// The universe this neighborhood belongs to.
    universe: Universe,
    /// How dense is this neighborhood, with the number of galaxies present.
    density: GalacticNeighborhoodDensity,
}
