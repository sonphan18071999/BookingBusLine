import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Material Imports
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

import { BusClass } from '../../models/bus-search.model';

export interface AdvancedFilters {
  busClass: BusClass;
  priceRange: {
    min: number;
    max: number;
  };
  preferences: {
    hasWifi: boolean;
    hasUSBCharge: boolean;
    hasToilet: boolean;
    hasEntertainment: boolean;
    isAccessible: boolean;
    hasRefreshments: boolean;
  };
}

@Component({
  selector: 'app-bus-search-filter',
  templateUrl: './bus-search-filter.component.html',
  styleUrls: ['./bus-search-filter.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatButtonModule,
  ],
})
export class BusSearchFilterComponent implements OnInit {
  @Output() filterChange = new EventEmitter<AdvancedFilters>();

  filterForm!: FormGroup;
  busClasses = Object.values(BusClass);

  constructor(private fb: FormBuilder) {
    this.initializeForm();
  }

  ngOnInit(): void {
    // Subscribe to form changes to emit filter updates
    this.filterForm.valueChanges.subscribe(() => {
      this.onFilterChange();
    });
  }

  private initializeForm(): void {
    this.filterForm = this.fb.group({
      busClass: [BusClass.ECONOMY],
      priceRange: this.fb.group({
        min: [0],
        max: [1000],
      }),
      preferences: this.fb.group({
        hasWifi: [false],
        hasUSBCharge: [false],
        hasToilet: [false],
        hasEntertainment: [false],
        isAccessible: [false],
        hasRefreshments: [false],
      }),
    });
  }

  onFilterChange(): void {
    if (this.filterForm.valid) {
      const filters: AdvancedFilters = this.filterForm.value;
      this.filterChange.emit(filters);
    }
  }

  resetForm(): void {
    this.filterForm.reset({
      busClass: BusClass.ECONOMY,
      priceRange: { min: 0, max: 1000 },
      preferences: {
        hasWifi: false,
        hasUSBCharge: false,
        hasToilet: false,
        hasEntertainment: false,
        isAccessible: false,
        hasRefreshments: false,
      },
    });
  }
}
