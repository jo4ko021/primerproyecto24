import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private productocollection: AngularFirestoreCollection<Producto>
  constructor(private database: AngularFirestore) {
    this.productocollection = database.collection('producto')
  }
  crearProducto(producto: Producto) {
    return new Promise(async (resolve, reject) => {
      try {
        const idproducto = this.database.createId()
        producto.idproducto = idproducto
        const resultado = await this.productocollection.doc(idproducto)
        resolve(resultado)
      }
      catch (error) {
        reject(error)
      }
    }
    )
  }
  obtenerProducto(){
    /*
    snapshotchanges captura el estado de los datos del sistema
    las pipe son tuberias que retornan un nuevo array
    map mapea o recorre esa nueva informacion
    a resguarda la nueva informacion y la envia como un documento
    */
    return this.productocollection.snapshotChanges().pipe(map(Action=>Action.map(a=>a.payload.doc.data())))
  }
}
