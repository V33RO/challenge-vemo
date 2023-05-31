import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';

import { Country } from './../models/country.model';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private apiUrl=  environment.apiUrl;
  order:string='ASC'
  constructor(
    private http: HttpClient
  ) { }
  getLoadData(){
    return this.http.get(`${this.apiUrl}/load-data`);
  }
  getAllCountries(limit?: number, offset?: number) {
    let params = new HttpParams();
    if (limit && offset != null) {
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }
    return this.http.get<Country[]>(this.apiUrl, { params});
  }
  getCountry(id:number){
    return this.http.get<Country>(`${this.apiUrl}/${id}`);
  }

  getCountrybyName(name:string){
    return this.http.get<Country[]>(`${this.apiUrl}?name=${name}`);
  }
  getCountrybyOrder(){
    return this.http.get<Country[]>(`${this.apiUrl}?order=ASC`);
  }
  getCountrybyOrderPopulate(){
    return this.http.get<Country[]>(`${this.apiUrl}/populate`);
  }

}
