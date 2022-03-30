import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoDialogComponent } from './contenido-dialog.component';

describe('ContenidoDialogComponent', () => {
  let component: ContenidoDialogComponent;
  let fixture: ComponentFixture<ContenidoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
