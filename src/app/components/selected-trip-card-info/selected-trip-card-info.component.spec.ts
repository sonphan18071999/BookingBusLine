import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedTripCardInfoComponent } from './selected-trip-card-info.component';

describe('SelectedTripCardInfoComponent', () => {
  let component: SelectedTripCardInfoComponent;
  let fixture: ComponentFixture<SelectedTripCardInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedTripCardInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectedTripCardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
