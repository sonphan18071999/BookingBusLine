import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from '../../../store/actions/login-page.actions';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(protected store: Store) { }

  onSubmit(username: string, password: string):void {
    this.store.dispatch(login({ username: username, password: password }));
  }
}
