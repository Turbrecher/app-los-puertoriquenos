import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaTorneoComponent } from './tarjeta-torneo.component';

describe('TarjetaTorneoComponent', () => {
  let component: TarjetaTorneoComponent;
  let fixture: ComponentFixture<TarjetaTorneoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaTorneoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaTorneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
