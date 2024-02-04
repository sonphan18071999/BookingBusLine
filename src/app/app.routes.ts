import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'login', loadComponent: ()=> import('./components/features/login/login.component').then(m=>m.LoginComponent)},
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  {
    path: 'ticket-information',
    loadComponent: () => import('./pages/ticket-information/ticket-information.component').then(m => m.TicketInformationComponent)
  }
];
