import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditJugadorComponent } from './form-edit-jugador.component';

describe('FormEditJugadorComponent', () => {
  let component: FormEditJugadorComponent;
  let fixture: ComponentFixture<FormEditJugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEditJugadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
