import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdDetailComponent } from './home/ad-detail/ad-detail.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { RulesComponent } from './rules/rules.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'advertisement', component: AdvertisementComponent},
  {path: 'rules', component: RulesComponent},
  {path: 'home/detail', component: AdDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
