import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedTripComponent } from './selected-trip.component';

describe('SelectedTripComponent', () => {
  let component: SelectedTripComponent;
  let fixture: ComponentFixture<SelectedTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedTripComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectedTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
