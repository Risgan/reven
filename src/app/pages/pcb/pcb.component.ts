import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-pcb',
  templateUrl: './pcb.component.html',
  styleUrls: ['./pcb.component.scss'],
})
export class PcbComponent implements OnInit {

  tabSelected: string="request";


  

  move(slides){
    console.log(slides)
    slides.slideNext()
}

move2(slides){
  console.log(slides)
  slides.slideTo(0)
}

  constructor() { }

  ngOnInit() {}

  segmentChanged(event){
    this.tabSelected = event.detail.value;
  }
  
}
