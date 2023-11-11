import { AstronomicalObjectTypeEnum } from "../models/astronomical-object";
import { CelestialBody } from "../models/celestial-body";

export const formatCelestialBody = (body: CelestialBody): string => {
  let result = "";

  if (
    body.type === AstronomicalObjectTypeEnum.GaseousBody ||
    body.type === AstronomicalObjectTypeEnum.IcyBody
  ) {
    result = body.type === AstronomicalObjectTypeEnum.GaseousBody ? "Gas" : "Ice";
    if (body.size === "Giant" || body.size === "Supergiant" || body.size === "Hypergiant") {
      result += ` ${body.size}`;
    } else {
      result += ` Planet`;
    }
  } else {
    result = `${
      body.size !== "Standard" && body.size !== "Moonlet"
        ? `${String(body.size)} `
        : body.size === "Moonlet"
        ? "Puny "
        : ""
    }${
      !!body.details.Telluric?.worldType
        ? `${String(body.details.Telluric.worldType)} `
        : !!body.details.Icy?.worldType
        ? `${String(body.details.Icy.worldType)} `
        : ""
    }World`;
  }

  return result;
};
