import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

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
      catch(error){
      reject(error)
      }
    }
    )
  }
}
