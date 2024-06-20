import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditTorneoComponent } from './form-edit-torneo.component';

describe('FormEditTorneoComponent', () => {
  let component: FormEditTorneoComponent;
  let fixture: ComponentFixture<FormEditTorneoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEditTorneoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditTorneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
