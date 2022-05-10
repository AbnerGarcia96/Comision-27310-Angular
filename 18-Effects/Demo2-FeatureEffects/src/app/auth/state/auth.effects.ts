import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, switchAll, switchMap } from "rxjs";
import { AuthService } from "../auth.service";
import { cargarSesion, loginAction } from "./auth.actions";

@Injectable()
export class AuthEffects{
    constructor(
        private actions$: Actions,
        private authService: AuthService
    ){}
}