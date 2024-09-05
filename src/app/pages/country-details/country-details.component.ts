import { Component } from '@angular/core';
import { Countries, CountryInfo, Holiday } from '../../country.model';
import { CountryService } from '../../services/country.service';
import { ActivatedRoute } from '@angular/router';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country-details-page',
  standalone: true,
  imports: [CardModule, CommonModule],
  templateUrl: './country-details.component.html',
  styleUrl: './country-details.component.scss',
})
export class CountryDetailsPageComponent {
  countryCode!: string;
  country!: CountryInfo | undefined;
  holidays: Holiday[] = [];
  years: number[] = [];
  selectedYear: number = new Date().getFullYear();

  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.countryCode = this.route.snapshot.paramMap.get('countryCode') || '';
    if (this.countryCode) {
      this.countryService.getCountryInfo(this.countryCode).subscribe((data) => {
        this.country = data;
      });
    }
    this.years = Array.from({ length: 11 }, (_, i) => 2020 + i);
    this.loadHolidays(this.selectedYear);
  }

  loadHolidays(year: number): void {
    this.countryService
      .getHolidayInfo(this.countryCode, year)
      .subscribe((holidays) => (this.holidays = holidays));
  }

  onYearChange(year: number): void {
    this.selectedYear = year;
    this.loadHolidays(year);
  }
}
