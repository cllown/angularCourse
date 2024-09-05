// home-page.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { CountryService } from '../../services/country.service';
import { Countries } from '../../country.model';
import { ListboxComponent } from '../../components/listbox/listbox.component';
import { PCardComponent } from '../../components/p-card/p-card.component';
import { forkJoin, map } from 'rxjs';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    InputTextModule,
    ListboxComponent,
    PCardComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  countries: Countries[] = [];
  filteredCountries: Countries[] = [];
  randomCountries: any[] = [];

  constructor(private countryService: CountryService, private router: Router) {}

  ngOnInit(): void {
    this.countryService.getCountries().subscribe((countries) => {
      this.countries = countries;
      this.filteredCountries = countries;
      this.getCountries();
    });
  }

  onSearch(event: any): void {
    const query = event.target.value.toLowerCase();
    this.filteredCountries = this.countries.filter((country) =>
      country.name.toLowerCase().includes(query)
    );
  }

  onCountrySelect(country: Countries): void {
    console.log(`Selected country: ${country.name}`);
    this.router.navigate(['/country', country.countryCode]);
  }

  getCountries(): void {
    this.countryService.getCountries().subscribe((countries) => {
      this.countries = countries;
      this.getRandomCountries();
    });
  }

  getRandomCountries(): void {
    const randomCountries = this.getThreeRandomCountries();
    const holidayRequests = randomCountries.map((country) =>
      this.countryService.getHolidaysForCountry(country.countryCode).pipe(
        map((holidays) => ({
          country: country.name,
          holiday: holidays[0]?.name || 'No upcoming holidays',
          date: holidays[0]?.date || 'N/A',
        }))
      )
    );

    forkJoin(holidayRequests).subscribe((results) => {
      this.randomCountries = results;
    });
  }

  getThreeRandomCountries(): Countries[] {
    const shuffled = [...this.countries].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  }
}
