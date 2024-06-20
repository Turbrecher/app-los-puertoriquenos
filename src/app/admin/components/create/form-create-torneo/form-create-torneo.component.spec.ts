import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateTorneoComponent } from './form-create-torneo.component';

describe('FormCreateTorneoComponent', () => {
  let component: FormCreateTorneoComponent;
  let fixture: ComponentFixture<FormCreateTorneoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCreateTorneoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCreateTorneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
