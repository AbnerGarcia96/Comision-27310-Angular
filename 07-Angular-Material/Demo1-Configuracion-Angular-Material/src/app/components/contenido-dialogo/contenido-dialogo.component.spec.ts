import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoDialogoComponent } from './contenido-dialogo.component';

describe('ContenidoDialogoComponent', () => {
  let component: ContenidoDialogoComponent;
  let fixture: ComponentFixture<ContenidoDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoDialogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
