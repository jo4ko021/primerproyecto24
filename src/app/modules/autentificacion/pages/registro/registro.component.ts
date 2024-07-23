import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from '../../service/auth.service';
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';
import { Router } from '@angular/router';
import * as cryptoJs from 'crypto-js'

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
    apellido: "",
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
      .then(res => { alert("se pudo registrar con exito"), this.servicioRutas.navigate(['/inicio']) })
      .catch(error => { alert("hubo un problema al registrar u nuevo usuario\n" + error) })
    alert("te registraste con exito!")
  }
  async guardarUsuario() {
    this.servicioFirestore.agregarUsuario(this.usuarios, this.usuarios.uid)
      .then(res => {
        console.log(this.usuarios);
      })
      .catch(err => {
        console.log('Error => ', err);
      })
    // Constante UID captura el identificado de la BD
    const uid = await this.servicioAuth.obteneruid();

    // Se le asigna al atributo de la interfaz esta constante
    this.usuarios.uid = uid;
  }
  limpiarInputs() {
    const inputs = {
      uid: this.usuarios.uid = '',
      nombre: this.usuarios.nombre = '',
      apellido: this.usuarios.apellido = '',
      email: this.usuarios.email = '',
      rol: this.usuarios.rol = '',
      password: this.usuarios.password = ''
    }
  }
  /*
  this.usuarios.password = cryptoJs.SHA256

try {
  const usuarioBD = await this.servicioAuth.obtenerUsuario(credenciales.password)
  if (!usuarioBD || usuarioBD.empty) {
    alert('Correo electronico no esta registrado')
  }
  const usuarioDOC = usuarioBD.docs[0]
  const hashedPassword = CryptoJS.SHA256(credenciales.password)
  const usuarioData = usuarioDOC.data() as Usuario
  if (hashedPassword !== usuarioData.password) (
    alert('Contraseña incorrecta')
    this.usuario.password = ''
  return
  )
}
  */
}

