import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploGridComponent } from './ejemplo-grid.component';

describe('EjemploGridComponent', () => {
  let component: EjemploGridComponent;
  let fixture: ComponentFixture<EjemploGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemploGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
