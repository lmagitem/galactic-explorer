import { galaxyApi } from "../api/galaxy.api";
import { NavStateEnum } from "./app.actions";
import { setNavState } from "./app.slice";
import { selectAstronomicalObject } from "./astronomical-object.slice";
import { setGalaxyFromDTO } from "./galaxy.slice";

export async function fetchGalaxy(dispatch: any, getState: () => any) {
    const state = getState();
    const response = await galaxyApi.loadGalaxy(state.settings.current);
    dispatch(selectAstronomicalObject(undefined))
    dispatch(setGalaxyFromDTO(response))
    dispatch(setNavState(NavStateEnum.Display))
}