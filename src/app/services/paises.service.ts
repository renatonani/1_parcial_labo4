import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http : HttpClient) { }

  getAllCountries() {
    return this.http.get('https://restcountries.com/v2/all');
  }
  
  getACountry(pais:string)
  {
    return this.http.get('https://restcountries.com/v3.1/name/'+pais);
  }
}
