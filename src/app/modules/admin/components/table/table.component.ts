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
  productoseleccionado!: Producto
  modalvisibleproducto: boolean = false

  producto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required),
    categoria: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required),
    alt: new FormControl('', Validators.required)
  })

  constructor(public serviciocrud: CrudService) { }
  /*
    ngOnInit(): void { 
      this.serviciocrud.obtenerProducto().subscribe.(producto => { 
        this.productocollection = producto 
      })
    }
  */
  async agregarProducto() {
    if (this.producto.valid) {
      let nuevoproducto: Producto = {
        idproducto: "",
        nombre: this.producto.value.nombre!,
        precio: this.producto.value.precio!,
        categoria: this.producto.value.categoria!,
        descripcion: this.producto.value.descripcion!,
        imagen: this.producto.value.imagen!,
        alt: this.producto.value.alt!

      }


      await this.serviciocrud.crearProducto(nuevoproducto)
        .then(producto => {
          alert("Ha agregado un nuevo producto con éxito.");
        })
        .catch(error => {
          alert("Ha ocurrido un error al cargar un producto.");
        })

    }

  }
  mostrarBorrar(productoseleccionado: Producto) {
    this.modalvisibleproducto = true
    this.productoseleccionado = productoseleccionado
  }
  
  buscarProducto() {
    this.serviciocrud.eliminarProducto(this.productoseleccionado.idproducto)
    .then()
  }
}
