import { InjectionToken } from "@angular/core";
import { ServicioPruebaService } from "./app/services/servicio-prueba.service";

export interface API {
    url: string
    servicios: ServicioPruebaService[]
}

export const APIConfig: API = {
    url: 'https://api.miapirest.com/',
    servicios: [new ServicioPruebaService()]
}

export const CONFIG = new InjectionToken<API>('APIConfig');