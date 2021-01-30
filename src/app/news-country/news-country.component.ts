import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { News } from '../add-news/signin/news_user.model';

@Component({
  selector: 'app-news-country',
  templateUrl: './news-country.component.html',
  styleUrls: ['./news-country.component.scss']
})

export class NewsCountryComponent implements OnInit {

  globalNews: any[];
  @Input() country: string;
  constructor(private firestore: AngularFirestore, private router : Router){
  }

  ngOnInit(): void {
    this.globalNews = []
    this.firestore.collection("news").valueChanges().subscribe((data: News[]) => {
    for(let news of data){
      console.log(news)
      if(news.country == this.country){
        console.log(news)
        this.globalNews.push(news)
      }
    }
  });
  }
}
