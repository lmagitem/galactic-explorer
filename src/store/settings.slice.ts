import { createSlice } from "@reduxjs/toolkit";
import { defaultSettings, GenerationSettings } from "../models/settings";
import { SetCoordinatesAction, SetSettingsAction } from "./settings.actions";

export interface SettingsState {
  current: GenerationSettings;
  coordinates: [number, number, number];
}
const initialState: SettingsState = { current: { ...defaultSettings }, coordinates: [0, 0, 0] };

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setSettings: (state, action: SetSettingsAction) =>
      (state = { ...state, current: action.payload }),
    setCoordinates: (state, action: SetCoordinatesAction) =>
      (state = { ...state, coordinates: action.payload }),
  },
});

export const { setSettings, setCoordinates } = settingsSlice.actions;

export default settingsSlice.reducer;
