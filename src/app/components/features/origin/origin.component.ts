import {Component, EventEmitter, Output} from '@angular/core';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-origin',
  standalone: true,
  imports: [MatInputModule],
  templateUrl: './origin.component.html',
  styleUrl: './origin.component.scss',
})
export class OriginComponent {
  @Output() public onChangeOrigin = new EventEmitter<string>();

  public handleOrigin($event: Event): void {
    const text = ($event.target as HTMLInputElement).value;
    this.onChangeOrigin.emit(text);
  }
}
