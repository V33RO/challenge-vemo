import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Country } from 'src/app/models/country.model';
import { CountriesService } from '../../../services/countries.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  detailId:number | null =null;
  country: Country = {
    id: 1,
    name: 'name example',
    capital:['capital example'],
    currencies: {},
    region: 'region example',
    languages:['esp'],
    population: 0,
    flags: 'example.png'
  };

  constructor(
    private route: ActivatedRoute,
    private countriesService: CountriesService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap
    .pipe(
      switchMap(params=>{
          this.detailId =Number(params.get('id')),10;
          if (this.detailId){
             return this.countriesService.getCountry(this.detailId)
            }
          return [];
          }),
    )
         .subscribe(data=>{
            this.country=data;
         });
         console.log(this.country);
      }
    }
