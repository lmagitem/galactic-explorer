import { AstronomicalObject } from "./astronomical-object";
import { Orbit, OrbitDTO } from "./orbit";
import { OrbitalPoint } from "./orbital-point";
import { StarLuminosityClass } from "./star-luminosity-class";
import { StarSpectralType, StarSpectralTypeDTO } from "./star-spectral-type";

export interface Star extends OrbitalPoint {
  type: AstronomicalObject.Star;
  name: string;
  mass: number;
  luminosity: number;
  radius: number;
  age: number;
  temperature: number;
  spectralType: StarSpectralType;
  spectralTypeSubClass: number | null;
  luminosityClass: StarLuminosityClass;
  orbitalPoint: OrbitalPoint | null;
  ownOrbit: Orbit;
  zones: any[];
}

export interface StarDTO {
  Star: {
    name: string;
    mass: number;
    luminosity: number;
    radius: number;
    age: number;
    temperature: number;
    spectral_type: StarSpectralTypeDTO | StarSpectralType;
    luminosity_class: StarLuminosityClass;
    orbital_point_id: number | null;
    orbit: OrbitDTO | null;
    zones: any[];
  };
}
export const isStarDTO = (obj: any): boolean => (obj as StarDTO)?.Star !== undefined;
