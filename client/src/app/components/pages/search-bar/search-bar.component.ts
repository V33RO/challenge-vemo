import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Country } from 'src/app/models/country.model';
import { CountriesService } from '../../../services/countries.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent  {

  @Input() name:string | null =null;
  countries: Country[] = [];
  constructor(
    private countriesService:CountriesService,
    private route: ActivatedRoute,
  ) { }


  // ngOnInit(): void {
  //   // this.route.paramMap
  //   // .pipe(
  //   //   switchMap(params=>{
  //   //       this.name =params.get('name');
  //   //       if (this.name){
  //   //          return this.countriesService.getCountrybyName(this.name)
  //   //         }
  //   //       return [];
  //   //       }),
  //   // )
  //   //      .subscribe(data=>{
  //   //         this.countries=data;
  //   //      });
  //     }
  }

