import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuario: any = {
    id: 0,
    nombre: '',
    apellido: ''
  };

  constructor(
    private rutaActiva: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.rutaActiva.paramMap.subscribe((params: ParamMap) => {
      let _id: string | null = params.get("id");
      let _nombre: string | null = params.get("nombre");
      let _apellido: string | null = params.get("apellido");

      this.usuario.id = _id != null ? parseInt(_id) : 0;
      this.usuario.nombre = _nombre != null ? _nombre : '';
      this.usuario.apellido = _apellido != null ? _apellido : '';
    });
  }
}
