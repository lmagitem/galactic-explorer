import { AstronomicalObject } from "./astronomical-object";
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
  };
}
export const isStarDTO = (obj: any): boolean => (obj as StarDTO)?.Star !== undefined;
