import { Action, createReducer, on } from '@ngrx/store';
import * as LoginPageActions from '../actions/login-page.actions';
import { User } from '../../models/user.model';

export interface State {
    user: User
}

export const initialState: State = {
    user: {
        username: 'username',
        password: 'password'
    }
};

export const loginReducer = createReducer(
    initialState,
    on(LoginPageActions.login, (state,account) => ({ ...state, user: { username: account.username, password: account.password } }))
);