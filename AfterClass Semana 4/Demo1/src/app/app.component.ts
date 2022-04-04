import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ComponenteHijoComponent } from './components/componente-hijo/componente-hijo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  mensaje: string = "Mensaje enviado al componente hijo";
  @ViewChild(ComponenteHijoComponent) componenteHijo !: ComponenteHijoComponent;

  ngAfterViewInit(): void {
    console.log("Definicion del coponente hijo:", this.componenteHijo);
  }

  recibirDatos(datosEvento: any){
    console.log(datosEvento);
  }
}
