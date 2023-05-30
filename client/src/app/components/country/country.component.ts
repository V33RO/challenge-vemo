import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Country } from '../../models/country.model';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent {

  @Input() country: Country = {
    id: 1,
    name: 'name example',
    capital:['capital example'],
    currencies: {},
    region: 'region example',
    languages:['esp'],
    population: 0,
    flags: 'example.png'
  };
  @Output() addedCountry = new EventEmitter<Country>();
  @Output() showCountry = new EventEmitter<number>();
  constructor() { }
  onShowDetail(){
   this.showCountry.emit(this.country.id);
  }

}
