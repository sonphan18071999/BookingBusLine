import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleDeckerBusMapComponent } from './double-decker-bus-map.component';

describe('DoubleDeckerBusMapComponent', () => {
  let component: DoubleDeckerBusMapComponent;
  let fixture: ComponentFixture<DoubleDeckerBusMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoubleDeckerBusMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoubleDeckerBusMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
