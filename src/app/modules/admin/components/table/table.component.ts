import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  productocollection: Producto[] = []

  producto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required),
    categoria: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required),
    alt: new FormControl('', Validators.required)
  })

  constructor(public serviciocrud: CrudService) { }

  ngOnInit(): void { }

  async agregarProducto() {
    if (this.producto.valid) {
      /*let nuevoproducto: Producto = {
        idproducto: "",
        nombre: this.producto.value.nombre!,
        precio: this.producto.value.precio!,
        descripcion: this.producto.value.descripcion!,
        imagen: this.producto.value.imagen!,
        alt: this.producto.value.alt!

      }
      

      await this.serviciocrud.crearProducto(nuevoproducto)
      .then
      */
    }
    
  }
}
