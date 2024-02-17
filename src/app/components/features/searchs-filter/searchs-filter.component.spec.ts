import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchsFilterComponent } from './searchs-filter.component';

describe('SearchsFilterComponent', () => {
  let component: SearchsFilterComponent;
  let fixture: ComponentFixture<SearchsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchsFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
