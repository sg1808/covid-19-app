import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgApexchartsModule } from "ng-apexcharts";
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';

import { DashboardPageComponent } from './pages/dashboard/dashboard.component';
import { CountryPageComponent } from './pages/country/country.component';
import { CountryListPageComponent } from './pages/country-list/country-list.component';

import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { MainComponent } from './common/main/main.component';
import { LoadingComponent } from './common/loading/loading.component';

import { SummaryComponent } from './pages/dashboard/summary/summary.component';
import { NewsComponent } from './pages/dashboard/news/news.component';
import { CountryTableComponent } from './pages/country-list/table/table.component';
import { StackedChartComponent } from './pages/country/stacked-chart/stacked-chart.component';
import { AreaChartComponent } from './pages/country/area-chart/area-chart.component';
import { PieComponent } from './pages/country/pie/pie.component';
import { ShowNewsComponent } from './pages/dashboard/show-news/show-news.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { SigninComponent } from './add-news/signin/signin.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NewsCountryComponent } from './news-country/news-country.component';
import { NewsDashboardComponent } from './news-dashboard/news-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoadingComponent,
    MainComponent,
    FooterComponent,
    DashboardPageComponent,
    SummaryComponent,
    NewsComponent,
    CountryPageComponent,
    CountryListPageComponent,
    CountryTableComponent,
    StackedChartComponent,
    AreaChartComponent,
    PieComponent,
    ShowNewsComponent,
    AddNewsComponent,
    SigninComponent,
    NewsCountryComponent,
    NewsDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgApexchartsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
