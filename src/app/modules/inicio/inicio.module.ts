import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CardsComponent } from './components/cards/cards.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    InicioComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class InicioModule { }
