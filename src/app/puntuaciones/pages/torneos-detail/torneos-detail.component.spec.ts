import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorneosDetailComponent } from './torneos-detail.component';

describe('TorneosDetailComponent', () => {
  let component: TorneosDetailComponent;
  let fixture: ComponentFixture<TorneosDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TorneosDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TorneosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
