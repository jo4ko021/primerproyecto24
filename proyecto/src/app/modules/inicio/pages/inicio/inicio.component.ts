import { Component } from '@angular/core';
//importamos el modelo
import { Momo } from 'src/app/models/momo';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  //propiedad publica de tipo array
  public info: Momo[];
  constructor() {
    this.info = [
      {
        id : "",
        nombre : "",
        rareza : "",
        shiny : false,
        precio : "",
        imagen: ""
      }
    ]
  }
}
