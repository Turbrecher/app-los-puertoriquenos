import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateJugadorComponent } from './form-create-jugador.component';

describe('FormCreateJugadorComponent', () => {
  let component: FormCreateJugadorComponent;
  let fixture: ComponentFixture<FormCreateJugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCreateJugadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCreateJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
