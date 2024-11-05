import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  Productos: Producto[]=[];

  constructor(public crud :CrudService) {}
  ngOnInit(): void {
    this.crud.obtenerProducto().subscribe((productos) => {
      this.Productos = productos;
    });
  }
}