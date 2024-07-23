import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/autentificacion/service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
loggeado=true
desloggeado=false
constructor(public authservice : AuthService, public Rutas : Router){}
Ingresar(){
  this.loggeado=false
  this.desloggeado=true
}
CerrarSesion(){
  this.desloggeado=false
  this.loggeado=true
  this.authservice.cerrarSesion()
  this.Rutas.navigate(["/"])
}
}
