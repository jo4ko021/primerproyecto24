import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirestoreService } from '../../shared/services/firestore.service';
import { Usuario } from 'src/app/models/usuario';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth, private ServicioFirestore : FirestoreService) { }
  //funcion para registro
  registrar(email:string, password:string){
    return this.auth.createUserWithEmailAndPassword(email,password)
  }

  //funcion para inicio de sesion
  iniciarSesion(email:string, password:string){
    return this.auth.signInWithEmailAndPassword(email,password)
  }
  //funcion para cerrar sesion
  cerrarSesion(){
    return this.auth.signOut()
  }
  //funcion asincronica para tomar un uid
  async obteneruid(){
    // genera una promesa en la constante y la captura
    const user = await this.auth.currentUser
    // en caso de error devuelve un valor vacio
    // y en caso de no presentar error al iniciar sesion devuelve el uid
    if(user == null){
      return null;
    }else{
      return user.uid;
    }
  }  
}
/*obtenerUsuario(){
  return.this.ServicioFirestore.collection('usuarios', ref => ref.where('email','==',email)).get().toPromise();
}
*/
