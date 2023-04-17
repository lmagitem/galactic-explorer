import { createSlice } from "@reduxjs/toolkit";
import { defaultSettings, GenerationSettings } from "../models/settings";
import { SetSettingsAction } from "./settings.actions";

export interface SettingsState {
  current: GenerationSettings;
}
const initialState: SettingsState = { current: { ...defaultSettings } };

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setSettings: (state, action: SetSettingsAction) =>
      (state = { ...state, current: action.payload }),
  },
});

export const { setSettings } = settingsSlice.actions;

export default settingsSlice.reducer;
