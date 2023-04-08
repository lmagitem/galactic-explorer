import { GenerationSettings } from "../models/settings";

export const starSystemApi = {
    loadStarSystem: async (settings: GenerationSettings) => {
        const response = await fetch('/system', {
            method: 'POST',
            body: JSON.stringify(settings),
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
        });
        const data = await response.json();
        return data;
    }
}
