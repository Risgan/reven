import { BannerComponent } from './../pages/banner/banner.component';
import { FooterComponent } from './../pages/footer/footer.component';
import { HeaderComponent } from './../pages/header/header.component';
import { LayoutComponent } from './../pages/layout/layout.component';
import { CarritoComponent } from './../pages/carrito/carrito.component';
import { StoreComponent } from './../pages/store/store.component';
import { CuentaComponent } from './../pages/cuenta/cuenta.component';
import { DashComponent } from './../pages/dash/dash.component';
import { StepsModule } from 'primeng/steps';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PcbRequestComponent } from './../pages/pcb/components/pcb-request/pcb-request.component';
import { PcbListDetailComponent } from './../pages/pcb/components/pcb-list-detail/pcb-list-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PcbComponent } from '../pages/pcb/pcb.component';
import { PcbListComponent } from '../pages/pcb/component/pcb-list/pcb-list.component';



@NgModule({
  declarations: [
    PcbComponent,
    PcbListComponent,
    PcbListDetailComponent,
    PcbRequestComponent,
    DashComponent,
    CuentaComponent,
    StoreComponent,
    CarritoComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StepsModule,
    ReactiveFormsModule
  ],
  exports: [
    PcbComponent,
    PcbListComponent,
    PcbListDetailComponent,
    PcbRequestComponent,
    DashComponent,
    CuentaComponent,
    StoreComponent,
    CarritoComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent
  ]
})
export class SharedModule { }
