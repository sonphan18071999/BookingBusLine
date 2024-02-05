import { Component } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-ticket-count',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule],
  templateUrl: './ticket-count.component.html',
  styleUrl: './ticket-count.component.scss'
})
export class TicketCountComponent {
  toppings = new FormControl('');

  toppingList: string[] = ['1','2','3','4'];

}
