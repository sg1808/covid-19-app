import { Component, OnInit } from '@angular/core';
import { Auth1 } from '../add-news/signin/auth.service';
import { News } from '../add-news/signin/news_user.model';
import { CountryListPageComponent } from '../pages/country-list/country-list.component'

import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-dashboard',
  templateUrl: './news-dashboard.component.html',
  styleUrls: ['./news-dashboard.component.scss']
})
export class NewsDashboardComponent implements OnInit {
  globalNews: any[];
  
  constructor(private firestore: AngularFirestore, private router : Router){
  }

  ngOnInit(): void {
    this.globalNews = []
   this.firestore.collection("news").valueChanges().subscribe((data: News[]) => {
    for(let news of data){
        this.globalNews.push(news)
    }
  });
    console.log(this.globalNews)
  }
}
