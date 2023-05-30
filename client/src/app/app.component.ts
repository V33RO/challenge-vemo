import { Component, OnInit } from '@angular/core';

import { CountriesService } from './services/countries.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{

  constructor(
    private countriesService: CountriesService,
  ) { }

  ngOnInit(): void {
    this.countriesService.getLoadData()
  }
  imgParent = '';
  showImg = true;


  onLoaded(img: string) {
    console.log('log padre', img);
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }

}
