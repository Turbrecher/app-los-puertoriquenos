import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidasCreateComponent } from './partidas-create.component';

describe('PartidasCreateComponent', () => {
  let component: PartidasCreateComponent;
  let fixture: ComponentFixture<PartidasCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartidasCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartidasCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
