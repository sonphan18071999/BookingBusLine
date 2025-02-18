import {Component, EventEmitter, forwardRef, Output} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-destination',
  standalone: true,
  imports: [MatInputModule, ReactiveFormsModule, FormsModule],
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DestinationComponent),
      multi: true,
    }
  ]
})
export class DestinationComponent {
  @Output()
  public onChangeDestination: EventEmitter<string> = new EventEmitter<string>();

  public destination: string = '';

  public onChange = (value: string) => {
  };

  public onTouched = () => {
    console.log('will implemented')

  };

  public writeValue(value: string): void {
    this.destination = value;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
  }

  public handleDestinationChange(textChanged: string): void {
    this.onChangeDestination.emit(textChanged)
    this.onChange(textChanged);
    this.onTouched();
  }
}
