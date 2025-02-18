import {Component, forwardRef} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-departure-date',
  standalone: true,
  imports: [MatInputModule, ReactiveFormsModule, FormsModule],
  templateUrl: './departure-date.component.html',
  styleUrl: './departure-date.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DepartureDateComponent),
      multi: true,
    }
  ]
})
export class DepartureDateComponent implements ControlValueAccessor {
  public departureDate: string = '';
  public onChange = (value: string) => {
  };

  public onTouched = () => {
    console.log('will implemented')
  };

  public writeValue(value: string): void {
    this.departureDate = value;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
  }


  public handleDepartureDateChange(date: string): void {
    // const dateChanged = ($event.target as HTMLInputElement).value;
    this.onChange(date);
    this.onTouched();
  }
}
