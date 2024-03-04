import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentFillInFormComponent } from './payment-fill-in-form.component';

describe('PaymentFillInFormComponent', () => {
  let component: PaymentFillInFormComponent;
  let fixture: ComponentFixture<PaymentFillInFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentFillInFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentFillInFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
