import { GenerationSettings } from "../models/settings";

export interface SetSettingsAction {
    type: string;
    payload: GenerationSettings;
}
