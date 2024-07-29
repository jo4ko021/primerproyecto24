import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';


@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent {
  hide = true
  /*
usuarios:Usuario []=[
  {
    uid: "a1",
    nombre: "elva",
    apellido: "ginon",
    email: "elva123@gmail.com",
    password: "12345",
    rol: "visitante"
  },
  {
    uid: "a2",
    nombre: "elver",
    apellido: "galarga",
    email: "elver123@gmail.com",
    password: "12345",
    rol: "visitante"
  },
  {
    uid: "a3",
    nombre: "monica",
    apellido: "galindo",
    email: "monica123@gmail.com",
    password: "12345",
    rol: "visitante"
  },
  {
    uid: "b1",
    nombre: "rosa",
    apellido: "melano",
    email: "rosa123@gmail.com",
    password: "12345",
    rol: "administrador"
  }
]
  
}
  public coleccionusuarioslocales: Usuario[]
  constructor() {
    this.coleccionusuarioslocales = [
      {
        uid: "",
        nombre: "santiago",
        apellido: "lopez",
        email: "santilopez@gmail.com",
        password: "1234",
        rol: "admin"
      },
      {
        uid: "",
        nombre: "juan",
        apellido: "perez",
        email: "juanperez@gmail.com",
        password: "1234",
        rol: "visitante"
      },
      {
        uid: "",
        nombre: "rosa",
        apellido: "melano",
        email: "rositamel@gmail.com",
        password: "1234",
        rol: "visitante"
      }
    ]
  }
    */
  usuarios: Usuario = {
    uid: "",
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    rol: ""
  }
  /*
  iniciarSesion() {
    const credenciales = {
      uid: this.usuarios.uid,
      nombre: this.usuarios.nombre,
      apellido: this.usuarios.apellido,
      email: this.usuarios.email,
      password: this.usuarios.password,
      rol: this.usuarios.rol
    }
    for (let i = 0; i < this.coleccionusuarioslocales.length; i++) {
      const usuariolocal = this.coleccionusuarioslocales[i];
      if (usuariolocal.email === credenciales.email && usuariolocal.password === credenciales.password) {
               Swal.fire({
          title: "¡Buen trabajo!",
          text: "Se pudo ingresar con exito",
          icon: "Success"
        });
        break;
      } else {
               Swal.fire({
          title: "¡Oh no!",
          text: "No se pudo registrar con exito",
          icon: "error"
        });
        break;
      }
    }
  }
  limpiarInput() {
    this.usuarios = {
      uid: this.usuarios.uid = "",
      nombre: this.usuarios.nombre = "",
      apellido: this.usuarios.apellido = "",
      email: this.usuarios.email = "",
      password: this.usuarios.password = "",
      rol: this.usuarios.rol = ""
    }
  }
 constructor(public servicioAuth: AuthService, public serviciofirestore: FirestoreService , public servicioRutas :Router){

 }
}
  async iniciarSesion() {
    const credenciales = {
      email: this.usuario.email,
      password: this.usuario.password
    }
    const res = await this.servicioAuth.iniciarSesion(credenciales.email, credenciales.password)
      .then(res => {
        alert('se pudo ingresar con exito'), this.servicioRutas.navigate(['/inicio'])
      })

  }
      */
}