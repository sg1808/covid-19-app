import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';

import { FormatterService } from 'src/app/services/formatter.service';
import { ConfigService } from 'src/app/services/config.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'stats-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryPageComponent implements OnInit {
  stats: any = [];
  timeline: any = [];
  timeline1: any = [];
  timeline_week: any = [];
  countryName: string;

  constructor(
    private _http: HttpService,
    private route: ActivatedRoute,
    private _location: Location,
    private titleService: Title,
    private configService: ConfigService,
    public formatterService: FormatterService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.countryName = params.get('countryName');
      console.log(this.countryName)
      this.titleService.setTitle('COVID 19 - Stats Tracker | ' + this.countryName);
      this.fetchAll();
      this.fetchHistoricalData();
      this.fetchHistoricalData_week();
      this.fetchin();
    });
  }

  fetchAll() {
    let url = this.configService.get('countriesApiUrl') + this.countryName;

    return this._http.get(url).subscribe(res => {
      this.stats = res;
    });
  }

  fetchHistoricalData() {
    let url = this.configService.get('historicalApiUrl') + this.countryName+"?lastdays=all";

    return this._http.get(url).subscribe(res => {
      this.timeline = res['timeline'];
    });
  }

  fetchHistoricalData_week() {
    let url = this.configService.get('historicalApiUrl') + this.countryName+"?lastdays=8";
    
    return this._http.get(url).subscribe(res => {
      this.timeline_week = res['timeline'];
    });
  }

  fetchin(){
    let url = this.configService.get('countriesApiUrl') + this.countryName;
    
    return this._http.get(url).subscribe(res => { 
      this.timeline1 = [res['cases'],res['recovered'],res['deaths']];
      console.log(this.timeline1);
    });
  }
  
}


