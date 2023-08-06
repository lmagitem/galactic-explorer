import { OrbitalPoint } from "./orbital-point";

export interface Orbit {
  primaryBody: OrbitalPoint | null;
  averageDistance: number | null;
  eccentricity: number | null;
  satelliteIds: number[];
}

export interface OrbitDTO {
  primary_body_id: number | null;
  average_distance: number | null;
  eccentricity: number | null;
  satellite_ids: number[];
}
