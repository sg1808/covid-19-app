import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app'
import { Auth1 } from './signin/auth.service';
import { NewsGen } from './signin/news_general.service';
import { News } from './signin/news_user.model';
import { User } from './signin/user.model';
@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit {

  user : User;
  country : string;
  author : string;
  email : string;
  title : string;
  image_src : string;
  body_src : string;
  description : string;

  constructor(public authService : Auth1) {}

  ngOnInit(): void {
    this.authService.getUser();
    this.user = this.authService.getUser();
    this.author = this.user.displayName;
    this.email = this.user.email;

  }

  addNews(){

    let news : News = {
      author : this.author,
      email : this.email,
      title : this.title,
      image_src : this.image_src,
      body_src : this.body_src,
      country : this.country,
      description : this.description,
    };
    let news_ : NewsGen = {
      displayName : this.author,
      email : this.email,
      title : this.title,
      body_src : this.body_src,
      country : this.country,
      description : this.description,
    }

    this.authService.addNews(news);
    this.authService.addNews_(news_);
    this.author = undefined;
    this.email = undefined;
    this.title = undefined;
    this.image_src = undefined;
    this.body_src = undefined;
    this.country = undefined;
    this.description = undefined;
  
  }
}
