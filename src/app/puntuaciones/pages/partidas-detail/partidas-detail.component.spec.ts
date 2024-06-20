import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidasDetailComponent } from './partidas-detail.component';

describe('PartidasDetailComponent', () => {
  let component: PartidasDetailComponent;
  let fixture: ComponentFixture<PartidasDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartidasDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartidasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
