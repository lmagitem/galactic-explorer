import { AstronomicalObject } from "../models/astronomical-object";
import { OrbitalPoint } from "../models/orbital-point";
import { Star } from "../models/star";
import { StarSystem } from "../models/star-system";

export const formatOrbitalPointName = (orbitalPoint: OrbitalPoint | undefined, system: StarSystem | undefined, recursive = true): string => {
    if (orbitalPoint === undefined || system === undefined)
        return "";

    if (orbitalPoint.type === AstronomicalObject.Void) {
        if (orbitalPoint
            .primaryBody === null)
            return "Center of the System";
        else if (orbitalPoint.satellite_ids.length > 0)
            return recursive ?
                `Barycentre ${orbitalPoint.id} (${orbitalPoint.satellite_ids.map(id => formatOrbitalPointName(system.allObjects.find(o => o.id === id), system, false)).join(", ")})`
                : `Barycentre ${orbitalPoint.id}`;
        else
            return "Empty Space";
    } else if (orbitalPoint.type === AstronomicalObject.Star) {
        return (orbitalPoint as Star).name;
    } else {
        throw new Error(`Should add a new case in my pseudo-match for ${orbitalPoint}`);
    }
};
