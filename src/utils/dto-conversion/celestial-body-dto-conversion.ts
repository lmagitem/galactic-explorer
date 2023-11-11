import { AstronomicalObjectTypeEnum } from "../../models/astronomical-object";
import { CelestialBody, CelestialBodyDTO } from "../../models/celestial-body";
import { CelestialBodyDetails, CelestialBodyDetailsDTO } from "../../models/celestial-body-details";
import { IcyBodyDetailsDTO } from "../../models/icy-body-details";
import { TelluricBodyDetailsDTO } from "../../models/telluric-body-details";

export const fillResultAsCelestialBody = (body: CelestialBody, bodyDTO: CelestialBodyDTO): void => {
  body.name = bodyDTO.name;
  body.mass = bodyDTO.mass;
  body.radius = bodyDTO.radius;
  body.density = bodyDTO.density;
  body.blackbodyTemperature = bodyDTO.blackbody_temperature;
  body.size = bodyDTO.size;
  body.details = convertDetails(bodyDTO.details);
  body.type =
    bodyDTO.details?.Icy !== undefined
      ? AstronomicalObjectTypeEnum.IcyBody
      : bodyDTO.details?.Telluric !== undefined
      ? AstronomicalObjectTypeEnum.TelluricBody
      : AstronomicalObjectTypeEnum.GaseousBody;
};

export const convertDetails = (details: CelestialBodyDetailsDTO) =>
  ({
    Telluric: convertTelluricDetails(details?.Telluric),
    Icy: convertIcyDetails(details?.Icy),
    Gaseous: details?.Gaseous,
    Cloud: details?.Cloud,
  }) as CelestialBodyDetails;

export const convertTelluricDetails = (details?: TelluricBodyDetailsDTO) =>
  !!details
    ? {
        bodyType: details.body_type,
        worldType: details.world_type,
      }
    : undefined;

export const convertIcyDetails = (details?: IcyBodyDetailsDTO) =>
  !!details
    ? {
        worldType: details.world_type,
      }
    : undefined;
