import { GenerationSettings } from "../models/settings";

export const starSystemApi = {
  loadStarSystem: async (settings: GenerationSettings, coords: [number, number, number]) => {
    const response = await fetch("/system", {
      method: "POST",
      body: JSON.stringify({ settings, x: coords[0], y: coords[1], z: coords[2] }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    const data = await response.json();
    return data;
  },
};
