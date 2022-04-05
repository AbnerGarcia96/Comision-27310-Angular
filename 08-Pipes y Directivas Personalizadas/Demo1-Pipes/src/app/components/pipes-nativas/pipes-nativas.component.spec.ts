import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesNativasComponent } from './pipes-nativas.component';

describe('PipesNativasComponent', () => {
  let component: PipesNativasComponent;
  let fixture: ComponentFixture<PipesNativasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesNativasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesNativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
