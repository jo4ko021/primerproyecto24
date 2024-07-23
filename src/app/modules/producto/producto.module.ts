import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { InversionesComponent } from './pages/inversiones/inversiones.component';
import { ProductoComponent } from './pages/producto/producto.component';


@NgModule({
  declarations: [
    CatalogoComponent,
    InversionesComponent,
    ProductoComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
