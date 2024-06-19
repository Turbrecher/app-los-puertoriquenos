import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidasDetailsComponent } from './partidas-details.component';

describe('PartidasDetailsComponent', () => {
  let component: PartidasDetailsComponent;
  let fixture: ComponentFixture<PartidasDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartidasDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartidasDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
