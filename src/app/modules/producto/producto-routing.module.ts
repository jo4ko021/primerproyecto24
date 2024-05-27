import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { InicioModule } from '../inicio/inicio.module';
import { ProductoModule } from './producto.module';
import { InicioComponent } from '../inicio/pages/inicio/inicio.component';

const routes: Routes = [
  {
    path:"/inicio",component:InicioComponent
  },
  {
  path:"/catalogo",loadChildren:()=>import('../inicio/inicio.module').then(m=>InicioModule)
  },
  {
    path:"/producto",loadChildren:()=>import('./producto.module').then(m=>ProductoModule)
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
