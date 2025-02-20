import {Component, inject, OnInit} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {TripTypeComponent} from '../trip-type/trip-type.component';
import {OriginComponent} from '../origin/origin.component';
import {DestinationComponent} from '../destination/destination.component';
import {DepartureDateComponent} from '../departure-date/departure-date.component';
import {ReturnDateComponent} from '../return-date/return-date.component';
import {TicketCountComponent} from '../ticket-count/ticket-count.component';
import {TripType} from '../../../enums/trip-type';
import {Subject} from 'rxjs';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Router} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatError, MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {Store} from '@ngrx/store';
import {TicketState} from "../../../store/reducers/bus-ticket.reducer";
import {BusTicket} from "../../../models/bus-ticket.model";
import {updateBusTicket} from "../../../store/actions/bus-ticket.actions";

@Component({
  selector: 'app-booking-bar',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    TripTypeComponent,
    OriginComponent,
    DestinationComponent,
    DepartureDateComponent,
    ReturnDateComponent,
    TicketCountComponent,
    MatButtonModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatError,
  ],
  templateUrl: './booking-bar.component.html',
  styleUrl: './booking-bar.component.scss',

})
export class BookingBarComponent implements OnInit {
  public unsubscribe$: Subject<boolean> = new Subject();
  public isRoundTrip: boolean = false;
  public isSwapStation: boolean = false;
  public formGroup: FormGroup = new FormGroup({});
  public ticketStore = inject(Store<TicketState>)

  public constructor(
    protected router: Router,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.initFormGroup();
  }

  public initFormGroup() {
    this.formGroup = this.fb.group({
      tripType: new FormControl<TripType>(TripType.ONE_WAY, [Validators.required]),
      departure: new FormControl('', [Validators.required]),
      destination: new FormControl('', [Validators.required]),
      departureDate: new FormControl('', [Validators.required])
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }


  public onSwapStationChange(): void {
    this.isSwapStation = !this.isSwapStation;

    const currentDeparture = this.formGroup.get('departure')?.value;
    const currentDestination = this.formGroup.get('destination')?.value;
    this.formGroup.patchValue({departure: currentDestination, destination: currentDeparture});
  }

  public handleTripTypeChange(type: TripType): void {
    const roundTripActive = type === TripType.ROUND_TRIP;
    this.isRoundTrip = roundTripActive;
    const controlName = 'returnDate';

    if (roundTripActive && !this.formGroup.contains(controlName)) {
      this.formGroup.addControl(controlName, new FormControl('', Validators.required));
    } else {
      this.formGroup.removeControl(controlName);
    }
  }

  public handleFormSubmit($event: Event): void {
    this.formGroup.markAllAsTouched()
    this.formGroup.updateValueAndValidity();

    if (!this.formGroup.valid) return;

    const busTicket: BusTicket = this.formGroup.value as BusTicket;
    this.ticketStore.dispatch(updateBusTicket({ticket: busTicket}));
  }

  public handleSearchTrip(): void {
    this.router.navigate(['search-result']);
    setTimeout(() => {
      document.querySelector("#search__result-section")?.scrollIntoView({behavior: 'smooth', block: 'start'});
    }, 100)
  }

  private scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({behavior: 'smooth', block: 'start'});
    } else {
      console.warn(`Element with ID ${elementId} not found.`);
    }
  }

}
