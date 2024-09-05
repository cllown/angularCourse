// app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages//home-page/home-page.component').then(
        (m) => m.HomePageComponent
      ),
  },
  {
    path: 'country/:countryCode',
    loadComponent: () =>
      import('./pages/country-details/country-details.component').then(
        (m) => m.CountryDetailsPageComponent
      ),
  },
];
