import { Component } from '@angular/core'
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  //propiedad publica de tipo array
 Productos: Producto[]=[];

  constructor(public crud :CrudService) {}
  ngOnInit(): void {
    this.crud.obtenerProducto().subscribe((productos) => {
      this.Productos = productos.slice(1, 4);;
    });
  }

}
