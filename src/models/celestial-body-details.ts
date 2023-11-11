import { CelestialBodyComposition } from "./celestial-body-composition";
import { GaseousBodyDetails } from "./gaseous-body-details";
import { IcyBodyDetails, IcyBodyDetailsDTO } from "./icy-body-details";
import { TelluricBodyDetails, TelluricBodyDetailsDTO } from "./telluric-body-details";

export interface CelestialBodyDetails {
  Telluric?: TelluricBodyDetails;
  Gaseous?: GaseousBodyDetails;
  Icy?: IcyBodyDetails;
  Cloud?: CelestialBodyComposition;
}

export interface CelestialBodyDetailsDTO {
  Telluric?: TelluricBodyDetailsDTO;
  Gaseous?: GaseousBodyDetails;
  Icy?: IcyBodyDetailsDTO;
  Cloud?: CelestialBodyComposition;
}
