import { CarritoComponent } from '../carrito/carrito.component';
import { CuentaComponent } from '../cuenta/cuenta.component';
import { StoreComponent } from '../store/store.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from '../dash/dash.component';
import { PcbComponent } from '../pcb/pcb.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
      },
  // {
  //   path: 'home',
  //   component: HomePage,
  //   // children:[
  //   //   {
  //   //     path: 'PCB',
  //   //     component: PcbComponent,
  //   //   }
  //   // ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
