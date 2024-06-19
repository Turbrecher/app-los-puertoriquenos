import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidasEditComponent } from './partidas-edit.component';

describe('PartidasEditComponent', () => {
  let component: PartidasEditComponent;
  let fixture: ComponentFixture<PartidasEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartidasEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartidasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
