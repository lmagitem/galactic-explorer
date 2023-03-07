const colorTemperatureEquivalencies = [
    { temp: Number.MAX_SAFE_INTEGER, r: 155, g: 176, b: 255 }, // Max
    { temp: 1500000, r: 155, g: 176, b: 255 }, // WR0
    { temp: 500000, r: 155, g: 176, b: 255 }, // WR1
    { temp: 380000, r: 155, g: 176, b: 255 }, // WR2
    { temp: 170000, r: 155, g: 176, b: 255 }, // WR3
    { temp: 117000, r: 155, g: 176, b: 255 }, // WR4
    { temp: 54000, r: 155, g: 176, b: 255 }, // O2
    { temp: 45000, r: 155, g: 176, b: 255 }, // O3
    { temp: 43300, r: 155, g: 176, b: 255 }, // O4
    { temp: 40600, r: 155, g: 176, b: 255 }, // O5
    { temp: 39500, r: 162, g: 184, b: 255 }, // O6
    { temp: 37100, r: 157, g: 177, b: 255 }, // O7
    { temp: 35100, r: 157, g: 177, b: 255 }, // O8
    { temp: 33300, r: 154, g: 178, b: 255 }, // O9
    { temp: 31000, r: 164, g: 186, b: 255 }, // O9.5
    { temp: 29200, r: 156, g: 178, b: 255 }, // B0
    { temp: 25000, r: 167, g: 188, b: 255 }, // B0.5
    { temp: 23000, r: 160, g: 182, b: 255 }, // B1
    { temp: 21000, r: 160, g: 180, b: 255 }, // B2
    { temp: 17600, r: 165, g: 185, b: 255 }, // B3
    { temp: 16400, r: 164, g: 184, b: 255 }, // B4
    { temp: 15200, r: 170, g: 191, b: 255 }, // B5
    { temp: 14300, r: 172, g: 189, b: 255 }, // B6
    { temp: 13500, r: 173, g: 191, b: 255 }, // B7
    { temp: 12300, r: 177, g: 195, b: 255 }, // B8
    { temp: 11400, r: 181, g: 198, b: 255 }, // B9
    { temp: 9600, r: 185, g: 201, b: 255 }, // A0
    { temp: 9330, r: 181, g: 199, b: 255 }, // A1
    { temp: 9040, r: 187, g: 203, b: 255 }, // A2
    { temp: 8750, r: 191, g: 207, b: 255 }, // A3
    { temp: 8480, r: 196, g: 210, b: 255 }, // A4
    { temp: 8310, r: 202, g: 215, b: 255 }, // A5
    { temp: 8110, r: 199, g: 212, b: 255 }, // A6
    { temp: 7920, r: 200, g: 213, b: 255 }, // A7
    { temp: 7660, r: 213, g: 222, b: 255 }, // A8
    { temp: 7470, r: 219, g: 224, b: 255 }, // A9
    { temp: 7350, r: 224, g: 229, b: 255 }, // F0
    { temp: 7050, r: 236, g: 239, b: 255 }, // F2
    { temp: 6850, r: 230, g: 230, b: 255 }, // F3
    { temp: 6795, r: 224, g: 226, b: 255 }, // F4
    { temp: 6700, r: 248, g: 247, b: 255 }, // F5
    { temp: 6550, r: 244, g: 241, b: 255 }, // F6
    { temp: 6400, r: 246, g: 243, b: 255 }, // F7
    { temp: 6300, r: 255, g: 247, b: 252 }, // F8
    { temp: 6150, r: 255, g: 247, b: 252 }, // F9
    { temp: 6050, r: 255, g: 248, b: 252 }, // G0
    { temp: 5930, r: 255, g: 247, b: 248 }, // G1
    { temp: 5800, r: 255, g: 245, b: 242 }, // G2
    { temp: 5740, r: 255, g: 241, b: 229 }, // G4
    { temp: 5660, r: 255, g: 244, b: 234 }, // G5
    { temp: 5585, r: 255, g: 244, b: 235 }, // G6
    { temp: 5520, r: 255, g: 244, b: 235 }, // G7
    { temp: 5440, r: 255, g: 237, b: 222 }, // G8
    { temp: 5340, r: 255, g: 239, b: 221 }, // G9
    { temp: 5240, r: 255, g: 238, b: 221 }, // K0
    { temp: 5110, r: 255, g: 224, b: 188 }, // K1
    { temp: 4960, r: 255, g: 227, b: 196 }, // K2
    { temp: 4800, r: 255, g: 222, b: 195 }, // K3
    { temp: 4600, r: 255, g: 216, b: 181 }, // K4
    { temp: 4400, r: 255, g: 210, b: 161 }, // K5
    { temp: 4000, r: 255, g: 199, b: 142 }, // K7
    { temp: 3920, r: 255, g: 209, b: 174 }, // K8
    { temp: 3750, r: 255, g: 195, b: 139 }, // M0
    { temp: 3700, r: 255, g: 204, b: 142 }, // M1
    { temp: 3600, r: 255, g: 196, b: 131 }, // M2
    { temp: 3500, r: 255, g: 206, b: 129 }, // M3
    { temp: 3400, r: 255, g: 201, b: 127 }, // M4
    { temp: 3200, r: 255, g: 204, b: 111 }, // M5
    { temp: 3100, r: 255, g: 195, b: 112 }, // M6
    { temp: 2700, r: 255, g: 169, b: 87 }, // M8
    { temp: 2600, r: 255, g: 165, b: 77 }, // L0
    { temp: 2500, r: 255, g: 161, b: 69 }, //
    { temp: 2400, r: 255, g: 157, b: 60 }, //
    { temp: 2300, r: 255, g: 152, b: 51 }, //
    { temp: 2200, r: 255, g: 147, b: 41 }, // L3
    { temp: 2100, r: 255, g: 142, b: 29 }, //
    { temp: 2000, r: 255, g: 141, b: 11 }, //
    { temp: 1900, r: 255, g: 135, b: 0 }, //
    { temp: 1800, r: 255, g: 130, b: 0 }, //
    { temp: 1700, r: 255, g: 124, b: 0 }, //
    { temp: 1600, r: 255, g: 118, b: 0 }, //
    { temp: 1500, r: 255, g: 111, b: 0 }, // L8
    { temp: 1400, r: 255, g: 102, b: 0 }, // T2
    { temp: 1300, r: 255, g: 93, b: 0 }, //
    { temp: 1200, r: 255, g: 82, b: 0 }, //
    { temp: 1100, r: 255, g: 69, b: 0 }, //
    { temp: 1000, r: 255, g: 51, b: 0 }, // T6
    { temp: 0, r: 0, g: 0, b: 0 }, // Void
];

const getHexFromRGB = (r: number, g: number, b: number): string => {
    return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}

export const getStarColor = (temp: number): string => {
    let firstEntry = { temp: Number.MAX_SAFE_INTEGER, r: 155, g: 176, b: 255 };
    let secondEntry = { temp: 0, r: 0, g: 0, b: 0 };
    temp = Math.abs(temp);
    for (let i = 0; i < colorTemperatureEquivalencies.length; i++) {
        if (temp <= colorTemperatureEquivalencies[i]?.temp && temp > colorTemperatureEquivalencies[i + 1]?.temp) {
            firstEntry = colorTemperatureEquivalencies[i];
            secondEntry = colorTemperatureEquivalencies[i + 1];
            break;
        }
    }

    const distance1 = Math.abs(temp - firstEntry.temp);
    const distance2 = Math.abs(temp - secondEntry.temp);
    const totalDistance = distance1 + distance2;
    const weight1 = distance2 / totalDistance;
    const weight2 = distance1 / totalDistance;
    const r = Math.floor(firstEntry.r * weight1 + secondEntry.r * weight2);
    const g = Math.floor(firstEntry.g * weight1 + secondEntry.g * weight2);
    const b = Math.floor(firstEntry.b * weight1 + secondEntry.b * weight2);

    return getHexFromRGB(r, g, b);
};

export const getStarColorAsNumber = (temp: number): number => parseInt(getStarColor(temp).substring(1), 16);
