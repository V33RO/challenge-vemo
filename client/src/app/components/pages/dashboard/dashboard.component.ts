import { AfterViewInit, Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Country } from 'src/app/models/country.model';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  implements OnInit, AfterViewInit {
  countriesPopulation: Country[]=[];
  countriesRegion: Country[]=[];
  conteoReg:Map<string, number> | undefined
  constructor(
    private countriesService: CountriesService,
  ) { }

  populationObservable(): Observable<any> {
    return this.countriesService.getCountrybyOrderPopulate();
  }

  regionObservable(): Observable<any> {
    return this.countriesService.getCountrybyOrderPopulate();
  }
ngAfterViewInit() {
  this.populationObservable().subscribe(
    (  countriesPopulation
      ) => {
      this.countriesPopulation=   countriesPopulation;
      const ctx = document.getElementById('myChart1') as HTMLCanvasElement;
      const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: [this.countriesPopulation[0].name, this.countriesPopulation[1].name, this.countriesPopulation[2].name, this.countriesPopulation[3].name, this.countriesPopulation[4].name],
          datasets: [{
            label: 'Poblacion/Pais',
            data: [this.countriesPopulation[0].population, this.countriesPopulation[1].population, this.countriesPopulation[2].population, this.countriesPopulation[3].population, this.countriesPopulation[4].population],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    },
    (error) => {
      console.error(error);
    }
  );

  }
generarColorAleatorio(): string {
    const caracteresHex = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += caracteresHex[Math.floor(Math.random() * 16)];
    }

    return color;
  }
  ngOnInit() {
    this.regionObservable().subscribe(
      (countriesRegion) => {
        this.countriesRegion = countriesRegion;
        console.log('dd',this.countriesRegion);
        const conteoRegiones = new Map<string, number>();
        const conteoLanguage = new Map<string, number>();



        for (const elemento of this.countriesRegion) {
          const region = elemento.region;
          if (conteoRegiones.has(region)) {
            conteoRegiones.set(region, conteoRegiones.get(region)! + 1);
          } else {
            conteoRegiones.set(region, 1);
          }

        }

        const cantidadAsia = conteoRegiones.get('Asia');
        const cantidadEurope = conteoRegiones.get('Europe');
        const cantidadAmericas = conteoRegiones.get('Americas');
        const cantidadAfrica = conteoRegiones.get('Africa');
        const cantidadOceania = conteoRegiones.get('Oceania');

        const contador: { [key: string]: number } = {};
        let labelColor:string[]=[];
        for (const item of this.countriesRegion) {
          console.log(item.languages);
          if (item.languages) {

            for (const idioma in item.languages) {
              if (contador[idioma]) {
                contador[idioma]++;
              } else {
                contador[idioma] = 1;
              }
            }
          }
        }

        const propiedades = Object.keys(contador);
        const valores = Object.values(contador);

        propiedades.forEach((value, key) => {
           labelColor.push(this.generarColorAleatorio());
        });

        const ctx = document.getElementById('myChart2') as HTMLCanvasElement;
        const myChart = new Chart(ctx, {
          type: 'pie',
          data: {
            labels: ['Asia', 'Europe', 'Americas','Africa','Oceania'],
            datasets: [{
              data: [cantidadAsia, cantidadEurope, cantidadAmericas, cantidadAfrica, cantidadOceania],
              backgroundColor: ['red', 'blue', 'yellow','green','purple']
            }]
          }
        });

    const cty = document.getElementById('myChart3') as HTMLCanvasElement;
    const myChart1 = new Chart(cty, {
      type: 'pie',
      data: {
        labels: propiedades,
        datasets: [{
          data: valores,
          backgroundColor: labelColor
        }]
      }
    });
      },
      (error) => {
        console.error(error);
      }
    );
}

}
