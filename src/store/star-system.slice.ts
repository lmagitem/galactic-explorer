import { createSlice } from "@reduxjs/toolkit";
import { initialSystem, StarSystem } from "../models/star-system";
import { convertStarSystemFromDTO } from "../utils/dto-conversion";
import { SetStarSystemAction, SetStarSystemFromDTOAction } from "./star-system.actions";

export interface StarSystemState { current: StarSystem };
const initialState: StarSystemState = { current: convertStarSystemFromDTO(initialSystem) };

export const starSystemSlice = createSlice({
    name: "starSystem",
    initialState,
    reducers: {
        setStarSystem: (state, action: SetStarSystemAction) =>
            state = { ...state, current: action.payload },
        setStarSystemFromDTO: (state, action: SetStarSystemFromDTOAction) =>
            state = { ...state, current: convertStarSystemFromDTO(action.payload) }
    }
});

export const { setStarSystem, setStarSystemFromDTO } = starSystemSlice.actions;

export default starSystemSlice.reducer;
