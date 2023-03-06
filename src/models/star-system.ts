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
    "center_id": 16,
    "main_star_id": 0,
    "all_objects": [
        {
            "id": 1,
            "primary_body_id": 3,
            "distance_from_primary": 0.03745821439248134,
            "satellite_ids": [],
            "object": {
                "Star": {
                    "name": "Octopus Ba",
                    "mass": 0.114816464,
                    "luminosity": 0.0017136049,
                    "radius": 0.177,
                    "age": 4.6,
                    "temperature": 2791,
                    "spectral_type": {
                        "M": 7
                    },
                    "luminosity_class": "V"
                }
            }
        },
        {
            "id": 2,
            "primary_body_id": 3,
            "distance_from_primary": 0.04973226716467603,
            "satellite_ids": [],
            "object": {
                "Star": {
                    "name": "Octopus Bb",
                    "mass": 0.08647946,
                    "luminosity": 0.0008467538,
                    "radius": 0.141,
                    "age": 4.6,
                    "temperature": 2622,
                    "spectral_type": {
                        "M": 9
                    },
                    "luminosity_class": "V"
                }
            }
        },
        {
            "id": 0,
            "primary_body_id": 4,
            "distance_from_primary": 0.05513547187959574,
            "satellite_ids": [],
            "object": {
                "Star": {
                    "name": "Octopus A",
                    "mass": 1.234416,
                    "luminosity": 4.4682164,
                    "radius": 2.0020883,
                    "age": 4.6,
                    "temperature": 5931,
                    "spectral_type": {
                        "G": 0
                    },
                    "luminosity_class": "V"
                }
            }
        },
        {
            "id": 3,
            "primary_body_id": 4,
            "distance_from_primary": 0.3381097176403421,
            "satellite_ids": [
                1,
                2
            ],
            "object": "Void"
        },
        {
            "id": 4,
            "primary_body_id": 6,
            "distance_from_primary": 5.197310496129988,
            "satellite_ids": [
                0,
                3
            ],
            "object": "Void"
        },
        {
            "id": 5,
            "primary_body_id": 6,
            "distance_from_primary": 20.900606604977213,
            "satellite_ids": [],
            "object": {
                "Star": {
                    "name": "Octopus C",
                    "mass": 0.35701552,
                    "luminosity": 0.03640418,
                    "radius": 0.439,
                    "age": 4.6,
                    "temperature": 3805,
                    "spectral_type": {
                        "K": 9
                    },
                    "luminosity_class": "V"
                }
            }
        },
        {
            "id": 6,
            "primary_body_id": 8,
            "distance_from_primary": 19.766755970567417,
            "satellite_ids": [
                4,
                5
            ],
            "object": "Void"
        },
        {
            "id": 7,
            "primary_body_id": 8,
            "distance_from_primary": 266.1746531138536,
            "satellite_ids": [],
            "object": {
                "Star": {
                    "name": "Octopus D",
                    "mass": 0.13313216,
                    "luminosity": 0.0025596572,
                    "radius": 0.19899999,
                    "age": 4.6,
                    "temperature": 2910,
                    "spectral_type": {
                        "M": 6
                    },
                    "luminosity_class": "V"
                }
            }
        },
        {
            "id": 8,
            "primary_body_id": 10,
            "distance_from_primary": 309.734801744982,
            "satellite_ids": [
                6,
                7
            ],
            "object": "Void"
        },
        {
            "id": 9,
            "primary_body_id": 10,
            "distance_from_primary": 2765.0653613474487,
            "satellite_ids": [],
            "object": {
                "Star": {
                    "name": "Octopus E",
                    "mass": 0.21572936,
                    "luminosity": 0.010239862,
                    "radius": 0.293,
                    "age": 4.6,
                    "temperature": 3392,
                    "spectral_type": {
                        "M": 4
                    },
                    "luminosity_class": "V"
                }
            }
        },
        {
            "id": 12,
            "primary_body_id": 13,
            "distance_from_primary": 0.0003740043956514335,
            "satellite_ids": [],
            "object": {
                "Star": {
                    "name": "Octopus Fa",
                    "mass": 0.6113024,
                    "luminosity": 0.00029274347,
                    "radius": 0.009897539,
                    "age": 4.6,
                    "temperature": 7589,
                    "spectral_type": "DB",
                    "luminosity_class": "VII"
                }
            }
        },
        {
            "id": 11,
            "primary_body_id": 13,
            "distance_from_primary": 0.002122341315415619,
            "satellite_ids": [],
            "object": {
                "Star": {
                    "name": "Octopus Fb",
                    "mass": 0.10772526,
                    "luminosity": 0.0014501228,
                    "radius": 0.168,
                    "age": 4.6,
                    "temperature": 2748,
                    "spectral_type": {
                        "M": 7
                    },
                    "luminosity_class": "V"
                }
            }
        },
        {
            "id": 10,
            "primary_body_id": 14,
            "distance_from_primary": 8398.912409629105,
            "satellite_ids": [
                8,
                9
            ],
            "object": "Void"
        },
        {
            "id": 13,
            "primary_body_id": 14,
            "distance_from_primary": 25015.75579368719,
            "satellite_ids": [
                12,
                11
            ],
            "object": "Void"
        },
        {
            "id": 14,
            "primary_body_id": 16,
            "distance_from_primary": 62671.17324970373,
            "satellite_ids": [
                10,
                13
            ],
            "object": "Void"
        },
        {
            "id": 15,
            "primary_body_id": 16,
            "distance_from_primary": 299130.7939912374,
            "satellite_ids": [],
            "object": {
                "Star": {
                    "name": "Octopus G",
                    "mass": 0.5993305,
                    "luminosity": 0.12051362,
                    "radius": 0.5913681,
                    "age": 4.6,
                    "temperature": 4421,
                    "spectral_type": {
                        "K": 4
                    },
                    "luminosity_class": "V"
                }
            }
        },
        {
            "id": 16,
            "primary_body_id": null,
            "distance_from_primary": null,
            "satellite_ids": [
                14,
                15
            ],
            "object": "Void"
        }
    ]
};