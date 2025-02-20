import {Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {DepartureTimeFilterComponent} from '../departure-time-filter/departure-time-filter.component';
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-searchs-filter',
  standalone: true,
  imports: [MatCardModule, DepartureTimeFilterComponent, MatIcon, MatIconButton],
  templateUrl: './searchs-filter.component.html',
  styleUrl: './searchs-filter.component.scss'
})
export class SearchsFilterComponent {

}
