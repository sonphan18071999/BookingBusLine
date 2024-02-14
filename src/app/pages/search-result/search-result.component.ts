import { Component } from '@angular/core';
import { TripInformationComponent } from '../../components/features/trip-information/trip-information.component';
import { TripsSelctedCardComponent } from '../../components/features/trips-selcted-card/trips-selcted-card.component';
import { SearchsFilterComponent } from '../../components/searchs-filter/searchs-filter.component';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [TripInformationComponent,TripsSelctedCardComponent, SearchsFilterComponent],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.scss'
})
export class SearchResultComponent {

}
