import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsSelctedCardComponent } from './trips-selcted-card.component';

describe('TripsSelctedCardComponent', () => {
  let component: TripsSelctedCardComponent;
  let fixture: ComponentFixture<TripsSelctedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripsSelctedCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TripsSelctedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
