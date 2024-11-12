import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from '../../service/auth.service';
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';
import { Router } from '@angular/router';
import * as cryptoJs from 'crypto-js'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  //Esconde la contraseña
  hide = true;
  usuarios: Usuario = {
    uid: "",
    nombre: "",
    email: "",
    password: "",
    rol: ""
  }
  coleccionUsuarios: Usuario[] = []
  constructor(public servicioAuth: AuthService, public servicioRutas: Router, public servicioFirestore: FirestoreService) { }

  async registrar() {
    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password,
    }
    const res = await this.servicioAuth.registrar(credenciales.email, credenciales.password)
      //el metodo navigate nos redirecciona a otra vista
      .then(res => {
        Swal.fire({
          title: "¡Buen trabajo!",
          text: "Se pudo registrar con exito",
          icon: "success"
        }), this.servicioRutas.navigate(['/inicio'])
      })
      .catch(error => {
        Swal.fire({
          title: "¡Oh no!",
          text: "No se pudo registrar con exito",
          icon: "error"
        });
      })
    const uid = await this.servicioAuth.obtenerUid();

    this.usuarios.uid = uid;

    this.usuarios.password = cryptoJs.SHA256(this.usuarios.password).toString();

    this.guardarUsuario();

    this.limpiarInputs();

  }

  async guardarUsuario() {
    this.servicioFirestore.agregarUsuario(this.usuarios, this.usuarios.uid)
      .then(res => {
        console.log(this.usuarios);
      })
      .catch(err => {
        console.log('Error => ', err);
      })
  }
  limpiarInputs() {
    const inputs = {
      uid: this.usuarios.uid = '',
      nombre: this.usuarios.nombre = '',
      email: this.usuarios.email = '',
      rol: this.usuarios.rol = '',
      password: this.usuarios.password = ''
    }
  }
}

