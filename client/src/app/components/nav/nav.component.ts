import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  activeMenu = false;
  counter = 0;
  searchInput='';
  searchResults!: string[] | null;

  constructor(
    private http: HttpClient
  ) { }


  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  onSearch() {
    this.http.get<any[]>(`http://localhost:3000/countries?name=${this.searchInput}`).subscribe(
      (response) => {
        console.log(response);
        this.searchResults = response ;
      },
      (error) => {
        console.log('Error al realizar la búsqueda:', error);
      }
    );
  }
}

