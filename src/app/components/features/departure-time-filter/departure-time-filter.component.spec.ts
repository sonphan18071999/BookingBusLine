import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartureTimeFilterComponent } from './departure-time-filter.component';

describe('DepartureTimeFilterComponent', () => {
  let component: DepartureTimeFilterComponent;
  let fixture: ComponentFixture<DepartureTimeFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartureTimeFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepartureTimeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
