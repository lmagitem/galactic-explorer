import Tippy from "@tippyjs/react";
import "./AstronomicalObjectsDetails.css";
import { AstronomicalObjectTypeEnum } from "../../models/astronomical-object";
import { OrbitalPoint } from "../../models/orbital-point";
import { Star } from "../../models/star";
import { StarSystem } from "../../models/star-system";
import { toDecimals } from "../../utils/math";
import { formatOrbitalPointName } from "../../utils/orbital-point-display";
import {
  formatSpectralType,
  formatSpectralShortHand,
  convertSolarRadiiToKilometers,
} from "../../utils/star-display";

export interface AstronomicalObjectsDetailsProps {
  object: OrbitalPoint | undefined;
  system: StarSystem | undefined;
}

export function AstronomicalObjectsDetails({ object, system }: AstronomicalObjectsDetailsProps) {
  const star = object?.type === AstronomicalObjectTypeEnum.Star ? (object as Star) : undefined;

  return (
    <div className="grow details padded-horizontal padded-bottom">
      <h3 className="align-center">{formatOrbitalPointName(object, system)}</h3>
      <div className="padded-left info-table">
        {object?.ownOrbit.primaryBody !== null && (
          <Tippy content="The distance in Astronomical Units at which this object orbits its primary body.">
            <div className="info-table-couple">
              <div className="info-table-cell-title">Orbiting at</div>
              <div className="info-table-cell-hr"></div>
              <div className="info-table-cell-content">
                {toDecimals(object?.ownOrbit.averageDistance || 0, 5)} AU
              </div>
            </div>
          </Tippy>
        )}
        {object?.ownOrbit.primaryBody !== null && (
          <Tippy content="The eccentricity of this orbital point's orbit around its primary body.">
            <div className="info-table-couple">
              <div className="info-table-cell-title">Eccentricity</div>
              <div className="info-table-cell-hr"></div>
              <div className="info-table-cell-content">
                {toDecimals(object?.ownOrbit.eccentricity || 0, 5)}
              </div>
            </div>
          </Tippy>
        )}
        {!!star && (
          <>
            <Tippy content="The common name this kind of star is usually given.">
              <div className="info-table-couple">
                <div className="info-table-cell-title">Type</div>
                <div className="info-table-cell-hr"></div>
                <div className="info-table-cell-content">
                  {formatSpectralType(star?.spectralType, star?.luminosityClass)}
                </div>
              </div>
            </Tippy>
            <Tippy content="This star's exact spectral type and luminosity class.">
              <div className="info-table-couple">
                <div className="info-table-cell-title">Stellar class</div>
                <div className="info-table-cell-hr"></div>
                <div className="info-table-cell-content">
                  {formatSpectralShortHand(
                    star?.spectralType,
                    star?.spectralTypeSubClass,
                    star?.luminosityClass,
                  )}
                </div>
              </div>
            </Tippy>
            <Tippy content="This object's age, in billions of years.">
              <div className="info-table-couple">
                <div className="info-table-cell-title">Age</div>
                <div className="info-table-cell-hr"></div>
                <div className="info-table-cell-content">{toDecimals(star?.age, 3)} Byrs</div>
              </div>
            </Tippy>
            <Tippy content="This star's mass, in Solar Masses.">
              <div className="info-table-couple">
                <div className="info-table-cell-title">Mass</div>
                <div className="info-table-cell-hr"></div>
                <div className="info-table-cell-content">{toDecimals(star?.mass, 5)} M☉</div>
              </div>
            </Tippy>
            <Tippy content="This star's luminosity, in Solar Luminosity.">
              <div className="info-table-couple">
                <div className="info-table-cell-title">Luminosity</div>
                <div className="info-table-cell-hr"></div>
                <div className="info-table-cell-content">{toDecimals(star?.luminosity, 5)} L☉</div>
              </div>
            </Tippy>
            <Tippy
              content={`This star's radius, in Solar Radii. Diameter: ~${convertSolarRadiiToKilometers(
                (star?.radius || 0) * 2,
              ).toLocaleString("en-UK", { useGrouping: true, maximumFractionDigits: 0 })} km.`}
            >
              <div className="info-table-couple">
                <div className="info-table-cell-title">Radius</div>
                <div className="info-table-cell-hr"></div>
                <div className="info-table-cell-content">{toDecimals(star?.radius, 5)} R☉</div>
              </div>
            </Tippy>
            <Tippy content="This star's surface temperature, in Kelvin.">
              <div className="info-table-couple">
                <div className="info-table-cell-title">Temperature</div>
                <div className="info-table-cell-hr"></div>
                <div className="info-table-cell-content">{star?.temperature} K</div>
              </div>
            </Tippy>
          </>
        )}
      </div>
    </div>
  );
}
