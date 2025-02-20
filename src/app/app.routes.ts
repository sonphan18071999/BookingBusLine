import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./components/features/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent), children: [
      {
        path: 'search-result',
        loadComponent: () => import('./pages/search-result/search-result.component').then(m => m.SearchResultComponent)
      },
    ]
  },
  {
    path: 'selected-trip',
    loadChildren: () => import('./pages/selected-trip/selected-trip.routes').then(mod => mod.SELECTED_ROUTES)
  }
];
