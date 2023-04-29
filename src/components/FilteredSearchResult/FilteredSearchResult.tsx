import { AstronomicalObject } from "../../models/astronomical-object";
import { OrbitalPoint } from "../../models/orbital-point";
import { Star } from "../../models/star";
import { StarSystem } from "../../models/star-system";
import { formatOrbitalPointName } from "../../utils/orbital-point-display";
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
        {orbitalPoint?.type === AstronomicalObject.Star && printStarType(orbitalPoint as Star)}
        {orbitalPoint &&
          orbitalPoint.satelliteIds.length > 0 &&
          printSatellites(orbitalPoint.satelliteIds, system)}
      </div>
    </div>
  );
}

const printStarType = (star: Star): JSX.Element => (
  <p>{formatSpectralType(star.spectralType, star.luminosityClass)}</p>
);

const printSatellites = (satelliteIds: number[], system: StarSystem | undefined): JSX.Element => (
  <p>
    Orbited by:{" "}
    {satelliteIds
      .map((id) =>
        formatOrbitalPointName(
          system?.allObjects.find((o) => o.id === id),
          system,
        ),
      )
      .join(", ")}
  </p>
);
