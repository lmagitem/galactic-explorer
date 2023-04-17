import { OrbitalPoint, OrbitalPointDTO } from "./orbital-point";
import { Star } from "./star";

export interface StarSystem {
  center: OrbitalPoint;
  mainStar: Star;
  allObjects: OrbitalPoint[];
}

export interface StarSystemDTO {
  center_id: number;
  main_star_id: number;
  all_objects: OrbitalPointDTO[];
}

export const initialSystem: StarSystemDTO = {
  center_id: 16,
  main_star_id: 0,
  all_objects: [
    {
      id: 1,
      primary_body_id: 3,
      distance_from_primary: 0.004239641850444178,
      satellite_ids: [],
      object: {
        Star: {
          name: "Star 0",
          mass: 1.6125137,
          luminosity: 4.090944,
          radius: 1.1928637,
          age: 0.05,
          temperature: 7395,
          spectral_type: {
            A: 9,
          },
          luminosity_class: "V",
        },
      },
    },
    {
      id: 2,
      primary_body_id: 3,
      distance_from_primary: 0.14685029186536497,
      satellite_ids: [],
      object: {
        Star: {
          name: "Star 1",
          mass: 0.04655408,
          luminosity: 0.00030089583,
          radius: 0.08600001,
          age: 1.009,
          temperature: 2592,
          spectral_type: {
            L: 0,
          },
          luminosity_class: "Y",
        },
      },
    },
    {
      id: 3,
      primary_body_id: 4,
      distance_from_primary: 0.02488015917841424,
      satellite_ids: [1, 2],
      object: "Void",
    },
    {
      id: 0,
      primary_body_id: 4,
      distance_from_primary: 0.025119840821585762,
      satellite_ids: [],
      object: {
        Star: {
          name: "Star 2",
          mass: 1.6432377,
          luminosity: 13.140656,
          radius: 3.0575244,
          age: 2.298,
          temperature: 6285,
          spectral_type: {
            F: 8,
          },
          luminosity_class: "III",
        },
      },
    },
    {
      id: 4,
      primary_body_id: 6,
      distance_from_primary: 0.40043600889313336,
      satellite_ids: [3, 0],
      object: "Void",
    },
    {
      id: 5,
      primary_body_id: 6,
      distance_from_primary: 42.64584222940338,
      satellite_ids: [],
      object: {
        Star: {
          name: "Star 3",
          mass: 0.031007994,
          luminosity: 0.00022981406,
          radius: 0.062,
          age: 0.05,
          temperature: 2854,
          spectral_type: {
            M: 7,
          },
          luminosity_class: "V",
        },
      },
    },
    {
      id: 6,
      primary_body_id: 8,
      distance_from_primary: 6.452271610329326,
      satellite_ids: [4, 5],
      object: "Void",
    },
    {
      id: 7,
      primary_body_id: 8,
      distance_from_primary: 455.4569530041717,
      satellite_ids: [],
      object: {
        Star: {
          name: "Star 4",
          mass: 0.047221683,
          luminosity: 0.00030529904,
          radius: 0.087,
          age: 0.156,
          temperature: 2586,
          spectral_type: {
            L: 0,
          },
          luminosity_class: "Y",
        },
      },
    },
    {
      id: 8,
      primary_body_id: 10,
      distance_from_primary: 974.4021530849675,
      satellite_ids: [6, 7],
      object: "Void",
    },
    {
      id: 9,
      primary_body_id: 10,
      distance_from_primary: 4072.638530840184,
      satellite_ids: [],
      object: {
        Star: {
          name: "Star 5",
          mass: 0.80881244,
          luminosity: 0.2653773,
          radius: 0.7398499,
          age: 0.05,
          temperature: 4828,
          spectral_type: {
            K: 2,
          },
          luminosity_class: "V",
        },
      },
    },
    {
      id: 10,
      primary_body_id: 12,
      distance_from_primary: 757.5278169507137,
      satellite_ids: [8, 9],
      object: "Void",
    },
    {
      id: 11,
      primary_body_id: 12,
      distance_from_primary: 54275.716974676216,
      satellite_ids: [],
      object: {
        Star: {
          name: "Star 6",
          mass: 0.058470853,
          luminosity: 0.00039990252,
          radius: 0.103,
          age: 2.582,
          temperature: 2543,
          spectral_type: {
            L: 0,
          },
          luminosity_class: "Y",
        },
      },
    },
    {
      id: 12,
      primary_body_id: 14,
      distance_from_primary: 22174.13826813803,
      satellite_ids: [10, 11],
      object: "Void",
    },
    {
      id: 13,
      primary_body_id: 14,
      distance_from_primary: 568893.12382782,
      satellite_ids: [],
      object: {
        Star: {
          name: "Star 7",
          mass: 0.16557014,
          luminosity: 0.0047388524,
          radius: 0.23699999,
          age: 0.05,
          temperature: 3110,
          spectral_type: {
            M: 5,
          },
          luminosity_class: "V",
        },
      },
    },
    {
      id: 14,
      primary_body_id: 16,
      distance_from_primary: 369028.5577877353,
      satellite_ids: [12, 13],
      object: "Void",
    },
    {
      id: 15,
      primary_body_id: 16,
      distance_from_primary: 6084404.6362967305,
      satellite_ids: [],
      object: {
        Star: {
          name: "Star 8",
          mass: 0.26767886,
          luminosity: 0.019379716,
          radius: 0.348,
          age: 0.05,
          temperature: 3650,
          spectral_type: {
            M: 1,
          },
          luminosity_class: "V",
        },
      },
    },
    {
      id: 16,
      primary_body_id: null,
      distance_from_primary: null,
      satellite_ids: [14, 15],
      object: "Void",
    },
  ],
};
