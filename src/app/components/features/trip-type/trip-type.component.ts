import { Component } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-trip-type',
  standalone: true,
  imports: [MatRadioModule],
  templateUrl: './trip-type.component.html',
  styleUrl: './trip-type.component.scss'
})
export class TripTypeComponent {

}
