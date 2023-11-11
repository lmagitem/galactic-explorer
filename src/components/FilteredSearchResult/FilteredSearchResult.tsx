import { AstronomicalObjectTypeEnum } from "../../models/astronomical-object";
import { CelestialBody } from "../../models/celestial-body";
import { CelestialDisk } from "../../models/celestial-disk";
import { OrbitalPoint } from "../../models/orbital-point";
import { Star } from "../../models/star";
import { StarSystem } from "../../models/star-system";
import { formatCelestialDisk } from "../../utils/disk-display";
import { formatOrbitalPointName } from "../../utils/orbital-point-display";
import { formatCelestialBody } from "../../utils/planet-display";
import { formatSpectralType } from "../../utils/star-display";
import "./FilteredSearchResult.css";

export interface FilteredSearchResultProps {
  orbitalPoint: OrbitalPoint | undefined;
  system: StarSystem | undefined;
  onClick?: () => void;
}

export function FilteredSearchResult({ orbitalPoint, system, onClick }: FilteredSearchResultProps) {
  return (
    <div className="search-result" onClick={onClick}>
      <h4>
        -{"-".repeat(orbitalPoint?.depth || 0)} {formatOrbitalPointName(orbitalPoint, system)}
      </h4>
      <div className="padded-left">
        {orbitalPoint?.type === AstronomicalObjectTypeEnum.Star &&
          printStarType(orbitalPoint as Star)}
        {(orbitalPoint?.type === AstronomicalObjectTypeEnum.GaseousBody ||
          orbitalPoint?.type === AstronomicalObjectTypeEnum.IcyBody ||
          orbitalPoint?.type === AstronomicalObjectTypeEnum.TelluricBody) &&
          formatCelestialBody(orbitalPoint as CelestialBody)}
        {(orbitalPoint?.type === AstronomicalObjectTypeEnum.GaseousDisk ||
          orbitalPoint?.type === AstronomicalObjectTypeEnum.IcyDisk ||
          orbitalPoint?.type === AstronomicalObjectTypeEnum.TelluricDisk) &&
          formatCelestialDisk(orbitalPoint as CelestialDisk)}
        {orbitalPoint &&
          orbitalPoint.orbits.length > 0 &&
          printSatellites(orbitalPoint.orbits?.flatMap((o) => o.satelliteIds), system)}
      </div>
    </div>
  );
}

const printStarType = (star: Star): JSX.Element => (
  <p>{formatSpectralType(star.spectralType, star.luminosityClass)}</p>
);

const printSatellites = (satelliteIds: number[], system: StarSystem | undefined): JSX.Element =>
  satelliteIds.length > 0 ? (
    <p>
      Orbited by:{" "}
      {satelliteIds
        .map((id) => formatOrbitalPointName(system?.allObjects.find((o) => o.id === id), system))
        .join(", ")}
    </p>
  ) : (
    <span></span>
  );
