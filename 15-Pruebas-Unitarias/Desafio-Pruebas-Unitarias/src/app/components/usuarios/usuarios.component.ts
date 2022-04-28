import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];//undefined

  constructor() { }

  ngOnInit(): void {
    this.usuarios = [
      {
       nombre: "Daphne",
       apellido: "Stroman",
       correo: "Isabella70@yahoo.com",
       contrasena: "Sb_lFB39bUdGLgD",
       id: "1"
      },
      {
       nombre: "Gonzalo",
       apellido: "Larson",
       correo: "Kristy.Hickle89@hotmail.com",
       contrasena: "_Sl9SQxBc2xKC0L",
       id: "2"
      },
      {
       nombre: "Broderick",
       apellido: "Heathcote",
       correo: "Jazmyne.Rolfson48@gmail.com",
       contrasena: "wiwkAJ9EUnWWHJo",
       id: "3"
      },
      {
       nombre: "Nelson",
       apellido: "Kuhlman",
       correo: "Edison_Luettgen@hotmail.com",
       contrasena: "MOFjgFLqhZCx_s_",
       id: "4"
      },
      {
       nombre: "Juvenal",
       apellido: "Weimann",
       correo: "Emilio.Kohler@yahoo.com",
       contrasena: "hD3fTHMFNdgvLAg",
       id: "5"
      }
     ];
  }

}
