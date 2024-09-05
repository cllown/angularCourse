// home-page.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { CountryService } from '../../services/country.service';
import { Countries } from '../../country.model';
import { ListboxComponent } from '../../components/listbox/listbox.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PCardComponent } from "../../components/p-card/p-card.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    InputTextModule,
    ListboxComponent,
    ReactiveFormsModule,
    PCardComponent
],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  countries: Countries[] = [];
  filteredCountries: Countries[] = [];
  randomCountries: any[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryService.getCountries().subscribe((countries) => {
      this.countries = countries;
      this.filteredCountries = countries;
      this.getRandomCountries();
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
  }

  getRandomCountries(): void {
    this.randomCountries = [];
    const randomCountries = [...this.countries].sort(() => 0.5 - Math.random()).slice(0, 3);
    randomCountries.forEach((country) => {
      this.countryService.getHolidaysForCountry(country.countryCode).subscribe((holidays) => {
        this.randomCountries.push({
          country: country.name,
          holiday: holidays[0]?.name || 'No upcoming holidays',
          date: holidays[0]?.date || 'N/A',
        });
      });
    });
  }
}
