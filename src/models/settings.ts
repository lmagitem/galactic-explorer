import { GalacticNeighborhoodDensity } from "./galactic-neighborhood-density";
import { GalaxyCategory } from "./galaxy-category";
import { GalaxySpecialTrait } from "./galaxy-special-trait";
import { GalaxySubCategory } from "./galaxy-sub-category";
import { StelliferousEra } from "./stelliferous-era";

export interface UniverseSettings {
  /** The specific universe [StelliferousEra] to use if any. Will be overwritten if the age or **use_ours** is set. */
  fixed_era: null | StelliferousEra;
  /** Asks to generate a universe's [StelliferousEra] randomly, but only using eras that are older than the given one. Will be overwritten
      if the age or **use_ours** is set. */
  era_before: null | StelliferousEra;
  /** Asks to generate a universe's [StelliferousEra] randomly, but only using eras that are younger than the given one. Will be
      overwritten if the age or **use_ours** is set. */
  era_after: null | StelliferousEra;
  /** The specific universe age to use if any, in billions of years. **Must be higher or equal to 0.4 and lower than 100000.** (f32)
      Will overwrite the era if set, and be overwritten if **use_ours** is set. */
  fixed_age: null | number;
  /** Asks to generate a universe's age randomly, but with an age at least older than the given one. **Must be higher or equal to 0.4
      and lower than 100000.** (f32) Will overwrite the era if set, and be overwritten if **use_ours** is set. */
  age_before: null | number;
  /** Asks to generate a universe's age randomly, but with an age at least younger than the given one. **Must be higher or equal to 0.4
      and lower than 100000.** (f32) Will overwrite the era if set, and be overwritten if **use_ours** is set. */
  age_after: null | number;
  /** Skip the universe generation and just uses a copy of ours. Will overwrite **fixed_era** and **fixed_age** if set. */
  use_ours: boolean;
}

export interface GalaxySettings {
  /** The specific [GalacticNeighborhoodDensity] if any. */
  fixed_neighborhood: null | GalacticNeighborhoodDensity;
  /** The specific [GalaxyCategory] if any. */
  fixed_category: null | GalaxyCategory;
  /** The specific [GalaxySubCategory] if any. */
  fixed_sub_category: null | GalaxySubCategory;
  /** A list of specific [GalaxySpecialTrait]s to use, if any. */
  fixed_special_traits: null | Array<GalaxySpecialTrait>;
  /** A list of [GalaxySpecialTrait]s forbidden to use in galaxy generation. */
  forbidden_special_traits: null | Array<GalaxySpecialTrait>;
  /** The specific age to use for galaxy generation, if any. (f32) */
  fixed_age: null | number;
  /** Skip the galaxy generation and just uses a copy of ours. */
  use_ours: boolean;
}

export interface SectorSettings {
  /** How many parsecs the building block of a galactic map spans, on the (x, y, z) axis. Must be between 1 and 255 inclusive. */
  hex_size: [number, number, number];
  /** How many inferior level divisions this level spans, on the (x, y, z) axis. Must be between 4 and 62 inclusive. the z level might
      be overridden by the **flat_map** parameter. (u8)
      @default: [((10, 10, 10))] */
  level_1_size: [number, number, number];
  /** How many inferior level divisions this level spans, on the (x, y, z) axis. Must be between 4 and 62 inclusive. the z level might
      be overridden by the **flat_map** parameter. (u8)
      @default: [((4, 4, 4))] */
  level_2_size: [number, number, number];
  /** How many inferior level divisions this level spans, on the (x, y, z) axis. Must be between 4 and 62 inclusive. the z level might
      be overridden by the **flat_map** parameter. (u8)
      @default: [((10, 10, 10))] */
  level_3_size: [number, number, number];
  /** How many inferior level divisions this level spans, on the (x, y, z) axis. Must be between 4 and 62 inclusive. the z level might
      be overridden by the **flat_map** parameter. (u8)
      @default: [((10, 10, 10))] */
  level_4_size: [number, number, number];
  /** How many inferior level divisions this level spans, on the (x, y, z) axis. Must be between 4 and 62 inclusive. the z level might
      be overridden by the **flat_map** parameter. (u8)
      @default: [((10, 10, 10))] */
  level_5_size: [number, number, number];
  /** How many inferior level divisions this level spans, on the (x, y, z) axis. Must be between 4 and 62 inclusive. the z level might
      be overridden by the **flat_map** parameter. (u8)
      @default: [((10, 10, 10))] */
  level_6_size: [number, number, number];
  /** How many inferior level divisions this level spans, on the (x, y, z) axis. Must be between 4 and 62 inclusive. the z level might
      be overridden by the **flat_map** parameter. (u8)
      @default: [((10, 10, 10))] */
  level_7_size: [number, number, number];
  /** How many inferior level divisions this level spans, on the (x, y, z) axis. Must be between 4 and 62 inclusive. the z level might
      be overridden by the **flat_map** parameter. (u8)
      @default: [((10, 10, 10))] */
  level_8_size: [number, number, number];
  /** How many inferior level divisions this level spans, on the (x, y, z) axis. Must be between 4 and 62 inclusive. the z level might
      be overridden by the **flat_map** parameter. (u8)
      @default: [((10, 10, 10))] */
  level_9_size: [number, number, number];
  /** If set to true, a single z level will be generated. For your map to still have some kind of height, you can set the **hex_size**
      z axis to a value different than 1, it will enable star systems to be generated "above" and "under" the map plane.
      @default: [true] */
  flat_map: boolean;
  /** If set to true, only one roll will occur to determine how much star systems there are per hex. If set to false, a roll will be made
      for each cubic parsec inside the hex.
      @default: [true] */
  density_by_hex_instead_of_parsec: boolean;
  /** If set to true, the maximum number of systems per hex is one.
      @default: [true] */
  max_one_system_per_hex: boolean;
}

export interface SystemSettings {
  /** Skip the system generation and just uses a copy of ours. */
  use_ours: boolean;
}

export interface StarSettings {
  /** The specific age to use for star generation, if any. In billions of years. (f32) */
  fixed_age: null | number;
  /** The specific mass to use for star generation, if any. Only applies during the lifespan of the star, in other words, if the star
      is older than its estimated lifespan, it will be generated as a remnant, with a new mass calculated using the given mass. (f32) */
  fixed_mass: null | number;
  /** Skip the star generation and just uses a copy of ours. */
  use_ours: boolean;
}

export interface GenerationSettings {
  /** The seed to use to generate everything. */
  seed: string;
  /** A list of settings used to configure the [Universe] generation. */
  universe: UniverseSettings;
  /** A list of settings used to configure the [Galaxy] generation. */
  galaxy: GalaxySettings;
  /** A list of settings used to configure the [GalacticMapDivisionLevel], [GalacticMapDivision]s and [GalacticHex]es generation. */
  sector: SectorSettings;
  /** A list of settings used to configure the [StarSystem] generation. */
  system: SystemSettings;
  /** A list of settings used to configure the [Star] generation. */
  star: StarSettings;
}

export const defaultSettings: GenerationSettings = {
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
};
