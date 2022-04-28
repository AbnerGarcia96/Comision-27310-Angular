import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoCursoComponent } from './nuevo-curso.component';

describe('NuevoCursoComponent', () => {
  let component: NuevoCursoComponent;
  let fixture: ComponentFixture<NuevoCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
