import { GenerationSettings } from "../models/settings";

export const galaxyApi = {
    loadGalaxy: async (settings: GenerationSettings) => {
        const response = await fetch('http://localhost:8080/galaxy', {
            method: 'POST',
            body: JSON.stringify(settings),
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
        });
        const data = await response.json();
        return data;
    }
}