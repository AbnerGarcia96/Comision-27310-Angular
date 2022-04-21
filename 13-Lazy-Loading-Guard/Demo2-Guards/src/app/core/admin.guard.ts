import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private autenticacion: AutenticacionService,
    private router: Router
  ){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.autenticacion.obtenerUsuarioActual().rol === 'admin'){
          return true;
    }else{
      alert("No tiene acceso a este contenido");
      return false;
    }
  }

  // canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  //   if(this.autenticacion.obtenerUsuarioActual().rol === 'admin'){
  //     return true;
  //   }else{
  //     alert("No tiene acceso a este contenido");
  //     return false;
  //   }
  // }
  
}
