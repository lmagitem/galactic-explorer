import { OrbitDTO } from "./orbit";
import { OrbitalPoint } from "./orbital-point";
import { StarLuminosityClass } from "./star-luminosity-class";
import { StarPeculiarity } from "./star-peculiarity";
import { StarSpectralType, StarSpectralTypeDTO } from "./star-spectral-type";
import { StarZone, StarZoneDTO } from "./star-zone";
import { StellarEvolution, StellarEvolutionValue } from "./stellar-evolution";

export interface Star extends OrbitalPoint {
  name: string;
  mass: number;
  luminosity: number;
  radius: number;
  age: number;
  population: StellarEvolution;
  temperature: number;
  spectralType: StarSpectralType;
  spectralTypeSubClass: number | null;
  luminosityClass: StarLuminosityClass;
  zones: StarZone[];
  specialTraits: Array<StarPeculiarity>;
}

export interface StarDTO {
    name: string;
    mass: number;
    luminosity: number;
    radius: number;
    age: number;
    population: StellarEvolutionValue;
    temperature: number;
    spectral_type: StarSpectralTypeDTO | StarSpectralType;
    luminosity_class: StarLuminosityClass;
    orbital_point_id: number | null;
    orbit: OrbitDTO | null;
    zones: StarZoneDTO[];
    special_traits: Array<StarPeculiarity>;
}
