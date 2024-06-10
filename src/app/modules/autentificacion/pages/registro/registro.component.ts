import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  //Esconde la contraseña
  hide = true;
  usuarios:Usuario = {
    uid: "",
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    rol: ""
  }
  coleccionUsuarios: Usuario[]=[]
  constructor(public  servicioAuth: AuthService, public servicioRutas: Router){}
  registrar(){
   /* const credenciales = {
      uid: this.usuarios.uid,
      nombre: this.usuarios.nombre,
      apellido: this.usuarios.apellido,
      email: this.usuarios.email,
      password: this.usuarios.password,
      rol: this.usuarios.rol
    }
    this.coleccionUsuarios.push(credenciales)
    alert("te registraste con exito!")
    this.limpiarInput()
  */
 const credenciales = {
  email:this.usuarios.email,
  password:this.usuarios.password
 }
 const res = this.servicioAuth.registrar(credenciales.email,credenciales.password)
  }
  limpiarInput(){
    this.usuarios = {
      uid: this.usuarios.uid = "",
      nombre: this.usuarios.nombre = "",
      apellido: this.usuarios.apellido = "",
      email: this.usuarios.email = "",
      password: this.usuarios.password = "",
      rol: this.usuarios.rol = ""
    }
  }
  
}
