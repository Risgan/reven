import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PcbComponent } from '../modulos/pcb/pcb.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
        {
          path: 'PCB',
          component: PcbComponent,
        }
      ]
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
