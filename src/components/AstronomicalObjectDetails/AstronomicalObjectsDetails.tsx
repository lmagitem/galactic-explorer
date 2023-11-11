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
  formatPopulation,
} from "../../utils/star-display";
import { CelestialBody } from "../../models/celestial-body";
import DetailBox from "../DetailBox";
import {
  convertDensityToEarthDensities,
  convertEarthMassToJupiterMass,
  convertEarthRadiiToKilometers,
  convertKelvinToCelsius,
  convertKelvinToFahrenheit,
  convertSolarMassToEarthMass,
  convertSolarRadiiToKilometers,
} from "../../utils/units";
import { StellarEvolution } from "../../models/stellar-evolution";
import { formatCelestialBody } from "../../utils/planet-display";
import { formatCelestialDisk } from "../../utils/disk-display";
import { CelestialDisk } from "../../models/celestial-disk";

export interface AstronomicalObjectsDetailsProps {
  object: OrbitalPoint | undefined;
  system: StarSystem | undefined;
}

export function AstronomicalObjectsDetails({ object, system }: AstronomicalObjectsDetailsProps) {
  const star = object?.type === AstronomicalObjectTypeEnum.Star ? (object as Star) : undefined;
  const body =
    object?.type === AstronomicalObjectTypeEnum.GaseousBody ||
    object?.type === AstronomicalObjectTypeEnum.IcyBody ||
    object?.type === AstronomicalObjectTypeEnum.TelluricBody
      ? (object as CelestialBody)
      : undefined;
  const disk =
    object?.type === AstronomicalObjectTypeEnum.GaseousDisk ||
    object?.type === AstronomicalObjectTypeEnum.IcyDisk ||
    object?.type === AstronomicalObjectTypeEnum.TelluricDisk
      ? (object as CelestialDisk)
      : undefined;

  return (
    <div className="grow details padded-horizontal padded-bottom">
      <h3 className="align-center">{formatOrbitalPointName(object, system)}</h3>
      <div className="padded-left info-table">
        {object?.ownOrbit.primaryBody !== null && (
          <DetailBox
            title="Orbiting at"
            contents={`${toDecimals(object?.ownOrbit.averageDistance || 0, 5)} AU`}
            tooltip="The distance in Astronomical Units at which this object orbits its primary body."
          ></DetailBox>
        )}
        {object?.ownOrbit.primaryBody !== null && (
          <DetailBox
            title="Eccentricity"
            contents={`${toDecimals(object?.ownOrbit.eccentricity || 0, 2)}`}
            tooltip="The eccentricity of this orbital point's orbit around its primary body."
          ></DetailBox>
        )}
        {object?.ownOrbit.primaryBody !== null && (
          <DetailBox
            title="Inclination"
            contents={`${toDecimals(object?.ownOrbit.inclination || 0, 2)}`}
            tooltip="The inclination of this orbital point's orbit around its primary body."
          ></DetailBox>
        )}
        {object?.ownOrbit.primaryBody !== null &&
          object?.type !== AstronomicalObjectTypeEnum.Void && (
            <DetailBox
              title="Cycle"
              contents={`${toDecimals(object?.ownOrbit.orbitalPeriod || 0, 2)} Days`}
              tooltip={`The time this object takes to complete a full orbit around its primary body, in Terran Days. In Terran Years, it would be ${toDecimals(
                (object?.ownOrbit.orbitalPeriod || 0) / 365.25,
                2,
              )} Years.`}
            ></DetailBox>
          )}
        {object?.ownOrbit.primaryBody !== null &&
          object?.type !== AstronomicalObjectTypeEnum.Void &&
          !star && (
            <DetailBox
              title="Zone"
              contents={`${object?.ownOrbit.zone}`}
              tooltip="The stellar zone this orbit is in."
            ></DetailBox>
          )}
      </div>
      <div className="padded-left info-table">
        {!!star && (
          <>
            <DetailBox
              title="Type"
              contents={`${formatSpectralType(star?.spectralType, star?.luminosityClass)}`}
              tooltip="The common name this kind of star is usually given."
            ></DetailBox>
            <DetailBox
              title="Stellar class"
              contents={`${formatSpectralShortHand(
                star?.spectralType,
                star?.spectralTypeSubClass,
                star?.luminosityClass,
              )}`}
              tooltip="This star's exact spectral type and luminosity class."
            ></DetailBox>
            <DetailBox
              title="Age"
              contents={`${toDecimals(star?.age, 3)} Byrs`}
              tooltip="This star's age, in billions of years."
            ></DetailBox>
            <DetailBox
              title="Population"
              contents={`${formatPopulation(star?.population)}`}
              tooltip={`This star's evolutionnary generation.\n${
                star?.population === StellarEvolution.Paleodwarf
                  ? `Population III is the first generation of stars, formed from primordial gas with virtually no metals, likely massive and short-lived. Given the near absence of metals, Population III stars couldn't probably host rocky planets, if planets they have, they would only be gas giants or unusual compositions not seen in today's universe. Any protoplanetary disks around these stars would be primarily composed of hydrogen and helium, with very few heavier elements.`
                  : star?.population === StellarEvolution.Subdwarf
                  ? "Population II are older stars with low metallicity, typically found in globular clusters and the halo of galaxies. Their planetary systems, if they exist, might have fewer rocky planets and more gas giants. The terrestrial planets that do form might be smaller and less diverse in composition. Asteroid belts and Kuiper belt-like structures might be less dense and less varied in composition due to the scarcity of heavier elements."
                  : star?.population === StellarEvolution.Dwarf
                  ? "Early Population I are younger, metal-rich stars found in the spiral arms and disks of galaxies, associated with ongoing star formation. Sol is a Early Population I star."
                  : star?.population === StellarEvolution.Superdwarf
                  ? "Late Population I are stars that are metal-rich and found in galactic disks, but older than early Population I stars, representing a more mature phase of galactic evolution. Could have increased chances of finding life on habitable planets."
                  : "Population 0 are extremely old stars from a universe nearing its end, having witnessed multiple generations of stellar evolution and potentially having very high metallicity due to the cumulative effects of countless supernovae and stellar processes over time. They might host planets with exotic compositions, enriched with heavy elements."
              }`}
            ></DetailBox>
            <DetailBox
              title="Mass"
              contents={`${toDecimals(star?.age, 5)} Byrs`}
              tooltip={`This star's mass, in Solar Masses. In Terran Masses, it would be ${convertSolarMassToEarthMass(
                star?.mass,
              ).toLocaleString("en-UK", { useGrouping: true, maximumFractionDigits: 2 })} M⊕.}`}
            ></DetailBox>
            <DetailBox
              title="Luminosity"
              contents={`${toDecimals(star?.luminosity, 5)} L☉`}
              tooltip="This star's luminosity, in Solar Luminosity."
            ></DetailBox>
            <DetailBox
              title="Radius"
              contents={`${toDecimals(star?.radius, 5)} R☉`}
              tooltip={`This star's radius, in Solar Radii. It's diameter would be ${convertSolarRadiiToKilometers(
                (star?.radius || 0) * 2,
              ).toLocaleString("en-UK", { useGrouping: true, maximumFractionDigits: 2 })} km.`}
            ></DetailBox>
            <DetailBox
              title="Temperature"
              contents={`${star?.temperature || 0} K`}
              tooltip={`This star's surface temperature, in Kelvin. It's equal to ${convertKelvinToCelsius(
                star?.temperature || 0,
              ).toLocaleString("en-UK", {
                useGrouping: true,
                maximumFractionDigits: 2,
              })} °C or ${convertKelvinToFahrenheit(star?.temperature || 0).toLocaleString(
                "en-UK",
                { useGrouping: true, maximumFractionDigits: 2 },
              )} °F.`}
            ></DetailBox>
          </>
        )}
        {!!body && (
          <>
            <DetailBox
              title="Type"
              contents={`${formatCelestialBody(body)}`}
              tooltip="The common name this kind of celestial body is usually given."
            ></DetailBox>
            <DetailBox
              title="Mass"
              contents={`${toDecimals(body?.mass, 5)} M⊕`}
              tooltip={`This body's mass, in Terran Masses. It's equivalent to ${toDecimals(
                convertEarthMassToJupiterMass(body?.mass),
                5,
              )} times the mass of Jupiter (M♃).`}
            ></DetailBox>
            <DetailBox
              title="Radius"
              contents={`${toDecimals(body?.radius, 5)} R⊕`}
              tooltip={`This body's radius, in Terran Radii. It's diameter would be ${convertEarthRadiiToKilometers(
                (body?.radius || 0) * 2,
              ).toLocaleString("en-UK", { useGrouping: true, maximumFractionDigits: 2 })} km.`}
            ></DetailBox>
            <DetailBox
              title="Density"
              contents={`${toDecimals(body?.density, 5)} g/cm³`}
              tooltip={`This body's density, in g/cm³. It's equivalent to ${toDecimals(
                convertDensityToEarthDensities(body?.density || 0),
                2,
              )} Terran Densities.`}
            ></DetailBox>
            <DetailBox
              title="Temperature"
              contents={`${body?.blackbodyTemperature || 0} K`}
              tooltip={`This body's blackbody temperature, in Kelvin. It's equal to ${convertKelvinToCelsius(
                body?.blackbodyTemperature || 0,
              ).toLocaleString("en-UK", {
                useGrouping: true,
                maximumFractionDigits: 2,
              })} °C or ${convertKelvinToFahrenheit(body?.blackbodyTemperature || 0).toLocaleString(
                "en-UK",
                { useGrouping: true, maximumFractionDigits: 2 },
              )} °F.\nThe blackbody temperature is the temperature a body would have if it perfectly absorbed and gave off all the heat and light that reaches it.`}
            ></DetailBox>
          </>
        )}
        {!!disk && (
          <>
            <DetailBox
              title="Type"
              contents={`${formatCelestialDisk(disk)}`}
              tooltip="The common name this kind of celestial disk is usually given."
            ></DetailBox>
          </>
        )}
      </div>
    </div>
  );
}
