import { CelestialDiskType } from "./celestial-disk-type";
import { OrbitDTO } from "./orbit";
import { OrbitalPoint } from "./orbital-point";

export interface CelestialDisk extends OrbitalPoint {
  /// This disk's name.
  name: string;
  /// Specific disk details
  details: CelestialDiskType;
}

export interface CelestialDiskDTO {
  /// Is this disk a simple stub to be redesigned later?
  stub: boolean;
  /// This disk's name.
  name: string;
  /// The disk's own orbit, along which it revolves.
  orbit: OrbitDTO | null;
  /// The id of the orbital point this disk inhabits.
  orbital_point_id: number;
  /// Specific disk details
  details: CelestialDiskType;
}
