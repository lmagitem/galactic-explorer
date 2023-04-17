import { createSlice } from "@reduxjs/toolkit";
import { OrbitalPoint } from "../models/orbital-point";
import { SelectAstronomicalObjectAction } from "./astronomical-object.actions";

export interface AstronomicalObjectState {
  current?: OrbitalPoint;
}
const initialState: AstronomicalObjectState = {};

export const astronomicalObjectSlice = createSlice({
  name: "astronomicalObject",
  initialState,
  reducers: {
    selectAstronomicalObject: (state, action: SelectAstronomicalObjectAction) =>
      (state = { ...state, current: action.payload }),
  },
});

export const { selectAstronomicalObject } = astronomicalObjectSlice.actions;

export default astronomicalObjectSlice.reducer;
