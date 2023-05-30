import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Country } from '../../models/country.model';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent {

  myShoppingCart: Country[] = [];
  total = 0;
  @Input() countries: Country[] = [];
  @Output() loadMore = new EventEmitter();
  showCountryDetail =false;
  countryChosen: Country={
    id: 1,
    name: 'name example',
    capital:['capital example'],
    currencies: {},
    region: 'region example',
    languages:['esp'],
    population: 0,
    flags: 'example.png'
  }

  constructor(
    private countriesService: CountriesService
  ) {
  }

 toggleCountryDetail(){
   this.showCountryDetail=!this.showCountryDetail;
 }
  onShowDetail(id:number){
    this.countriesService.getCountry(id)
    .subscribe(data =>{
      this.toggleCountryDetail();
      this.countryChosen=data;
    })
  }
  onLoadMore() {
    this.loadMore.emit();
  }
}
