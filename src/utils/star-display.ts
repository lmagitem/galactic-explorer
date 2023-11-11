import { StarLuminosityClass, StarLuminosityClassEnum } from "../models/star-luminosity-class";
import { StarSpectralType, StarSpectralTypeEnum } from "../models/star-spectral-type";
import { smoothScaleValueLog } from "./math";

export const formatSpectralType = (
  spectralType: StarSpectralType | undefined,
  luminosityClass: StarLuminosityClass | undefined,
): string => {
  let result = "";

  switch (spectralType) {
    case StarSpectralTypeEnum.WR:
      result = `Wolf-Rayet Star`;
      break;
    case StarSpectralTypeEnum.O:
    case StarSpectralTypeEnum.B:
      result = `${
        luminosityClass === StarLuminosityClassEnum.V
          ? "Blue Star"
          : "Blue " + formatLuminosityClass(luminosityClass)
      }`;
      break;
    case StarSpectralTypeEnum.A:
    case StarSpectralTypeEnum.F:
      result = `${
        luminosityClass === StarLuminosityClassEnum.V
          ? "White Star"
          : "White " + formatLuminosityClass(luminosityClass)
      }`;
      break;
    case StarSpectralTypeEnum.G:
      result = `Yellow ${formatLuminosityClass(luminosityClass)}`;
      break;
    case StarSpectralTypeEnum.K:
      result = `Orange ${formatLuminosityClass(luminosityClass)}`;
      break;
    case StarSpectralTypeEnum.M:
      result = `Red ${formatLuminosityClass(luminosityClass)}`;
      break;
    case StarSpectralTypeEnum.L:
    case StarSpectralTypeEnum.T:
    case StarSpectralTypeEnum.Y:
      result = `Brown Dwarf`;
      break;
    case StarSpectralTypeEnum.DA:
    case StarSpectralTypeEnum.DB:
    case StarSpectralTypeEnum.DC:
    case StarSpectralTypeEnum.DO:
    case StarSpectralTypeEnum.DZ:
    case StarSpectralTypeEnum.DQ:
    case StarSpectralTypeEnum.DX:
      result = `White Dwarf`;
      break;
    case StarSpectralTypeEnum.XNS:
      result = `Neutron Star`;
      break;
    case StarSpectralTypeEnum.XBH:
      result = `Black Hole`;
      break;
    default:
      break;
  }

  return result;
};

export const formatLuminosityClass = (luminosityClass: StarLuminosityClass | undefined): string => {
  let result = "";

  switch (luminosityClass) {
    case StarLuminosityClassEnum.O:
      result = "Hypergiant";
      break;
    case StarLuminosityClassEnum.Ia:
    case StarLuminosityClassEnum.Ib:
      result = "Supergiant";
      break;
    case StarLuminosityClassEnum.II:
    case StarLuminosityClassEnum.III:
      result = "Giant";
      break;
    case StarLuminosityClassEnum.IV:
      result = "Subgiant";
      break;
    case StarLuminosityClassEnum.V:
      result = "Dwarf";
      break;
    case StarLuminosityClassEnum.VI:
      result = "Subdwarf";
      break;
    default:
      break;
  }

  return result;
};

export const formatSpectralShortHand = (
  spectralType: StarSpectralType,
  subType: number | null,
  luminosityClass: StarLuminosityClass,
): string => `${spectralType}${subType !== null ? subType : ""} ${luminosityClass}`;

export const calculateStarDisplaySize = (radius: number): number => {
  const minVal = 0.05;
  const maxVal = 500;
  const minLogVal = 1;
  const maxLogVal = 20;
  return smoothScaleValueLog(radius, minVal, maxVal, minLogVal, maxLogVal);
};

export const calculateStarRadiusForGraph = (radius: number, maxVal: number): number => {
  const minVal = 1.16136118908e-5;
  const newMin = 2;
  return smoothScaleValueLog(radius, minVal, maxVal, newMin, maxVal);
};

export const convertSolarRadiiToKilometers = (solarRadii: number) => {
  const sunRadiusInKm = 696340; // Sun's average radius in kilometers
  return solarRadii * sunRadiusInKm;
};
