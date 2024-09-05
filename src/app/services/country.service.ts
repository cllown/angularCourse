import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Countries } from '../country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl = 'https://date.nager.at/api/v3';

  constructor(private httpClient: HttpClient) { }

    getCountries():Observable<Countries[]>{
        return this.httpClient.get<Countries[]>(`${this.apiUrl}/AvailableCountries`);
    }
    getHolidaysForCountry(countryCode : string):Observable<any>{
      return this.httpClient.get<any>(`${this.apiUrl}/NextPublicHolidays/${countryCode}`);
    }
}
