import {Component} from '@angular/core';
import {BookingBarComponent} from '../../components/features/booking-bar/booking-bar.component';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BookingBarComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
