import { OrbitalPoint } from "./orbital-point";
import { ZoneTypeValue } from "./zone-type";

export interface Orbit {
  primaryBody: OrbitalPoint | null;
  satelliteIds: number[];
  zone: ZoneTypeValue;
  averageDistance: number;
  averageDistanceFromSystemCenter: number;
  eccentricity: number;
  inclination: number;
  orbitalPeriod: number;
}

export interface OrbitDTO {
  primary_body_id: number;
  satellite_ids: number[];
  zone: ZoneTypeValue;
  average_distance: number;
  average_distance_from_system_center: number;
  eccentricity: number;
  inclination: number;
  orbital_period: number;
}

