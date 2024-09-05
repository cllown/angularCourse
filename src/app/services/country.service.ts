import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Countries, CountryInfo, Holiday } from '../country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl = 'https://date.nager.at/api/v3';

  constructor(private httpClient: HttpClient) { }

    getCountries():Observable<Countries[]>{
        return this.httpClient.get<Countries[]>(`${this.apiUrl}/AvailableCountries`);
    }
    getHolidaysForCountry(countryCode : string):Observable<Holiday[]>{
      return this.httpClient.get<Holiday[]>(`${this.apiUrl}/NextPublicHolidays/${countryCode}`);
    }
    getCountryInfo(countryCode : string):Observable<CountryInfo>{
      return this.httpClient.get<CountryInfo>(`${this.apiUrl}/CountryInfo/${countryCode}`)
    }
    getHolidayInfo(countryCode: string, year : number):Observable<Holiday[]>{
      return this.httpClient.get<Holiday[]>(`${this.apiUrl}/PublicHolidays/${year}/${countryCode}`)
    }
}
