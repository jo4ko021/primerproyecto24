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

  nombreimagen!: string
  imagen!: string

  productocollection: Producto[] = []
  productoseleccionado!: Producto
  modalvisibleproducto: boolean = false

  producto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required),
    categoria: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    //imagen: new FormControl('', Validators.required),
    alt: new FormControl('', Validators.required)
  })

  constructor(public serviciocrud: CrudService) { }

  ngOnInit(): void {
    this.serviciocrud.obtenerProducto().subscribe(producto => {
      this.productocollection = producto
    })
  }

  async agregarProducto() {
    if (this.producto.valid) {
      let nuevoproducto: Producto = {
        idproducto: '',
        nombre: this.producto.value.nombre!,
        precio: this.producto.value.precio!,
        categoria: this.producto.value.categoria!,
        descripcion: this.producto.value.descripcion!,
        imagen: '',
        alt: this.producto.value.alt!

      }
      await this.serviciocrud.subirimagen(this.nombreimagen, this.imagen, 'productos')
        .then(resp => {
          this.serviciocrud.obtenerurlimagen(resp)
            .then(url => {
              this.serviciocrud.crearProducto(nuevoproducto, url)
                .then(producto => {
                  alert("Ha agregado un nuevo producto con éxito.");
                  // this.producto.reset();
                })
                .catch(error => {
                  alert("Ha ocurrido un error al cargar un producto.");
                  // this.producto.reset();
                })
            })
        })
    }
  }
  cargarimagenes(event:any) {
    let archivo = event.target.files[0]
    let reader = new FileReader()
    if(archivo!=undefined){
      reader.readAsDataURL(archivo)
      reader.onloadend = () => {
        const url = reader.result
        if(url!=null){
          this.nombreimagen = archivo.name
          this.imagen = url.toString()
        }
      }
    }

  }
  mostrarBorrar(productoseleccionado: Producto) {
    this.modalvisibleproducto = true
    this.productoseleccionado = productoseleccionado
  }

  borrarProducto() {
    this.serviciocrud.eliminarProducto(this.productoseleccionado.idproducto)
      .then(respuesta => {
        alert("Se ha podido eliminar con éxito.");
      })
      .catch(error => {
        alert("Ha ocurrido un error al eliminar un producto: \n" + error);
      })
  }

  mostrarEditar(productoseleccionado: Producto) {
    this.producto.setValue({
      nombre: productoseleccionado.nombre,
      precio: productoseleccionado.precio,
      descripcion: productoseleccionado.descripcion,
      categoria: productoseleccionado.categoria,
      // imagen: productoseleccionado.imagen,
      alt: productoseleccionado.alt
    })
  }

  editarProductos() {
    let datos: Producto = {
      idproducto: this.productoseleccionado.idproducto,
      nombre: this.producto.value.nombre!,
      precio: this.producto.value.precio!,
      descripcion: this.producto.value.descripcion!,
      categoria: this.producto.value.categoria!,
      imagen: '',
      alt: this.producto.value.alt!
    }
    this.serviciocrud.modificarProducto(this.productoseleccionado.idproducto, datos)
      .then(producto => {
        alert("¡El producto se ha modificado con exito!")
      })
      .catch(error => {
        alert("¡Hubo un error al modificar el producto! " + error)
      })
  }

}
