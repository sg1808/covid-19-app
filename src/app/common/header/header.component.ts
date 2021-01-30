import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'common-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logoText = 'Corona Virus';

  constructor() { }

  ngOnInit(): void {
  }

}
