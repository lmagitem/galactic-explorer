import { GalacticRegion } from "./galactic-region";
import { SpaceCoordinates } from "./space-coordinates";

export interface GalacticMapDivision {
  /// The denomination by which this particular partition of space is known.
  name: string;
  /// Which region of space makes the most of the division.
  region: GalacticRegion;
  /// The level of division this partition belongs to. See [SpaceDivisionLevel].
  level: number;
  /// Which cell this division occupies on the X axis in its parent's grid.
  x: number;
  /// Which cell this division occupies on the Y axis in its parent's grid.
  y: number;
  /// Which cell this division occupies on the Z axis in its parent's grid.
  z: number;
  /// The index of this division on the x, y and z axis.
  index: SpaceCoordinates;
  /// This division's size in parsecs
  size: SpaceCoordinates;
}
