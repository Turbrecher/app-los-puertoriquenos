import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaJugadorComponent } from './tarjeta-jugador.component';

describe('TarjetaJugadorComponent', () => {
  let component: TarjetaJugadorComponent;
  let fixture: ComponentFixture<TarjetaJugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaJugadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
