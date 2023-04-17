import { GalacticHex, GalacticHexDTO } from "./galactic-hex";
import { GalacticMapDivision } from "./galactic-map-division";
import {
  GalacticMapDivisionLevel,
  GalacticMapDivisionLevelDTO,
} from "./galactic-map-division-level";
import { GalacticNeighborhood } from "./galactic-neighborhood";
import { GalaxyCategory } from "./galaxy-category";
import { GalaxySpecialTrait } from "./galaxy-special-trait";
import { GalaxySubCategory } from "./galaxy-sub-category";
import { GenerationSettings } from "./settings";

export interface Galaxy {
  /// The hash of the settings used for generation.
  settings: string;
  /// The neighborhood this galaxy belongs to.
  neighborhood: GalacticNeighborhood;
  /// The numeric identifier of this galaxy in its neighborhood.
  index: number;
  /// The name of this galaxy.
  name: string;
  /// The age of this galaxy in billions of years.
  age: number;
  /// Is this galaxy a dominant one in its cluster?
  isDominant: boolean;
  /// Is this galaxy a major one in its neighborhood?
  isMajor: boolean;
  /// In what category this galaxy belongs to.
  category: GalaxyCategory;
  /// In what sub-category this galaxy belongs to.
  subCategory: GalaxySubCategory;
  /// What are the pecularities of this galaxy.
  specialTraits: Array<GalaxySpecialTrait>;
  /// The specific division levels used to map this galaxy's content.
  divisionLevels: Array<GalacticMapDivisionLevel>;
  /// This galaxy's already generated divisions.
  divisions: Array<GalacticMapDivision>;
  /// This galaxy's already generated hexagons.
  hexes: Array<GalacticHex>;
}

export interface GalaxyDTO {
  /// The settings to use when generating content.
  settings: GenerationSettings;
  /// The neighborhood this galaxy belongs to.
  neighborhood: GalacticNeighborhood;
  /// The numeric identifier of this galaxy in its neighborhood.
  index: number;
  /// The name of this galaxy.
  name: string;
  /// The age of this galaxy in billions of years.
  age: number;
  /// Is this galaxy a dominant one in its cluster?
  is_dominant: boolean;
  /// Is this galaxy a major one in its neighborhood?
  is_major: boolean;
  /// In what category this galaxy belongs to.
  category: GalaxyCategory;
  /// In what sub-category this galaxy belongs to.
  sub_category: GalaxySubCategory;
  /// What are the pecularities of this galaxy.
  special_traits: Array<GalaxySpecialTrait>;
  /// The specific division levels used to map this galaxy's content.
  division_levels: Array<GalacticMapDivisionLevelDTO>;
  /// This galaxy's already generated divisions.
  divisions: Array<GalacticMapDivision>;
  /// This galaxy's already generated hexagons.
  hexes: Array<GalacticHexDTO>;
}

export const initialGalaxy: GalaxyDTO = {
  settings: {
    seed: "179298",
    universe: {
      fixed_era: null,
      era_before: null,
      era_after: null,
      fixed_age: null,
      age_before: null,
      age_after: null,
      use_ours: false,
    },
    galaxy: {
      fixed_neighborhood: null,
      fixed_category: null,
      fixed_sub_category: null,
      fixed_special_traits: null,
      forbidden_special_traits: null,
      fixed_age: null,
      use_ours: false,
    },
    sector: {
      hex_size: [1, 1, 1],
      level_1_size: [10, 10, 10],
      level_2_size: [4, 4, 4],
      level_3_size: [10, 10, 10],
      level_4_size: [10, 10, 10],
      level_5_size: [10, 10, 10],
      level_6_size: [10, 10, 10],
      level_7_size: [10, 10, 10],
      level_8_size: [10, 10, 10],
      level_9_size: [10, 10, 10],
      flat_map: true,
      density_by_hex_instead_of_parsec: true,
      max_one_system_per_hex: true,
    },
    system: {
      use_ours: false,
    },
    star: {
      fixed_age: null,
      fixed_mass: null,
      use_ours: false,
    },
  },
  neighborhood: {
    universe: {
      era: "EarlyStelliferous",
      age: 3.04,
    },
    density: {
      Group: [3, 52],
    },
  },
  index: 0,
  name: "Galaxy",
  age: 2.79,
  is_dominant: false,
  is_major: true,
  category: {
    Irregular: [11920, 2060, 6290],
  },
  sub_category: "Amorphous",
  special_traits: ["Interacting"],
  division_levels: [
    {
      level: 0,
      x_subdivisions: 1,
      y_subdivisions: 1,
      z_subdivisions: 1,
    },
    {
      level: 1,
      x_subdivisions: 10,
      y_subdivisions: 10,
      z_subdivisions: 1,
    },
    {
      level: 2,
      x_subdivisions: 4,
      y_subdivisions: 4,
      z_subdivisions: 1,
    },
    {
      level: 3,
      x_subdivisions: 10,
      y_subdivisions: 10,
      z_subdivisions: 1,
    },
    {
      level: 4,
      x_subdivisions: 10,
      y_subdivisions: 10,
      z_subdivisions: 1,
    },
    {
      level: 5,
      x_subdivisions: 10,
      y_subdivisions: 10,
      z_subdivisions: 1,
    },
    {
      level: 6,
      x_subdivisions: 10,
      y_subdivisions: 10,
      z_subdivisions: 1,
    },
    {
      level: 7,
      x_subdivisions: 10,
      y_subdivisions: 10,
      z_subdivisions: 1,
    },
    {
      level: 8,
      x_subdivisions: 10,
      y_subdivisions: 10,
      z_subdivisions: 1,
    },
    {
      level: 9,
      x_subdivisions: 10,
      y_subdivisions: 10,
      z_subdivisions: 1,
    },
  ],
  divisions: [],
  hexes: [],
} as unknown as GalaxyDTO;
