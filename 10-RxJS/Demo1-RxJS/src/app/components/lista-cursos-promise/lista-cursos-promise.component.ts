import { Component, OnInit } from '@angular/core';
import { RxjsService } from 'src/app/services/rxjs.service';

@Component({
  selector: 'app-lista-cursos-promise',
  templateUrl: './lista-cursos-promise.component.html',
  styleUrls: ['./lista-cursos-promise.component.css']
})
export class ListaCursosPromiseComponent implements OnInit {
  cursos: any[] = [];
  cursosPromise!: Promise<any>;

  constructor(
    private rxjsService: RxjsService
  ) { }

  ngOnInit(): void {
    this.cursosPromise = this.rxjsService.obtenerCursosPromise();
    this.cursosPromise
    .then((cursos) => {
      console.log("Obtuve los datos");
      this.cursos = cursos;
    })
    .catch((error) => {
      console.error(error);
    }).finally(() => {
      console.log("Esto se ejecuta independiente del resultado del promise");
    });
  }

}
