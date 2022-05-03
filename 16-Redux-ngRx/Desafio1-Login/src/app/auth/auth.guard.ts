import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../state/app.state';
import { selectorSesionActiva } from '../state/selectors/login.selector';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private store: Store<AppState>
  ){}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let sesionActiva = false;

    this.store.select(selectorSesionActiva).subscribe((sesion)=>{
      sesionActiva = sesion.sesionActiva;
    });

    if(sesionActiva){
      return true;
    }else{
      return this.router.navigate(['login']).then(() => false);
    }
  }
  
}
