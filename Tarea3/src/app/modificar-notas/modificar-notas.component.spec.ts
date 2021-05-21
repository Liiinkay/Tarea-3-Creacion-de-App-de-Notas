import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarNotasComponent } from './modificar-notas.component';

describe('ModificarNotasComponent', () => {
  let component: ModificarNotasComponent;
  let fixture: ComponentFixture<ModificarNotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarNotasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
