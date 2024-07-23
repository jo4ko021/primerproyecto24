import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './pages/producto/producto.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { InversionesComponent } from './pages/inversiones/inversiones.component';


const routes: Routes = [
  {
    path:"producto",component:ProductoComponent
  },
  {
    path:"alimentacion",component:CatalogoComponent
  },
  {
    path:"indumentaria",component:InversionesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
