import { ActionReducerMap } from "@ngrx/store";
import { SesionSate } from "../models/sesion.state.model";
import { loginReducer } from "./reducers/login.reducer";

export interface AppState {
    sesion: SesionSate
};

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    sesion: loginReducer
}