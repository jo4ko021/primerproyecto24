import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//routing
import { AutentificacionRoutingModule } from './autentificacion-routing.module';

//vistas de autentificacion
import { RegistroComponent } from './pages/registro/registro.component';
import { IniciosesionComponent } from './pages/iniciosesion/iniciosesion.component';

import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

//angular components
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    RegistroComponent,
    IniciosesionComponent
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatSelectModule
  ],
  exports: [
    RegistroComponent,
    IniciosesionComponent,
    FormsModule,
    MatSelectModule
  ]
})
export class AutentificacionModule { }
