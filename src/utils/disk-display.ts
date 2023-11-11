import { CelestialDisk } from "../models/celestial-disk";
import { CelestialDiskTypeEnum, CelestialDiskTypeInterface } from "../models/celestial-disk-type";

export const formatCelestialDisk = (body: CelestialDisk): string => {
  let result = "";

  if (body.details === CelestialDiskTypeEnum.ProtoplanetaryDisk) {
    result = "Protoplanetary Disk";
  } else if (body.details === CelestialDiskTypeEnum.Shell) {
    result = "Shell";
  } else if (!!(body.details as CelestialDiskTypeInterface).Ring) {
    result = `${String((body.details as CelestialDiskTypeInterface).Ring?.level)} ${String(
      (body.details as CelestialDiskTypeInterface).Ring?.composition,
    )} Ring`;
  } else if (!!(body.details as CelestialDiskTypeInterface).Belt) {
    result = `${String((body.details as CelestialDiskTypeInterface).Belt?.composition)} Belt`;
  }

  return result;
};
