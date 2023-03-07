export enum NavStateEnum { Display, Settings }
export type NavState = NavStateEnum.Display | NavStateEnum.Settings;

export enum FocusScaleEnum { Galaxy, System, Planet }
export type FocusScale = FocusScaleEnum.Galaxy | FocusScaleEnum.System | FocusScaleEnum.Planet;

export interface SetNavStateAction {
    type: string;
    payload: NavState;
}

export interface SetFocusScaleAction {
    type: string;
    payload: FocusScale;
}
