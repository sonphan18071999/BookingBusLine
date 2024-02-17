import { Injectable, computed, signal } from '@angular/core';
import { DepartureTimesFilter } from '../models/departure-filter.model';
import { departureTimeMock } from '../shared/mocks/departure-time-mock';

@Injectable({
  providedIn: 'root'
})
export class SearchTripFilterService {

  departures = signal<DepartureTimesFilter[]>(departureTimeMock)

  constructor() { }

  updateItem(selectedItem: DepartureTimesFilter): void {
    this.departures.update(currentDeparture => {
      const existingItemIndex = currentDeparture.findIndex(i => i.id === selectedItem.id);

      if (existingItemIndex !== -1) {
        currentDeparture[existingItemIndex].isSelected = !currentDeparture[existingItemIndex].isSelected;
      }
      return currentDeparture;
    })
  }
}
