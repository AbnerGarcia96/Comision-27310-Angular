import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploFlexComponent } from './ejemplo-flex.component';

describe('EjemploFlexComponent', () => {
  let component: EjemploFlexComponent;
  let fixture: ComponentFixture<EjemploFlexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemploFlexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
