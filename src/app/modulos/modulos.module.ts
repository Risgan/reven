import { PcbComponent } from './pcb/pcb.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    PcbComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ]
})
export class ModulosModule { }
