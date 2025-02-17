import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {TripType} from '../../../enums/trip-type';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-trip-type',
  standalone: true,
  imports: [MatRadioModule, FormsModule],
  templateUrl: './trip-type.component.html',
  styleUrl: './trip-type.component.scss'
})
export class TripTypeComponent implements OnInit, OnDestroy {
  @Output()
  public onChangeTripType: EventEmitter<TripType> = new EventEmitter();
  public tripType: TripType = TripType.ONE_WAY;
  private unsubscribe$ = new Subject<void>();


  constructor() {
  }

  ngOnInit(): void {
  }

  public onTripTypeChange(event: Event): void {
    const selectedValue = (event.target as HTMLInputElement).value as TripType;
    this.onChangeTripType.emit(selectedValue);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
