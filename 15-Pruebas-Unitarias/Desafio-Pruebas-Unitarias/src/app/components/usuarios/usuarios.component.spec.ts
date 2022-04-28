import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosComponent } from './usuarios.component';

describe('UsuariosComponent', () => {
  let component: UsuariosComponent;
  let fixture: ComponentFixture<UsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Los usuarios se asignaron correctamente en el controlador', () => {
    const fixture = TestBed.createComponent(UsuariosComponent);
    const controlador = fixture.componentInstance;

    fixture.detectChanges();

    // expect(controlador.usuarios).toBeTruthy();
    expect(controlador.usuarios.length).toBeGreaterThan(0);
  }) // validar que los usuarios se carguen correctamente en el controlador

  it('Los usuarios se renderizaron correctamente en la vista', ()=>{
    const fixture = TestBed.createComponent(UsuariosComponent);
    const vista = fixture.nativeElement as HTMLElement;

    fixture.detectChanges();

    expect(vista.querySelector('div')).toBeTruthy();
  }) // validar que los usuarios se rendericen correctamente en la vista

});
