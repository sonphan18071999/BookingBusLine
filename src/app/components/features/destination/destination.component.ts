import {Component, EventEmitter, Output} from '@angular/core';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-destination',
  standalone: true,
  imports: [MatInputModule],
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.scss'
})
export class DestinationComponent {
  @Output()
  public onChangeDestination: EventEmitter<string> = new EventEmitter<string>();

  public handleDestinationChange($event: Event): void {
    const textChanged = ($event.target as HTMLInputElement).value;
    this.onChangeDestination.emit(textChanged)
  }
}
