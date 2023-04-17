import { createSlice } from "@reduxjs/toolkit";
import { initialGalaxy, Galaxy } from "../models/galaxy";
import { convertGalaxyFromDTO } from "../utils/dto-conversion/galaxy-dto-conversion";
import { SetGalaxyAction, SetGalaxyFromDTOAction } from "./galaxy.actions";

export interface GalaxyState {
  current: Galaxy;
}
const initialState: GalaxyState = { current: convertGalaxyFromDTO(initialGalaxy) };

export const galaxySlice = createSlice({
  name: "galaxy",
  initialState,
  reducers: {
    setGalaxy: (state, action: SetGalaxyAction) => (state = { ...state, current: action.payload }),
    setGalaxyFromDTO: (state, action: SetGalaxyFromDTOAction) =>
      (state = { ...state, current: convertGalaxyFromDTO(action.payload) }),
  },
});

export const { setGalaxy, setGalaxyFromDTO } = galaxySlice.actions;

export default galaxySlice.reducer;
