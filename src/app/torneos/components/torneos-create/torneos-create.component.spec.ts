import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorneosCreateComponent } from './torneos-create.component';

describe('TorneosCreateComponent', () => {
  let component: TorneosCreateComponent;
  let fixture: ComponentFixture<TorneosCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TorneosCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TorneosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
