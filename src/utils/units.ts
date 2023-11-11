export const convertSolarRadiiToAU = (radii: number) => radii * 0.00465047;

export const convertKelvinToCelsius = (kelvin: number) => kelvin - 273.15;

export const convertKelvinToFahrenheit = (kelvin: number) => ((kelvin - 273.15) * 9) / 5 + 32;

export const convertSolarRadiiToKilometers = (solarRadii: number) => {
  const sunRadiusInKm = 696340; // Sun's average radius in kilometers
  return solarRadii * sunRadiusInKm;
};

export const convertEarthRadiiToKilometers = (earthRadii: number): number => {
  const earthRadiusInKm = 6371; // Earth's average radius in kilometers
  return earthRadii * earthRadiusInKm;
};

export const convertSolarMassToEarthMass = (solarMass: number) => {
  const sunMassInKg = 1.989e30; // Sun's mass in kilograms
  const earthMassInKg = 5.972e24; // Earth's mass in kilograms
  return (solarMass * sunMassInKg) / earthMassInKg;
};

export const convertEarthMassToJupiterMass = (earthMass: number) => {
  const earthMassInKg = 5.972e24; // Earth's mass in kilograms
  const jupiterMassInKg = 1.898e27; // Jupiter's mass in kilograms
  const jupiterMassPerEarthMass = jupiterMassInKg / earthMassInKg;

  return earthMass / jupiterMassPerEarthMass;
};

export const convertDensityToEarthDensities = (densityInGcm3: number) => {
  const earthDensityInGcm3 = 5.51; // Earth's average density in g/cm³
  return densityInGcm3 / earthDensityInGcm3;
};
