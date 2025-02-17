import {Component, EventEmitter, Output} from '@angular/core';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-departure-date',
  standalone: true,
  imports: [MatInputModule],
  templateUrl: './departure-date.component.html',
  styleUrl: './departure-date.component.scss'
})
export class DepartureDateComponent {
  @Output()
  public onChangeDepartureDate = new EventEmitter<string>();

  public handleDepartureDateChange($event: Event): void {
    const dateChanged = ($event.target as HTMLInputElement).value;
    this.onChangeDepartureDate.emit(dateChanged)
  }
}
