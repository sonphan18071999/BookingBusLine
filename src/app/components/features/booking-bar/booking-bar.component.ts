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
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatError, MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import {Store} from '@ngrx/store';
import {SearchTrip} from "../../../models/bus-ticket.model";
import {updateSearchTrip} from "../../../store/actions/search-trip.actions";
import {SearchTripState} from "../../../store/reducers/search-trip.reducer";
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MOCK_LOCATIONS, Location } from '../../../mocks/location.mock';
import { map, startWith } from 'rxjs/operators';

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
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
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
  public ticketStore = inject(Store<SearchTripState>);
  public filteredDepartures: Location[] = [];
  public filteredDestinations: Location[] = [];
  public minDate: Date = new Date();
  public maxDate: Date = new Date(new Date().setMonth(new Date().getMonth() + 3));

  constructor(protected router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initFormGroup();
    this.setupLocationAutocomplete();
  }

  private initFormGroup() {
    this.formGroup = this.fb.group({
      tripType: [TripType.ONE_WAY, [Validators.required]],
      departure: ['', [Validators.required]],
      destination: ['', [Validators.required]],
      departureDate: ['', [Validators.required, this.dateValidator()]],
    });
  }

  private setupLocationAutocomplete() {
    this.formGroup
      .get('departure')
      ?.valueChanges.pipe(
        startWith(''),
        map((value) => this.filterLocations(value))
      )
      .subscribe((locations) => {
        this.filteredDepartures = locations;
      });

    this.formGroup
      .get('destination')
      ?.valueChanges.pipe(
        startWith(''),
        map((value) => this.filterLocations(value))
      )
      .subscribe((locations) => {
        this.filteredDestinations = locations;
      });
  }

  private filterLocations(value: string): Location[] {
    const filterValue = value.toLowerCase();
    return MOCK_LOCATIONS.filter(
      (location) =>
        location.name.toLowerCase().includes(filterValue) ||
        location.code.toLowerCase().includes(filterValue)
    );
  }

  private dateValidator() {
    return (control: FormControl): { [key: string]: any } | null => {
      const date = new Date(control.value);
      if (date < this.minDate) {
        return { pastDate: true };
      }
      if (date > this.maxDate) {
        return { futureDate: true };
      }
      return null;
    };
  }

  public onSwapStationChange(): void {
    this.isSwapStation = !this.isSwapStation;
    const currentDeparture = this.formGroup.get('departure')?.value;
    const currentDestination = this.formGroup.get('destination')?.value;
    this.formGroup.patchValue({
      departure: currentDestination,
      destination: currentDeparture,
    });
  }

  public handleTripTypeChange(type: TripType): void {
    const roundTripActive = type === TripType.ROUND_TRIP;
    this.isRoundTrip = roundTripActive;
    const controlName = 'returnDate';

    if (roundTripActive && !this.formGroup.contains(controlName)) {
      this.formGroup.addControl(
        controlName,
        new FormControl('', [Validators.required, this.returnDateValidator()])
      );
    } else {
      this.formGroup.removeControl(controlName);
    }
  }

  private returnDateValidator() {
    return (control: FormControl): { [key: string]: any } | null => {
      const returnDate = new Date(control.value);
      const departureDate = new Date(this.formGroup.get('departureDate')?.value);

      if (returnDate < departureDate) {
        return { invalidReturnDate: true };
      }
      if (returnDate > this.maxDate) {
        return { futureDate: true };
      }
      return null;
    };
  }

  public handleFormSubmit($event: Event): void {
    $event.preventDefault();
    this.formGroup.markAllAsTouched();
    this.formGroup.updateValueAndValidity();

    if (!this.formGroup.valid) {
      return;
    }

    const busTicket: SearchTrip = this.formGroup.value as SearchTrip;
    this.ticketStore.dispatch(updateSearchTrip({ ticket: busTicket }));
    this.handleSearchTrip();
  }

  public handleSearchTrip(): void {
    if (!this.formGroup.valid) return;

    this.router.navigate(['search-result']).then(() => {
      setTimeout(() => {
        this.scrollToElement('search__result-section');
      }, 100);
    });
  }

  private scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
