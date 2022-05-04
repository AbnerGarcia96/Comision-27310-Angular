import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { UsuariosComponent } from './usuarios.component';

describe('UsuariosComponent', () => {
  let component: UsuariosComponent;
  let fixture: ComponentFixture<UsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(
    'Los usuarios se estan cargando correctamente', 
    () => {
    const fixture = TestBed.createComponent(UsuariosComponent);
    const controlador = fixture.componentInstance;

    fixture.detectChanges();
    setTimeout(() => {
      expect(controlador.usuarios).toBeTruthy();
    }, 5000);
  })

  it(
    'La informacion se muestra en pantalla',
    (done) => {
      const fixture = TestBed.createComponent(UsuariosComponent);
      const vista = fixture.nativeElement as HTMLElement;

      fixture.detectChanges();

      setTimeout(() => {
        expect(vista.querySelector('div')).toBeTruthy();
      }, 5000);
    }
  )

});
