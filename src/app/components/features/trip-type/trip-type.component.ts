import {Component, EventEmitter, forwardRef, OnDestroy, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {TripType} from '../../../enums/trip-type';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-trip-type',
  standalone: true,
  imports: [MatRadioModule, FormsModule],
  templateUrl: './trip-type.component.html',
  styleUrl: './trip-type.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TripTypeComponent),
      multi: true,
    }
  ]
})
export class TripTypeComponent implements OnInit, OnDestroy, ControlValueAccessor {
  @Output()
  public onChangeTripType: EventEmitter<TripType> = new EventEmitter();

  public tripType: TripType = TripType.ONE_WAY;
  private unsubscribe$ = new Subject<void>();

  constructor() {
  }

  public onChange = (value: TripType): void => {
    this.writeValue(value);
  };

  public onTouched = () => {
  };

  public writeValue(value: TripType): void {
    this.tripType = value;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
  }


  ngOnInit(): void {
  }

  public onTripTypeChange(event: Event): void {
    const selectedValue = (event.target as HTMLInputElement).value as TripType;
    this.onChangeTripType.emit(selectedValue);
    this.onChange(selectedValue);
    this.onTouched();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
