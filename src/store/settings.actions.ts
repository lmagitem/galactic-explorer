import { GenerationSettings } from "../models/settings";

export interface SetSettingsAction {
  type: string;
  payload: GenerationSettings;
}

export interface SetCoordinatesAction {
  type: string;
  payload: [number, number, number];
}
