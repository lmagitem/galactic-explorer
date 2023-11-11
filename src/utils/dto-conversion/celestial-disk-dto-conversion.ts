import { AstronomicalObjectTypeEnum } from "../../models/astronomical-object";
import { CelestialBeltTypeEnum } from "../../models/celestial-belt-type";
import { CelestialDisk, CelestialDiskDTO } from "../../models/celestial-disk";
import { CelestialDiskTypeInterface } from "../../models/celestial-disk-type";

export const fillResultAsCelestialDisk = (disk: CelestialDisk, diskDTO: CelestialDiskDTO): void => {
  disk.name = diskDTO.name;
  disk.details = diskDTO.details;
  disk.type =
    (diskDTO.details as CelestialDiskTypeInterface)?.Belt?.composition ===
      CelestialBeltTypeEnum.Frost ||
    (diskDTO.details as CelestialDiskTypeInterface)?.Belt?.composition ===
      CelestialBeltTypeEnum.Comet
      ? AstronomicalObjectTypeEnum.IcyDisk
      : (diskDTO.details as CelestialDiskTypeInterface)?.Belt?.composition ===
        CelestialBeltTypeEnum.GasBelt
      ? AstronomicalObjectTypeEnum.GaseousDisk
      : AstronomicalObjectTypeEnum.TelluricDisk;
};
