import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { LoginService } from './login.service';
import { Usuario } from '../models/usuario';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        LoginService
      ]
    });
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(
    'El login funciona correctamente',
    inject([HttpTestingController, LoginService], 
    (httpMock: HttpTestingController, LoginService: LoginService) => {
      const mockUsuario: Usuario[] = [{
        nombre: "Daphne",
        apellido: "Stroman",
        correo: "Isabella70@yahoo.com",
        contrasena: "Sb_lFB39bUdGLgD",
        id: "4"
      }];

      LoginService.login("Isabella70@yahoo.com", "Sb_lFB39bUdGLgD").subscribe((usuarioLogueado) => {
        console.log(usuarioLogueado);
        expect(usuarioLogueado.id).toEqual("4");
      });

      const req = httpMock.expectOne({
        method: 'GET',
        url: 'https://6265dce1dbee37aff9a94c90.mockapi.io/usuarios'
      });
      req.flush(mockUsuario);
    }
    )
  )
});
