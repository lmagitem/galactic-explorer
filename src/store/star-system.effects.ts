import { starSystemApi } from "../api/star-system.api";
import { StarSystemDTO } from "../models/star-system";
import { NavStateEnum } from "./app.actions";
import { setNavState } from "./app.slice";
import { selectAstronomicalObject } from "./astronomical-object.slice";
import { setStarSystemFromDTO } from "./star-system.slice";

export async function fetchStarSystem(dispatch: any, getState: () => any) {
    const state = getState();
    const response = await starSystemApi.loadStarSystem(state.settings.current);
    dispatch(selectAstronomicalObject(undefined))
    dispatch(setStarSystemFromDTO(response as StarSystemDTO))
    dispatch(setNavState(NavStateEnum.Display))
}
