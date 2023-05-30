import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { DetailComponent } from './components/pages/detail/detail.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import {SearchBarComponent} from './components/pages/search-bar/search-bar.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'detail/:id',
      component: DetailComponent
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'searchbar/:name',
      component: SearchBarComponent
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
