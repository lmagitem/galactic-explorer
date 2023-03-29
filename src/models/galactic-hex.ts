import { SpaceCoordinates } from "./space-coordinates";
import { StarSystem, StarSystemDTO } from "./star-system";
import { StellarNeighborhood } from "./stellar-neighborhood";

export interface GalacticHex {
    /// The index of this hex on the x, y and z axis.
    index: SpaceCoordinates,
    /// The neighborhood this hex belongs to.
    neighborhood: StellarNeighborhood,
    /// The star systems one can find in this hex, if any.
    contents: Array<StarSystem>,
}

export interface GalacticHexDTO {
    /// The index of this hex on the x, y and z axis.
    index: SpaceCoordinates,
    /// The neighborhood this hex belongs to.
    neighborhood: StellarNeighborhood,
    /// The star systems one can find in this hex, if any.
    contents: Array<StarSystemDTO>,
}
