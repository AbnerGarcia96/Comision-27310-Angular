import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(credenciales: any){
    console.log("Voy a hacer el llamado a mi API login con las credenciales siguientes:", credenciales);
  }
}
