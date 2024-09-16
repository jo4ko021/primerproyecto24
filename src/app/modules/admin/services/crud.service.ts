import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { getDownloadURL, getStorage, ref, UploadResult, uploadString, deleteObject } from 'firebase/storage'


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private respuesta!: UploadResult
  private storage = getStorage()
  private productocollection: AngularFirestoreCollection<Producto>
  constructor(private database: AngularFirestore) {
    this.productocollection = database.collection('producto')
  }
  crearProducto(producto: Producto, url: string) {
    return new Promise(async (resolve, reject) => {
      try {
        producto.imagen = url
        const idproducto = this.database.createId()
        producto.idproducto = idproducto
        const resultado = await this.productocollection.doc(idproducto).set(producto);
        resolve(resultado)
      }
      catch (error) {
        reject(error)
      }
    }
    )
  }
  obtenerProducto() {
    /*
    snapshotchanges captura el estado de los datos del sistema
    las pipe son tuberias que retornan un nuevo array
    map mapea o recorre esa nueva informacion
    a resguarda la nueva informacion y la envia como un documento
    */
    return this.productocollection.snapshotChanges().pipe(map(Action => Action.map(a => a.payload.doc.data())))
  }
  // EDITAR productos
  modificarProducto(idProducto: string, nuevaData: Producto) {
    /*
      Accedemos a la colección "productos" de la Base de Datos, buscamos el ID del 
      producto seleccionado y lo actualizamos con el método "update", enviando la 
      nueva información
    */
    return this.database.collection('productos').doc(idProducto).update(nuevaData);
  }

  // ELIMINAR productos
  eliminarProducto(idProducto: string, imagenURL: string) {
    return new Promise((resolve, reject) => {
      try {
        const storage = getStorage()

        const referenciaImagen = ref(storage, imagenURL)

        deleteObject(referenciaImagen)
          .then((resp) => {
            const respuesta = this.productocollection.doc(idProducto).delete();

            resolve(respuesta);
          })
          .catch(error => {
            reject("error al eliminar la imagen:" + error)
          })

      }
      catch (error) {
        reject(error);
      }
    })
  }
  obtenerurlimagen(respuesta: UploadResult) {
    return getDownloadURL(respuesta.ref)
  }
  /**
   * @param {string} nombre
   * @param {any} imagen
   * @param {string} ruta
   * @returns
   */
  async subirimagen(nombre: string, imagen: any, ruta: string) {
    try {
      let referenciaImagen = ref(this.storage, ruta + '/' + nombre)
      this.respuesta = await uploadString(referenciaImagen, imagen, 'data_url')
        .then(resp => {
          return resp
        })

        return this.respuesta
    }
    catch (error) {
      console.log(error)
      return this.respuesta
    }
  }
}