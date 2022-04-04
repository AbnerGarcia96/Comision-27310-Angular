import { Component, OnInit } from '@angular/core';
import  { MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  columnas: string[] = ['indice', 'nombre'];
  datos: any[] = [{
    indice: 1,
    nombre: 'Abner'
  },{
    indice: 1,
    nombre: 'Pablo'
  },{
    indice: 1,
    nombre: 'Victoria'
  }];
  dataSource = new MatTableDataSource(this.datos);

  constructor() { }

  ngOnInit(): void {
  }

  filtrar(evento: any){
    let valorFiltro = (evento.target as HTMLInputElement).value;
    console.log(valorFiltro);
    this.dataSource.filter = valorFiltro;
  }
}
