import {Component, OnInit, signal} from '@angular/core';
import {DepartureTimesFilter} from '../../../models/departure-filter.model';
import {SearchTripFilterService} from '../../../services/search-trip-filter.service';
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";


@Component({
  selector: 'app-departure-time-filter',
  standalone: true,
  imports: [
    MatIconButton,
    MatIcon
  ],
  templateUrl: './departure-time-filter.component.html',
  styleUrl: './departure-time-filter.component.scss'
})
export class DepartureTimeFilterComponent implements OnInit {

  departureTimes = signal<DepartureTimesFilter[]>([])
  selectedTime: DepartureTimesFilter = {
    time: '',
    id: '',
    isSelected: false
  }

  constructor(protected searchTripFilterService: SearchTripFilterService) {
  }

  ngOnInit(): void {
    this.departureTimes = this.searchTripFilterService.departures;
  }

  applyFilter(selectedItem: DepartureTimesFilter): void {
    this.searchTripFilterService.updateItem(selectedItem)
  }
}
