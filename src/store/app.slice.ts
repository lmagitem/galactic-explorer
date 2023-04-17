import { createSlice } from "@reduxjs/toolkit";
import {
  FocusScale,
  FocusScaleEnum,
  NavState,
  NavStateEnum,
  SetFocusScaleAction,
  SetNavStateAction,
} from "./app.actions";

export interface AppState {
  navState?: NavState;
  focusScale: FocusScale;
}
const initialState: AppState = {
  navState: NavStateEnum.Display,
  focusScale: FocusScaleEnum.System,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setNavState: (state, action: SetNavStateAction) =>
      (state = { ...state, navState: action.payload }),
    setFocusScale: (state, action: SetFocusScaleAction) =>
      (state = { ...state, focusScale: action.payload }),
  },
});

export const { setNavState, setFocusScale } = appSlice.actions;

export default appSlice.reducer;
