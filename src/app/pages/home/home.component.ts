import { Component } from '@angular/core';
import { BookingBarComponent } from '../../components/features/booking-bar/booking-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BookingBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
