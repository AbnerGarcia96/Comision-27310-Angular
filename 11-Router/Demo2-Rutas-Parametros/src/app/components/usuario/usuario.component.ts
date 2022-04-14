import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit, OnDestroy {
  idUsuario!: number;
  usuarioActivo: any;
  notificador = new Subject();

  constructor(
    private rutaActivada: ActivatedRoute,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.rutaActivada.paramMap
    .pipe(
      takeUntil(this.notificador)
    )
    .subscribe((params: ParamMap) => {
      let _id: string | null = params.get('id');
      this.idUsuario = _id != null ? parseInt(_id) : 0;
      this.usuarioService.obtenerUsuario(this.idUsuario).subscribe((usuario)=>{
        this.usuarioActivo = usuario;
      })
    });
  }

  ngOnDestroy(){
    this.notificador.next(0);
    this.notificador.complete();
  }

}
