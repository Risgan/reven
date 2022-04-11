import { AdminGuard } from './admin.guard';
import { PcbComponent } from './pages/pcb/pcb.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashComponent } from './pages/dash/dash.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { CuentaComponent } from './pages/cuenta/cuenta.component';
import { StoreComponent } from './pages/store/store.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'PCB',
        component: PcbComponent,
        canActivate: [AdminGuard]
      },
      {
        path: 'home',
        component: DashComponent
      },
      {
        path: 'store',
        component: StoreComponent
      },
      {
        path: 'cuenta',
        component: CuentaComponent
      },
      {
        path: 'carrito',
        component: CarritoComponent
      },
      
    ]
  }, 
  {
    path: '**',
    component: PageNotFoundComponent
  }
 
  // {
  //   path: 'login',
  //   loadChildren: () => import('./modulos/login/login.module').then( m => m.LoginPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
