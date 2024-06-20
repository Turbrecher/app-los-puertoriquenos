import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaPartidaComponent } from './tarjeta-partida.component';

describe('TarjetaPartidaComponent', () => {
  let component: TarjetaPartidaComponent;
  let fixture: ComponentFixture<TarjetaPartidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaPartidaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaPartidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
