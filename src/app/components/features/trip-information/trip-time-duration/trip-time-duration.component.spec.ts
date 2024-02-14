import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripTimeDurationComponent } from './trip-time-duration.component';

describe('TripTimeDurationComponent', () => {
  let component: TripTimeDurationComponent;
  let fixture: ComponentFixture<TripTimeDurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripTimeDurationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TripTimeDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
