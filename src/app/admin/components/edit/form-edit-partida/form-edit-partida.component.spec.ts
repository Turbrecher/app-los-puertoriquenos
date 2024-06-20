import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditPartidaComponent } from './form-edit-partida.component';

describe('FormEditPartidaComponent', () => {
  let component: FormEditPartidaComponent;
  let fixture: ComponentFixture<FormEditPartidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEditPartidaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditPartidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
