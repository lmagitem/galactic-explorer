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
      own_orbit: {
        primary_body_id: 3,
        average_distance: 0.004239641850444178,
        eccentricity: 0.0,
        satellite_ids: [],
      },
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
          orbital_point_id: 1,
          orbit: {
            primary_body_id: 3,
            average_distance: 0.004239641850444178,
            eccentricity: 0.0,
            satellite_ids: [],
          },
          zones: []
        },
      },
      orbits: [],
    },
    {
      id: 2,
      own_orbit: {
        primary_body_id: 3,
        average_distance: 0.14685029186536497,
        eccentricity: 0.0,
        satellite_ids: [],
      },
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
          orbital_point_id: 2,
          orbit: {
            primary_body_id: 3,
            average_distance: 0.14685029186536497,
            eccentricity: 0.0,
            satellite_ids: [],
          },
          zones: []
        },
      },
      orbits: [],
    },
    {
      id: 3,
      own_orbit: {
        primary_body_id: 4,
        average_distance: 0.02488015917841424,
        eccentricity: 0.0,
        satellite_ids: [1, 2],
      },
      object: "Void",
      orbits: [],
    },
    {
      id: 0,
      own_orbit: {
        primary_body_id: 4,
        average_distance: 0.025119840821585762,
        eccentricity: 0.0,
        satellite_ids: [],
      },
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
          orbital_point_id: 0,
          orbit: {
            primary_body_id: 4,
            average_distance: 0.025119840821585762,
            eccentricity: 0.0,
            satellite_ids: [],
          },
          zones: []
        },
      },
      orbits: [],
    },
    {
      id: 4,
      own_orbit: {
        primary_body_id: 6,
        average_distance: 0.40043600889313336,
        eccentricity: 0.0,
        satellite_ids: [3, 0],
      },
      object: "Void",
      orbits: [],
    },
    {
      id: 5,
      own_orbit: {
        primary_body_id: 6,
        average_distance: 42.64584222940338,
        eccentricity: 0.0,
        satellite_ids: [],
      },
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
          orbital_point_id: 5,
          orbit: {
            primary_body_id: 6,
            average_distance: 42.64584222940338,
            eccentricity: 0.0,
            satellite_ids: [],
          },
          zones: []
        },
      },
      orbits: [],
    },
    {
      id: 6,
      own_orbit: {
        primary_body_id: 8,
        average_distance: 6.452271610329326,
        eccentricity: 0.0,
        satellite_ids: [4, 5],
      },
      object: "Void",
      orbits: [],
    },
    {
      id: 7,
      own_orbit: {
        primary_body_id: 8,
        average_distance: 455.4569530041717,
        eccentricity: 0.0,
        satellite_ids: [],
      },
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
          orbital_point_id: 7,
          orbit: {
            primary_body_id: 8,
            average_distance: 455.4569530041717,
            eccentricity: 0.0,
            satellite_ids: [],
          },
          zones: []
        },
      },
      orbits: [],
    },
    {
      id: 8,
      own_orbit: {
        primary_body_id: 10,
        average_distance: 974.4021530849675,
        eccentricity: 0.0,
        satellite_ids: [6, 7],
      },
      object: "Void",
      orbits: [],
    },
    {
      id: 9,
      own_orbit: {
        primary_body_id: 10,
        average_distance: 4072.638530840184,
        eccentricity: 0.0,
        satellite_ids: [],
      },
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
          orbital_point_id: 9,
          orbit: {
            primary_body_id: 10,
            average_distance: 4072.638530840184,
            eccentricity: 0.0,
            satellite_ids: [],
          },
          zones: []
        },
      },
      orbits: [],
    },
    {
      id: 10,
      own_orbit: {
        primary_body_id: 12,
        average_distance: 757.5278169507137,
        eccentricity: 0.0,
        satellite_ids: [8, 9],
      },
      object: "Void",
      orbits: [],
    },
    {
      id: 11,
      own_orbit: {
        primary_body_id: 12,
        average_distance: 54275.716974676216,
        eccentricity: 0.0,
        satellite_ids: [],
      },
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
          orbital_point_id: 11,
          orbit: {
            primary_body_id: 12,
            average_distance: 54275.716974676216,
            eccentricity: 0.0,
            satellite_ids: [],
          },
          zones: []
        },
      },
      orbits: [],
    },
    {
      id: 12,
      own_orbit: {
        primary_body_id: 14,
        average_distance: 22174.13826813803,
        eccentricity: 0.0,
        satellite_ids: [10, 11],
      },
      object: "Void",
      orbits: [],
    },
    {
      id: 13,
      own_orbit: {
        primary_body_id: 14,
        average_distance: 568893.12382782,
        eccentricity: 0.0,
        satellite_ids: [],
      },
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
          orbital_point_id: 13,
          orbit: {
            primary_body_id: 14,
            average_distance: 568893.12382782,
            eccentricity: 0.0,
            satellite_ids: [],
          },
          zones: []
        },
      },
      orbits: [],
    },
    {
      id: 14,
      own_orbit: {
        primary_body_id: 16,
        average_distance: 369028.5577877353,
        eccentricity: 0.0,
        satellite_ids: [12, 13],
      },
      object: "Void",
      orbits: [],
    },
    {
      id: 15,
      own_orbit: {
        primary_body_id: 16,
        average_distance: 6084404.6362967305,
        eccentricity: 0.0,
        satellite_ids: [],
      },
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
          orbital_point_id: 15,
          orbit: {
            primary_body_id: 16,
            average_distance: 6084404.6362967305,
            eccentricity: 0.0,
            satellite_ids: [],
          },
          zones: []
        },
      },
      orbits: [],
    },
    {
      id: 16,
      own_orbit: {
        primary_body_id: null,
        average_distance: null,
        eccentricity: null,
        satellite_ids: [14, 15],
      },
      object: "Void",
      orbits: [],
    },
  ],
};
