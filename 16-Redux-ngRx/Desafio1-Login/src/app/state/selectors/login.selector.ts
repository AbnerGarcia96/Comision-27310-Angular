import { createSelector } from "@ngrx/store";
import { SesionSate } from "src/app/models/sesion.state.model";
import { AppState } from "../app.state";

export const selectorSesion = (state: AppState) => state.sesion;

export const selectorSesionActiva = createSelector(
    selectorSesion,
    (state: SesionSate) => state
);