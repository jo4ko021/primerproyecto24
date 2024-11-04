import { Component } from '@angular/core'
import { Momo } from 'src/app/models/momo';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  //propiedad publica de tipo array
  public info: Momo[];
  constructor() {
    this.info = [
      {
        id : "1",
        nombre : "momo normal",
        rareza : "comun",
        shiny : false,
        precio : "100 usd",
        imagen : "https://i.ytimg.com/vi/Yvi5INI94tk/maxresdefault.jpg",
        descripcion : "Momo en estado base"
      }
    ]
  }
}
