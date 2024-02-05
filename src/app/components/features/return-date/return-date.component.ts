import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { Subject } from 'rxjs';
import { TripService } from '../../../services/trips.service';

@Component({
  selector: 'app-return-date',
  standalone: true,
  imports: [MatInputModule],
  templateUrl: './return-date.component.html',
  styleUrl: './return-date.component.scss'
})
export class ReturnDateComponent implements OnInit, OnDestroy {
  unsubcribe$: Subject<boolean> = new Subject()

  constructor(protected tripService: TripService) { }

  ngOnInit(): void {  
  }

  ngOnDestroy(): void {
    this.unsubcribe$.next(true);
    this.unsubcribe$.complete();
  }


}
