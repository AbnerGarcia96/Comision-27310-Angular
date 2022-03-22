import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolacionComponent } from './interpolacion.component';

describe('InterpolacionComponent', () => {
  let component: InterpolacionComponent;
  let fixture: ComponentFixture<InterpolacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpolacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpolacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
