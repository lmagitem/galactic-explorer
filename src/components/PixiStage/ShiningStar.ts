import { Resource, Sprite, Texture } from "pixi.js";

export class ShiningStar extends Sprite {
    public flickerSpeed: number;
    public baseAlpha: number;
    public temperature: number;

    constructor(texture: Texture<Resource> | undefined) {
        super(texture);
        this.flickerSpeed = Math.random() * 0.1 + 0.05;
        this.baseAlpha = Math.random() * 0.5 + 0.5;
        this.temperature = Math.random() * 10000 + 2000;
        this.tint = colorFromTemperature(this.temperature);
    }

    update(delta: number) {
        this.alpha = this.baseAlpha + Math.sin(this.flickerSpeed * delta) * 0.1;
    }
}

/** Takes a star's temperature as input and returns the corresponding RGB color value based on the black-body radiation model. */
function colorFromTemperature(temperature: number) {
    return planckToColor(temperature);
}

/** Calculates the spectral radiance of a black body at a given temperature and wavelength based on Planck's radiation law. */
function planck(wavelength: number, temperature: number) {
    const h = 6.626e-34;
    const c = 3.0e8;
    const k = 1.38e-23;
    const nm = 1e-9;

    const exponent = h * c / (wavelength * nm * k * temperature);
    return (2 * h * c * c) / (Math.pow(wavelength * nm, 5) * (Math.exp(exponent) - 1));
}

/** takes a temperature value and converts it to an RGB color based on the black-body radiation model. */
function planckToColor(temperature: number) {
    const wavelengths = [700, 546.1, 435.8];
    const intensities = wavelengths.map((wavelength) => planck(wavelength, temperature));
    const maxIntensity = Math.max(...intensities);

    const rgb = intensities.map((intensity) => Math.round((intensity / maxIntensity) * 255));

    return (rgb[0] << 16) | (rgb[1] << 8) | rgb[2];
}
