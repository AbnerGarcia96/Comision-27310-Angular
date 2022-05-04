import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];//undefined

  constructor(
    private login: LoginService
  ) { }

  ngOnInit(): void {
    this.login.obtenerUsuarios().subscribe((usuarios) => {
      this.usuarios = usuarios;
    })
  }

}
