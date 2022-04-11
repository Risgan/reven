import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {

  images: string[]=[
    'assets/img/example01.png',
    'assets/img/example02.png',
    'assets/img/example03.png',
  ];

  constructor() { }

  ngOnInit() {}

}
