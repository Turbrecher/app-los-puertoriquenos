import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadoresDetailsComponent } from './jugadores-details.component';

describe('JugadoresDetailsComponent', () => {
  let component: JugadoresDetailsComponent;
  let fixture: ComponentFixture<JugadoresDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JugadoresDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JugadoresDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
