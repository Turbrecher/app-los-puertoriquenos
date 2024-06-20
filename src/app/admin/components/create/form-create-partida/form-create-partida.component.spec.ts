import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreatePartidaComponent } from './form-create-partida.component';

describe('FormCreatePartidaComponent', () => {
  let component: FormCreatePartidaComponent;
  let fixture: ComponentFixture<FormCreatePartidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCreatePartidaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCreatePartidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
