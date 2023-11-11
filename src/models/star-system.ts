import { OrbitalPoint, OrbitalPointDTO } from "./orbital-point";
import { Star } from "./star";
import { SystemPeculiarity } from "./system-peculiarity";

export interface StarSystem {
  center: OrbitalPoint;
  mainStar: Star;
  allObjects: OrbitalPoint[];
  specialTraits: SystemPeculiarity[]
}

export interface StarSystemDTO {
  name: string;
  center_id: number;
  main_star_id: number;
  all_objects: OrbitalPointDTO[];
  special_traits: SystemPeculiarity[]
}

export const initialSystem: StarSystemDTO = {
  name: "Debes",
  center_id: 16,
  main_star_id: 0,
  all_objects: [
      {
      id: 2,
      own_orbit: {
        primary_body_id: 3,
        satellite_ids: [
            2
          ],
        zone: "ForbiddenZone",
        average_distance: 0.649263319595727,
        average_distance_from_system_center: 0.649263319595727,
        eccentricity: 0.0,
        inclination: 0.0,
        orbital_period: 0.0
        },
      object: {
        Star: {
          name: "Debes 3",
          mass: 0.5867508,
          luminosity: 0.00036508933,
          radius: 0.0075252797,
          age: 2.298,
          temperature: 7533,
          population: "Subdwarf",
          spectral_type: "DA",
          luminosity_class: "VII",
          orbital_point_id: 2,
          orbit: {
            primary_body_id: 3,
            satellite_ids: [
                2
              ],
            zone: "ForbiddenZone",
            average_distance: 0.649263319595727,
            average_distance_from_system_center: 0.649263319595727,
            eccentricity: 0.0,
            inclination: 0.0,
            orbital_period: 0.0
            },
          zones: [
              {
              start: 0.0,
              end: 0.00003501115767123574,
              zone_type: "Corona"
              },
              {
              start: 0.00003501115767123574,
              end: 0.05867508053779602,
              zone_type: "InnerLimit"
              },
              {
              start: 0.05867508053779602,
              end: 0.09267045399174094,
              zone_type: "InnerZone"
              },
              {
              start: 0.09267045399174094,
              end: 0.33316281552844523,
              zone_type: "OuterZone"
              },
              {
              start: 0.33316281552844523,
              end: 2.998465339756007,
              zone_type: "ForbiddenZone"
              },
              {
              start: 2.998465339756007,
              end: 23.470032215118408,
              zone_type: "OuterZone"
              }
            ],
          special_traits: []
          }
        },
      orbits: [
          {
          primary_body_id: 2,
          satellite_ids: [
              17
            ],
          zone: "OuterZone",
          average_distance: 0.1274218742386438,
          average_distance_from_system_center: 0.7766851938343708,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 2,
          satellite_ids: [
              18
            ],
          zone: "OuterZone",
          average_distance: 0.21661718620569442,
          average_distance_from_system_center: 0.8658805058014214,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          }
        ]
      },
      {
      id: 1,
      own_orbit: {
        primary_body_id: 3,
        satellite_ids: [
            1
          ],
        zone: "ForbiddenZone",
        average_distance: 8.183080115223051,
        average_distance_from_system_center: 8.183080115223051,
        eccentricity: 0.0,
        inclination: 0.0,
        orbital_period: 0.0
        },
      object: {
        Star: {
          name: "Debes 2",
          mass: 0.04655408,
          luminosity: 0.0003761198,
          radius: 0.064500004,
          age: 1.009,
          temperature: 2592,
          population: "Subdwarf",
          spectral_type: {
            L: 0
            },
          luminosity_class: "Y",
          orbital_point_id: 1,
          orbit: {
            primary_body_id: 3,
            satellite_ids: [
                1
              ],
            zone: "ForbiddenZone",
            average_distance: 8.183080115223051,
            average_distance_from_system_center: 8.183080115223051,
            eccentricity: 0.0,
            inclination: 0.0,
            orbital_period: 0.0
            },
          zones: [
              {
              start: 0.0,
              end: 0.00030008450396931056,
              zone_type: "Corona"
              },
              {
              start: 0.00030008450396931056,
              end: 0.0046554082073271275,
              zone_type: "InnerLimit"
              },
              {
              start: 0.0046554082073271275,
              end: 0.019393808348034232,
              zone_type: "InnerZone"
              },
              {
              start: 0.019393808348034232,
              end: 0.03432704077602059,
              zone_type: "BioZone"
              },
              {
              start: 0.03432704077602059,
              end: 0.09405997432768344,
              zone_type: "InnerZone"
              },
              {
              start: 0.09405997432768344,
              end: 0.2985099586672583,
              zone_type: "OuterZone"
              },
              {
              start: 0.2985099586672583,
              end: 2.6865896280053247,
              zone_type: "ForbiddenZone"
              }
            ],
          special_traits: []
          }
        },
      orbits: [
          {
          primary_body_id: 1,
          satellite_ids: [],
          zone: "InnerZone",
          average_distance: 0.06612304512866025,
          average_distance_from_system_center: 8.249203160351712,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 1,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 0.11240917671872243,
          average_distance_from_system_center: 8.295489291941774,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 1,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 0.19109560042182813,
          average_distance_from_system_center: 8.37417571564488,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          }
        ]
      },
      {
      id: 0,
      own_orbit: {
        primary_body_id: 4,
        satellite_ids: [
            0
          ],
        zone: "ForbiddenZone",
        average_distance: 10.383477663953684,
        average_distance_from_system_center: 10.383477663953684,
        eccentricity: 0.0,
        inclination: 0.0,
        orbital_period: 0.0
        },
      object: {
        Star: {
          name: "Debes 1",
          mass: 1.6125137,
          luminosity: 4.9184327,
          radius: 0.8762482,
          age: 0.001,
          temperature: 7393,
          population: "Subdwarf",
          spectral_type: {
            A: 9
            },
          luminosity_class: "V",
          orbital_point_id: 0,
          orbit: {
            primary_body_id: 4,
            satellite_ids: [
                0
              ],
            zone: "ForbiddenZone",
            average_distance: 10.383477663953684,
            average_distance_from_system_center: 10.383477663953684,
            eccentricity: 0.0,
            inclination: 0.0,
            orbital_period: 0.0
            },
          zones: [
              {
              start: 0.0,
              end: 0.004076720685051715,
              zone_type: "Corona"
              },
              {
              start: 0.004076720685051715,
              end: 0.16125136613845825,
              zone_type: "InnerLimit"
              },
              {
              start: 0.16125136613845825,
              end: 0.4661252488263206,
              zone_type: "InnerZone"
              },
              {
              start: 0.4661252488263206,
              end: 4.195127239436886,
              zone_type: "ForbiddenZone"
              },
              {
              start: 4.195127239436886,
              end: 10.756106352806091,
              zone_type: "InnerZone"
              },
              {
              start: 10.756106352806091,
              end: 64.5005464553833,
              zone_type: "OuterZone"
              }
            ],
          special_traits: []
          }
        },
      orbits: []
      },
      {
      id: 3,
      own_orbit: {
        primary_body_id: 4,
        satellite_ids: [
            3
          ],
        zone: "ForbiddenZone",
        average_distance: 26.43829180102182,
        average_distance_from_system_center: 26.43829180102182,
        eccentricity: 0.0,
        inclination: 0.0,
        orbital_period: 0.0
        },
      object: "Void",
      orbits: [
          {
          primary_body_id: 3,
          satellite_ids: [
              2
            ],
          zone: "ForbiddenZone",
          average_distance: 0.649263319595727,
          average_distance_from_system_center: 0.649263319595727,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 3,
          satellite_ids: [
              1
            ],
          zone: "ForbiddenZone",
          average_distance: 8.183080115223051,
          average_distance_from_system_center: 8.183080115223051,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          }
        ]
      },
      {
      id: 6,
      own_orbit: {
        primary_body_id: 7,
        satellite_ids: [
            6
          ],
        zone: "ForbiddenZone",
        average_distance: 3.940426426706387,
        average_distance_from_system_center: 3.940426426706387,
        eccentricity: 0.0,
        inclination: 0.0,
        orbital_period: 0.0
        },
      object: {
        Star: {
          name: "Debes 5",
          mass: 0.047221683,
          luminosity: 0.0003816238,
          radius: 0.065249994,
          age: 0.156,
          temperature: 2586,
          population: "Subdwarf",
          spectral_type: {
            L: 0
            },
          luminosity_class: "Y",
          orbital_point_id: 6,
          orbit: {
            primary_body_id: 7,
            satellite_ids: [
                6
              ],
            zone: "ForbiddenZone",
            average_distance: 3.940426426706387,
            average_distance_from_system_center: 3.940426426706387,
            eccentricity: 0.0,
            inclination: 0.0,
            orbital_period: 0.0
            },
          zones: [
              {
              start: 0.0,
              end: 0.000303573813523306,
              zone_type: "Corona"
              },
              {
              start: 0.000303573813523306,
              end: 0.004722168203443289,
              zone_type: "InnerLimit"
              },
              {
              start: 0.004722168203443289,
              end: 0.019535193939168815,
              zone_type: "InnerZone"
              },
              {
              start: 0.019535193939168815,
              end: 0.0345772932723288,
              zone_type: "BioZone"
              },
              {
              start: 0.0345772932723288,
              end: 0.09474568711593746,
              zone_type: "InnerZone"
              },
              {
              start: 0.09474568711593746,
              end: 0.20588463836864154,
              zone_type: "OuterZone"
              },
              {
              start: 0.20588463836864154,
              end: 1.8529617453177738,
              zone_type: "ForbiddenZone"
              },
              {
              start: 1.8529617453177738,
              end: 1.8888673186302185,
              zone_type: "OuterZone"
              }
            ],
          special_traits: []
          }
        },
      orbits: [
          {
          primary_body_id: 6,
          satellite_ids: [],
          zone: "InnerZone",
          average_distance: 0.05648568448035739,
          average_distance_from_system_center: 3.9969121111867443,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 6,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 0.1016742320646433,
          average_distance_from_system_center: 4.04210065877103,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 6,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 0.1728461945098936,
          average_distance_from_system_center: 4.1132726212162805,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 6,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 0.20708568448035738,
          average_distance_from_system_center: 4.147512111186744,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 6,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 0.3111231501178085,
          average_distance_from_system_center: 4.251549576824195,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 6,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 0.3616856844803574,
          average_distance_from_system_center: 4.302112111186744,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 6,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 0.5289093552002745,
          average_distance_from_system_center: 4.469335781906661,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 6,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 0.5786970951685718,
          average_distance_from_system_center: 4.519123521874959,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 6,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 0.7933640328004117,
          average_distance_from_system_center: 4.733790459506799,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 6,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 0.925915352269715,
          average_distance_from_system_center: 4.866341778976102,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 6,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 1.3487188557606997,
          average_distance_from_system_center: 5.289145282467087,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 6,
          satellite_ids: [],
          zone: "InnerZone",
          average_distance: 2.2928220547931897,
          average_distance_from_system_center: 6.233248481499577,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          }
        ]
      },
      {
      id: 5,
      own_orbit: {
        primary_body_id: 7,
        satellite_ids: [
            5
          ],
        zone: "ForbiddenZone",
        average_distance: 6.000825712033978,
        average_distance_from_system_center: 6.000825712033978,
        eccentricity: 0.0,
        inclination: 0.0,
        orbital_period: 0.0
        },
      object: {
        Star: {
          name: "Debes 4",
          mass: 0.031007994,
          luminosity: 0.00028726755,
          radius: 0.046499997,
          age: 0.001,
          temperature: 2854,
          population: "Subdwarf",
          spectral_type: {
            M: 7
            },
          luminosity_class: "V",
          orbital_point_id: 5,
          orbit: {
            primary_body_id: 7,
            satellite_ids: [
                5
              ],
            zone: "ForbiddenZone",
            average_distance: 6.000825712033978,
            average_distance_from_system_center: 6.000825712033978,
            eccentricity: 0.0,
            inclination: 0.0,
            orbital_period: 0.0
            },
          zones: [
              {
              start: 0.0,
              end: 0.00021633996543750491,
              zone_type: "Corona"
              },
              {
              start: 0.00021633996543750491,
              end: 0.003100799396634102,
              zone_type: "InnerLimit"
              },
              {
              start: 0.003100799396634102,
              end: 0.016948969115722103,
              zone_type: "InnerZone"
              },
              {
              start: 0.016948969115722103,
              end: 0.029999675334828124,
              zone_type: "BioZone"
              },
              {
              start: 0.029999675334828124,
              end: 0.08220250466838479,
              zone_type: "InnerZone"
              },
              {
              start: 0.08220250466838479,
              end: 0.4289081757290993,
              zone_type: "OuterZone"
              },
              {
              start: 0.4289081757290993,
              end: 3.8601735815618934,
              zone_type: "ForbiddenZone"
              }
            ],
          special_traits: []
          }
        },
      orbits: [
          {
          primary_body_id: 5,
          satellite_ids: [],
          zone: "BioZone",
          average_distance: 0.026029365945460972,
          average_distance_from_system_center: 6.026855077979439,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 5,
          satellite_ids: [],
          zone: "InnerZone",
          average_distance: 0.04424992210728365,
          average_distance_from_system_center: 6.045075634141262,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 5,
          satellite_ids: [],
          zone: "InnerZone",
          average_distance: 0.0752248675823822,
          average_distance_from_system_center: 6.076050579616361,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 5,
          satellite_ids: [],
          zone: "InnerZone",
          average_distance: 0.12788227489004975,
          average_distance_from_system_center: 6.128707986924028,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 5,
          satellite_ids: [],
          zone: "InnerZone",
          average_distance: 0.17262936594546097,
          average_distance_from_system_center: 6.1734550779794395,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 5,
          satellite_ids: [],
          zone: "InnerZone",
          average_distance: 0.21739986731308455,
          average_distance_from_system_center: 6.218225579347063,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 5,
          satellite_ids: [],
          zone: "InnerZone",
          average_distance: 0.3695797744322437,
          average_distance_from_system_center: 6.370405486466222,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 5,
          satellite_ids: [],
          zone: "InnerZone",
          average_distance: 0.6282856165348143,
          average_distance_from_system_center: 6.629111328568793,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 5,
          satellite_ids: [],
          zone: "BioZone",
          average_distance: 1.0680855481091842,
          average_distance_from_system_center: 7.068911260143162,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 5,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 2.02936254140745,
          average_distance_from_system_center: 8.030188253441429,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          }
        ]
      },
      {
      id: 4,
      own_orbit: {
        primary_body_id: 8,
        satellite_ids: [
            4
          ],
        zone: "ForbiddenZone",
        average_distance: 3.3227725116004625,
        average_distance_from_system_center: 3.3227725116004625,
        eccentricity: 0.0,
        inclination: 0.0,
        orbital_period: 0.0
        },
      object: "Void",
      orbits: [
          {
          primary_body_id: 4,
          satellite_ids: [
              0
            ],
          zone: "ForbiddenZone",
          average_distance: 10.383477663953684,
          average_distance_from_system_center: 10.383477663953684,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 4,
          satellite_ids: [
              3
            ],
          zone: "ForbiddenZone",
          average_distance: 26.43829180102182,
          average_distance_from_system_center: 26.43829180102182,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          }
        ]
      },
      {
      id: 7,
      own_orbit: {
        primary_body_id: 8,
        satellite_ids: [
            7
          ],
        zone: "ForbiddenZone",
        average_distance: 95.39019330157709,
        average_distance_from_system_center: 95.39019330157709,
        eccentricity: 0.0,
        inclination: 0.0,
        orbital_period: 0.0
        },
      object: "Void",
      orbits: [
          {
          primary_body_id: 7,
          satellite_ids: [
              6
            ],
          zone: "ForbiddenZone",
          average_distance: 3.940426426706387,
          average_distance_from_system_center: 3.940426426706387,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 7,
          satellite_ids: [
              5
            ],
          zone: "ForbiddenZone",
          average_distance: 6.000825712033978,
          average_distance_from_system_center: 6.000825712033978,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          }
        ]
      },
      {
      id: 9,
      own_orbit: {
        primary_body_id: 11,
        satellite_ids: [
            9
          ],
        zone: "ForbiddenZone",
        average_distance: 1.6487517661810627,
        average_distance_from_system_center: 1.6487517661810627,
        eccentricity: 0.0,
        inclination: 0.0,
        orbital_period: 0.0
        },
      object: {
        Star: {
          name: "Debes 6",
          mass: 0.80881244,
          luminosity: 0.3311813,
          radius: 0.554448,
          age: 0.001,
          temperature: 4828,
          population: "Subdwarf",
          spectral_type: {
            K: 2
            },
          luminosity_class: "V",
          orbital_point_id: 9,
          orbit: {
            primary_body_id: 11,
            satellite_ids: [
                9
              ],
            zone: "ForbiddenZone",
            average_distance: 1.6487517661810627,
            average_distance_from_system_center: 1.6487517661810627,
            eccentricity: 0.0,
            inclination: 0.0,
            orbital_period: 0.0
            },
          zones: [
              {
              start: 0.0,
              end: 0.002579554188580675,
              zone_type: "Corona"
              },
              {
              start: 0.002579554188580675,
              end: 0.08088124543428421,
              zone_type: "InnerLimit"
              },
              {
              start: 0.08088124543428421,
              end: 0.33316281552844523,
              zone_type: "InnerZone"
              },
              {
              start: 0.33316281552844523,
              end: 2.998465339756007,
              zone_type: "ForbiddenZone"
              },
              {
              start: 2.998465339756007,
              end: 32.352497577667236,
              zone_type: "OuterZone"
              }
            ],
          special_traits: []
          }
        },
      orbits: [
          {
          primary_body_id: 9,
          satellite_ids: [],
          zone: "InnerZone",
          average_distance: 0.10194992823906246,
          average_distance_from_system_center: 1.7507016944201252,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 9,
          satellite_ids: [],
          zone: "InnerZone",
          average_distance: 0.1733148780064062,
          average_distance_from_system_center: 1.8220666441874689,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 9,
          satellite_ids: [],
          zone: "InnerZone",
          average_distance: 0.25624992823906245,
          average_distance_from_system_center: 1.9050016944201251,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 9,
          satellite_ids: [],
          zone: "InnerZone",
          average_distance: 0.2946352926108905,
          average_distance_from_system_center: 1.943387058791953,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 9,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 0.4356248780064062,
          average_distance_from_system_center: 2.084376644187469,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 9,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 0.5598070559606919,
          average_distance_from_system_center: 2.2085588221417547,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 9,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 0.7405622926108906,
          average_distance_from_system_center: 2.3893140587919532,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 9,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 0.8956912895371071,
          average_distance_from_system_center: 2.54444305571817,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 9,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 1.407068355960692,
          average_distance_from_system_center: 3.0558201221417547,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 9,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 1.522675192213082,
          average_distance_from_system_center: 3.171426958394145,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 9,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 2.110602533941038,
          average_distance_from_system_center: 3.7593543001221006,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 9,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 2.5885478267622393,
          average_distance_from_system_center: 4.237299592943302,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 9,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 3.376964054305661,
          average_distance_from_system_center: 5.025715820486724,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 9,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 4.141676522819583,
          average_distance_from_system_center: 5.790428289000645,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 9,
          satellite_ids: [],
          zone: "InnerZone",
          average_distance: 5.740838892319624,
          average_distance_from_system_center: 7.389590658500686,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 9,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 9.75942611694336,
          average_distance_from_system_center: 11.408177883124422,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 9,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 16.59102439880371,
          average_distance_from_system_center: 18.239776164984775,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          }
        ]
      },
      {
      id: 10,
      own_orbit: {
        primary_body_id: 11,
        satellite_ids: [
            10
          ],
        zone: "ForbiddenZone",
        average_distance: 22.80676400420003,
        average_distance_from_system_center: 22.80676400420003,
        eccentricity: 0.0,
        inclination: 0.0,
        orbital_period: 0.0
        },
      object: {
        Star: {
          name: "Debes 7",
          mass: 0.058470853,
          luminosity: 0.00049987814,
          radius: 0.077250004,
          age: 2.582,
          temperature: 2543,
          population: "Subdwarf",
          spectral_type: {
            L: 0
            },
          luminosity_class: "Y",
          orbital_point_id: 10,
          orbit: {
            primary_body_id: 11,
            satellite_ids: [
                10
              ],
            zone: "ForbiddenZone",
            average_distance: 22.80676400420003,
            average_distance_from_system_center: 22.80676400420003,
            eccentricity: 0.0,
            inclination: 0.0,
            orbital_period: 0.0
            },
          zones: [
              {
              start: 0.0,
              end: 0.00035940352898692463,
              zone_type: "Corona"
              },
              {
              start: 0.00035940352898692463,
              end: 0.005847085267305374,
              zone_type: "InnerLimit"
              },
              {
              start: 0.005847085267305374,
              end: 0.02235795466733871,
              zone_type: "InnerZone"
              },
              {
              start: 0.02235795466733871,
              end: 0.03957357976118952,
              zone_type: "BioZone"
              },
              {
              start: 0.03957357976118952,
              end: 0.10843608453869819,
              zone_type: "InnerZone"
              },
              {
              start: 0.10843608453869819,
              end: 1.2105092656072631,
              zone_type: "OuterZone"
              },
              {
              start: 1.2105092656072631,
              end: 10.894583390465368,
              zone_type: "ForbiddenZone"
              }
            ],
          special_traits: []
          }
        },
      orbits: [
          {
          primary_body_id: 10,
          satellite_ids: [],
          zone: "BioZone",
          average_distance: 0.024838593214723714,
          average_distance_from_system_center: 22.831602597414754,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 10,
          satellite_ids: [],
          zone: "InnerZone",
          average_distance: 0.04222560846503031,
          average_distance_from_system_center: 22.84898961266506,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 10,
          satellite_ids: [],
          zone: "InnerZone",
          average_distance: 0.07178353439055153,
          average_distance_from_system_center: 22.87854753859058,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 10,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 0.1220320084639376,
          average_distance_from_system_center: 22.928796012663966,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 10,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 0.1858385932147237,
          average_distance_from_system_center: 22.992602597414752,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 10,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 0.20745441438869391,
          average_distance_from_system_center: 23.014218418588722,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 10,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 0.3319270630219103,
          average_distance_from_system_center: 23.13869106722194,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 10,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 0.3423385932147237,
          average_distance_from_system_center: 23.149102597414753,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 10,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 0.5642760071372475,
          average_distance_from_system_center: 23.37104001133728,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 10,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 0.5819756084650303,
          average_distance_from_system_center: 23.38873961266506,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 10,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 0.902841611419596,
          average_distance_from_system_center: 23.709605615619626,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          }
        ]
      },
      {
      id: 8,
      own_orbit: {
        primary_body_id: 12,
        satellite_ids: [
            8
          ],
        zone: "ForbiddenZone",
        average_distance: 77.64629068780108,
        average_distance_from_system_center: 77.64629068780108,
        eccentricity: 0.0,
        inclination: 0.0,
        orbital_period: 0.0
        },
      object: "Void",
      orbits: [
          {
          primary_body_id: 8,
          satellite_ids: [
              4
            ],
          zone: "ForbiddenZone",
          average_distance: 3.3227725116004625,
          average_distance_from_system_center: 3.3227725116004625,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 8,
          satellite_ids: [
              7
            ],
          zone: "ForbiddenZone",
          average_distance: 95.39019330157709,
          average_distance_from_system_center: 95.39019330157709,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          }
        ]
      },
      {
      id: 11,
      own_orbit: {
        primary_body_id: 12,
        satellite_ids: [
            11
          ],
        zone: "ForbiddenZone",
        average_distance: 208.0678038742937,
        average_distance_from_system_center: 208.0678038742937,
        eccentricity: 0.0,
        inclination: 0.0,
        orbital_period: 0.0
        },
      object: "Void",
      orbits: [
          {
          primary_body_id: 11,
          satellite_ids: [
              9
            ],
          zone: "ForbiddenZone",
          average_distance: 1.6487517661810627,
          average_distance_from_system_center: 1.6487517661810627,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 11,
          satellite_ids: [
              10
            ],
          zone: "ForbiddenZone",
          average_distance: 22.80676400420003,
          average_distance_from_system_center: 22.80676400420003,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          }
        ]
      },
      {
      id: 14,
      own_orbit: {
        primary_body_id: 15,
        satellite_ids: [
            14
          ],
        zone: "ForbiddenZone",
        average_distance: 7.287550239221276,
        average_distance_from_system_center: 7.287550239221276,
        eccentricity: 0.0,
        inclination: 0.0,
        orbital_period: 0.0
        },
      object: {
        Star: {
          name: "Debes 9",
          mass: 0.26767886,
          luminosity: 0.024224646,
          radius: 0.26099998,
          age: 0.001,
          temperature: 3650,
          population: "Subdwarf",
          spectral_type: {
            M: 1
            },
          luminosity_class: "V",
          orbital_point_id: 14,
          orbit: {
            primary_body_id: 15,
            satellite_ids: [
                14
              ],
            zone: "ForbiddenZone",
            average_distance: 7.287550239221276,
            average_distance_from_system_center: 7.287550239221276,
            eccentricity: 0.0,
            inclination: 0.0,
            orbital_period: 0.0
            },
          zones: [
              {
              start: 0.0,
              end: 0.001214295254093224,
              zone_type: "Corona"
              },
              {
              start: 0.001214295254093224,
              end: 0.02676788531243801,
              zone_type: "InnerLimit"
              },
              {
              start: 0.02676788531243801,
              end: 0.15564268819795038,
              zone_type: "InnerZone"
              },
              {
              start: 0.15564268819795038,
              end: 0.2754875581103722,
              zone_type: "BioZone"
              },
              {
              start: 0.2754875581103722,
              end: 0.2985099586672583,
              zone_type: "InnerZone"
              },
              {
              start: 0.2985099586672583,
              end: 2.6865896280053247,
              zone_type: "ForbiddenZone"
              },
              {
              start: 2.6865896280053247,
              end: 10.707154273986816,
              zone_type: "OuterZone"
              }
            ],
          special_traits: []
          }
        },
      orbits: [
          {
          primary_body_id: 14,
          satellite_ids: [],
          zone: "InnerZone",
          average_distance: 4.594030723964595,
          average_distance_from_system_center: 11.881580963185872,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 14,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 4.900299438895568,
          average_distance_from_system_center: 12.187849678116844,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 14,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 7.8098522307398115,
          average_distance_from_system_center: 15.097402469961088,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 14,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 13.27674879225768,
          average_distance_from_system_center: 20.564299031478956,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          }
        ]
      },
      {
      id: 13,
      own_orbit: {
        primary_body_id: 15,
        satellite_ids: [
            13
          ],
        zone: "ForbiddenZone",
        average_distance: 11.781853410432646,
        average_distance_from_system_center: 11.781853410432646,
        eccentricity: 0.0,
        inclination: 0.0,
        orbital_period: 0.0
        },
      object: {
        Star: {
          name: "Debes 8",
          mass: 0.16557014,
          luminosity: 0.0059235655,
          radius: 0.17775002,
          age: 0.001,
          temperature: 3110,
          population: "Subdwarf",
          spectral_type: {
            M: 5
            },
          luminosity_class: "V",
          orbital_point_id: 13,
          orbit: {
            primary_body_id: 15,
            satellite_ids: [
                13
              ],
            zone: "ForbiddenZone",
            average_distance: 11.781853410432646,
            average_distance_from_system_center: 11.781853410432646,
            eccentricity: 0.0,
            inclination: 0.0,
            orbital_period: 0.0
            },
          zones: [
              {
              start: 0.0,
              end: 0.0008269771100198464,
              zone_type: "Corona"
              },
              {
              start: 0.0008269771100198464,
              end: 0.016557013615965843,
              zone_type: "InnerLimit"
              },
              {
              start: 0.016557013615965843,
              end: 0.07696470280026291,
              zone_type: "InnerZone"
              },
              {
              start: 0.07696470280026291,
              end: 0.13622752395646534,
              zone_type: "BioZone"
              },
              {
              start: 0.13622752395646534,
              end: 0.3732788249850273,
              zone_type: "InnerZone"
              },
              {
              start: 0.3732788249850273,
              end: 0.4661252488263206,
              zone_type: "OuterZone"
              },
              {
              start: 0.4661252488263206,
              end: 4.195127239436886,
              zone_type: "ForbiddenZone"
              },
              {
              start: 4.195127239436886,
              end: 6.622805595397949,
              zone_type: "OuterZone"
              }
            ],
          special_traits: []
          }
        },
      orbits: [
          {
          primary_body_id: 13,
          satellite_ids: [],
          zone: "InnerZone",
          average_distance: 0.12132971157840432,
          average_distance_from_system_center: 11.90318312201105,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 13,
          satellite_ids: [],
          zone: "InnerZone",
          average_distance: 0.20626050968328732,
          average_distance_from_system_center: 11.988113920115934,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 13,
          satellite_ids: [],
          zone: "InnerZone",
          average_distance: 0.2631297115784043,
          average_distance_from_system_center: 12.04498312201105,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 13,
          satellite_ids: [],
          zone: "InnerZone",
          average_distance: 0.35064286646158843,
          average_distance_from_system_center: 12.132496276894235,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 13,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 0.44732050968328735,
          average_distance_from_system_center: 12.229173920115933,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 13,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 0.5960928729847004,
          average_distance_from_system_center: 12.377946283417346,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 13,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 0.7604448664615885,
          average_distance_from_system_center: 12.542298276894234,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 13,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 1.0133578840739905,
          average_distance_from_system_center: 12.795211294506636,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 13,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 1.2167117863385417,
          average_distance_from_system_center: 12.998565196771187,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 13,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 1.7227084029257838,
          average_distance_from_system_center: 13.50456181335843,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 13,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 2.190081215409375,
          average_distance_from_system_center: 13.971934625842021,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 13,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 2.9286042849738325,
          average_distance_from_system_center: 14.710457695406479,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 13,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 3.066113701573125,
          average_distance_from_system_center: 14.84796711200577,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 13,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 5.271487712952899,
          average_distance_from_system_center: 17.053341123385543,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 13,
          satellite_ids: [],
          zone: "OuterZone",
          average_distance: 8.961529112019928,
          average_distance_from_system_center: 20.743382522452574,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          }
        ]
      },
      {
      id: 12,
      own_orbit: {
        primary_body_id: 16,
        satellite_ids: [
            12
          ],
        zone: "ForbiddenZone",
        average_distance: 98.83917825802153,
        average_distance_from_system_center: 98.83917825802153,
        eccentricity: 0.0,
        inclination: 0.0,
        orbital_period: 0.0
        },
      object: "Void",
      orbits: [
          {
          primary_body_id: 12,
          satellite_ids: [
              8
            ],
          zone: "ForbiddenZone",
          average_distance: 77.64629068780108,
          average_distance_from_system_center: 77.64629068780108,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 12,
          satellite_ids: [
              11
            ],
          zone: "ForbiddenZone",
          average_distance: 208.0678038742937,
          average_distance_from_system_center: 208.0678038742937,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          }
        ]
      },
      {
      id: 15,
      own_orbit: {
        primary_body_id: 16,
        satellite_ids: [
            15
          ],
        zone: "ForbiddenZone",
        average_distance: 728.053839107999,
        average_distance_from_system_center: 728.053839107999,
        eccentricity: 0.0,
        inclination: 0.0,
        orbital_period: 0.0
        },
      object: "Void",
      orbits: [
          {
          primary_body_id: 15,
          satellite_ids: [
              14
            ],
          zone: "ForbiddenZone",
          average_distance: 7.287550239221276,
          average_distance_from_system_center: 7.287550239221276,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 15,
          satellite_ids: [
              13
            ],
          zone: "ForbiddenZone",
          average_distance: 11.781853410432646,
          average_distance_from_system_center: 11.781853410432646,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          }
        ]
      },
      {
      id: 16,
      own_orbit: null,
      object: "Void",
      orbits: [
          {
          primary_body_id: 16,
          satellite_ids: [
              12
            ],
          zone: "ForbiddenZone",
          average_distance: 98.83917825802153,
          average_distance_from_system_center: 98.83917825802153,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          },
          {
          primary_body_id: 16,
          satellite_ids: [
              15
            ],
          zone: "ForbiddenZone",
          average_distance: 728.053839107999,
          average_distance_from_system_center: 728.053839107999,
          eccentricity: 0.0,
          inclination: 0.0,
          orbital_period: 0.0
          }
        ]
      },
      {
      id: 17,
      own_orbit: {
        primary_body_id: 2,
        satellite_ids: [
            17
          ],
        zone: "OuterZone",
        average_distance: 0.1274218742386438,
        average_distance_from_system_center: 0.7766851938343708,
        eccentricity: 0.0,
        inclination: 0.0,
        orbital_period: 0.0
        },
      object: {
        GaseousBody: {
          stub: false,
          name: "Debes 3b",
          orbit: {
            primary_body_id: 2,
            satellite_ids: [
                17
              ],
            zone: "OuterZone",
            average_distance: 0.1274218742386438,
            average_distance_from_system_center: 0.7766851938343708,
            eccentricity: 0.0,
            inclination: 0.0,
            orbital_period: 0.0
            },
          orbital_point_id: 17,
          mass: 135.63,
          radius: 4.66871,
          density: 1.3328,
          blackbody_temperature: 108,
          size: "Giant",
          details: {
            Gaseous: {}
            }
          }
        },
      orbits: []
      },
      {
      id: 18,
      own_orbit: {
        primary_body_id: 2,
        satellite_ids: [
            18
          ],
        zone: "OuterZone",
        average_distance: 0.21661718620569442,
        average_distance_from_system_center: 0.8658805058014214,
        eccentricity: 0.0,
        inclination: 0.0,
        orbital_period: 0.0
        },
      object: {
        TelluricDisk: {
          stub: false,
          name: "Debes 3c",
          orbit: {
            primary_body_id: 2,
            satellite_ids: [
                18
              ],
            zone: "OuterZone",
            average_distance: 0.21661718620569442,
            average_distance_from_system_center: 0.8658805058014214,
            eccentricity: 0.0,
            inclination: 0.0,
            orbital_period: 0.0
            },
          orbital_point_id: 18,
          details: {
            Belt: {
              composition: "Asteroid"
              }
            }
          }
        },
      orbits: []
      }
    ],
  special_traits: []
};
