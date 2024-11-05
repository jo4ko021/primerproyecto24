import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { InversionesComponent } from './pages/inversiones/inversiones.component';
import { ProductoComponent } from './pages/producto/producto.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    CatalogoComponent,
    InversionesComponent,
    ProductoComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule
  ]
})
export class ProductoModule { }
