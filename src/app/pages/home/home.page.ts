import { AuthService } from './../../core/services/auth.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit{
 
  prueba: any[]=[];

  mySwiper?: Swiper;

  constructor(
    private ath: AuthService
  ) {}

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper-container')
  }

  ok(){
    this.ath.getPruebas().subscribe(element=>{
      element.forEach(elemen => {
      this.prueba.push({
        id: elemen.payload.doc.id,
        ...elemen.payload.doc.data()
      }) 
        
      });
      console.log( this.prueba)
    })
  }

  add(){
    this.ath.addPruebas().then(element=>{
      console.log(element.subscribe())      
    });
  }
}
