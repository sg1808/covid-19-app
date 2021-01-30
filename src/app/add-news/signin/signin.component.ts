import { Component, OnInit } from '@angular/core';
import { AddNewsComponent } from '../add-news.component';
import { Auth1 } from './auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(public addNews : Auth1) { }

  ngOnInit(): void {
  }

}
