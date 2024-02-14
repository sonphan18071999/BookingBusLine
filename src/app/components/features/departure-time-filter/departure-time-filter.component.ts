import { Component, signal } from '@angular/core';
import { DepartureTimesFilter } from '../../../models/departure-filter.model';


@Component({
  selector: 'app-departure-time-filter',
  standalone: true,
  imports: [],
  templateUrl: './departure-time-filter.component.html',
  styleUrl: './departure-time-filter.component.scss'
})
export class DepartureTimeFilterComponent {
  departureMockTime: DepartureTimesFilter[] = [
    { time: 'Midnight 00:00 - 06:00' }, { time: 'Morning 06:00 - 12:00' }, { time: 'Affternoon 12:00 - 18:00' }, {
      time: 'Evening 18:00 - 24:00'
    }
  ]
  departureTimes = signal<DepartureTimesFilter[]>(this.departureMockTime)
  selectedTime: DepartureTimesFilter = { time: '' }

  applyFilter(timeSelected: string): void {
    console.log('seectedTime',timeSelected)
  }
}
