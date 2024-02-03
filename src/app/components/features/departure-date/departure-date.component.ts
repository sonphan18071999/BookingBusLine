import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-departure-date',
  standalone: true,
  imports: [MatInputModule],
  templateUrl: './departure-date.component.html',
  styleUrl: './departure-date.component.scss'
})
export class DepartureDateComponent {

}
