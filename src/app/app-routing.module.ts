import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPageComponent } from './pages/dashboard/dashboard.component';
import { CountryPageComponent } from './pages/country/country.component';
import { CountryListPageComponent } from './pages/country-list/country-list.component';
import { ShowNewsComponent } from './pages/dashboard/show-news/show-news.component';
import { SigninComponent } from './add-news/signin/signin.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { Auth2Guard } from './add-news/auth2.guard';
import { SecurePagesGuard } from './add-news/secure-pages.guard';


const routes: Routes = [
  { path: '', component: DashboardPageComponent, data: {title: 'COVID 19 - Stats Tracker | Dashboard'} },
  { path: 'cases/:type', component: CountryListPageComponent, data: {title: 'COVID 19 - Stats Tracker | Report by Country'} },
  { path: 'cases', component: CountryListPageComponent, data: {title: 'COVID 19 - Stats Tracker | Report by Country'} },
  { path: 'country/:countryName', component: CountryPageComponent, data: {title: 'COVID 19 - Stats Tracker | Country'} },
  { path: 'news', component: ShowNewsComponent, data: {title: 'COVID 19 - Stats Tracker | News'}},
  { path: 'sign_in', component: SigninComponent, data: {title: 'COVID 19 - Stats Tracker | Sign In'}, canActivate : [SecurePagesGuard]},
  { path: 'add_news', component: AddNewsComponent, data: {title: 'COVID 19 - Stats Tracker | Add News'}, canActivate : [Auth2Guard]},
  { path: '**', component: DashboardPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
