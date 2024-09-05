// app.routes.ts
import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CountryDetailsPageComponent } from './pages/country-details/country-details.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'country/:code', component: CountryDetailsPageComponent } // Пример маршрута для страницы страны
];
