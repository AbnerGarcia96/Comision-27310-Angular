import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioAdminComponent } from './inicio-admin.component';

describe('InicioAdminComponent', () => {
  let component: InicioAdminComponent;
  let fixture: ComponentFixture<InicioAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
