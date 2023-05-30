import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FormControl, ReactiveFormsModule,Validators } from '@angular/forms';

import { Country } from '../../models/country.model';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() name: string | null = null;
  countries: Country[] = [];
  noResultsFound:boolean=false;
  @Output() searchCountries = new EventEmitter<Country[]>();
  @Output() noFound = new EventEmitter<boolean>();
  formSearch = new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-zA-Z]+(?: [a-zA-Z]+)*$'),
  ]);
  constructor(
    private countriesService: CountriesService,
  ) {}

  ngOnInit(): void {
    this.formSearch.valueChanges.subscribe((value) => {

    });
  }
  onEmitionsearch() {
    this.searchCountries.emit(this.countries);
    this.name = '';
  }

  onEmitionNofound() {
    this.noFound.emit(this.noResultsFound);
  }
  onSearch(): void {
    if (this.name) {
      const words = this.name.split(' ');
      const formattedWords = words.map(word => {
        const firstChar = word.charAt(0).toUpperCase();
        const restChars = word.substring(1).toLowerCase();
        return firstChar + restChars;
      });
      this.name = formattedWords.join(' ');
      this.countriesService.getCountrybyName(this.name).subscribe((data) => {
        this.countries = data;
      });
    }
    if(this.countries==[]){
      this.noResultsFound= true;
      console.log('entre');
      this.onEmitionNofound();
    }
}
}
