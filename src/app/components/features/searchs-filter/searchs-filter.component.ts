import {Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {DepartureTimeFilterComponent} from '../departure-time-filter/departure-time-filter.component';
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {
  BusSearchFilterComponent,
  AdvancedFilters,
} from '../../bus-search-filter/bus-search-filter.component';

@Component({
  selector: 'app-searchs-filter',
  standalone: true,
  imports: [
    MatCardModule,
    DepartureTimeFilterComponent,
    MatIcon,
    MatIconButton,
    BusSearchFilterComponent,
  ],
  templateUrl: './searchs-filter.component.html',
  styleUrl: './searchs-filter.component.scss',
})
export class SearchsFilterComponent {
  onAdvancedFiltersChange(filters: AdvancedFilters): void {
    console.log('Advanced filters updated:', filters);
    // TODO: Handle the filter changes (e.g., update store, filter results, etc.)
  }
}
