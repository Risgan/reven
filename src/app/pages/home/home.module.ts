import { SharedModule } from './../../shared/shared.module';
import { BannerComponent } from './../banner/banner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import {StepsModule} from 'primeng/steps';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    StepsModule,
    SharedModule
  ],
  declarations: [
    HomePage,
  
  ]
})
export class HomePageModule {}
