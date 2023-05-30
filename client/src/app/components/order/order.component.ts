import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Country } from '../../models/country.model';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit{
  countries: Country[] = [];
  @Output() orderAllCountries = new EventEmitter<Country[]>();
  constructor(
      private countriesService: CountriesService,
  ) { }

  ngOnInit(): void {
    this.countries=[];
        this.countriesService.getCountrybyOrder()
    .subscribe(data => {
      this.countries = data;
    });
    console.log(this.countries);
  }
  onEmitionorder() {
    this.orderAllCountries.emit(this.countries);
  }
}
