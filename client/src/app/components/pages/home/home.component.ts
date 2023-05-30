import { Component, OnInit, Output } from '@angular/core';
import { Country } from 'src/app/models/country.model';

import { CountriesService } from '../../../services/countries.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  noResultsFound: boolean = false;
  countries: Country[]=[];
  limit=10;
  offset=0;

  constructor(
    private countriesService: CountriesService,
  ) { }

  ngOnInit(): void {
    this.countriesService.getAllCountries(20,0)
    .subscribe(data => {
      this.countries = data;
      this.offset+=this.limit;
    });
  }

  onLoadMore() {
    this.countriesService.getAllCountries(this.limit, this.offset).subscribe((data) => {
      this.countries = this.countries.concat(data);
      this.offset += this.limit;
    });
  }
  emitionSearch(countries: Country[]) {
    this.countries = countries;
  }
  emitionOrder(countries: Country[]) {
    this.countries = countries;
  }

  emitionNotFound(flag: boolean) {
    this.noResultsFound = flag;
  }
}
