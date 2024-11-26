import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/autentificacion/service/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  loggeado: boolean = false;  // Por defecto el usuario no está logueado

  constructor(
    public authservice: AuthService,
    public Rutas: Router,
    private afAuth: AngularFireAuth,
  ) {}

  ngOnInit(): void {
    // Aquí suscribimos a los cambios del estado de autenticación del usuario
    this.afAuth.authState.subscribe(user => {
      if (user) {
        // Si hay un usuario autenticado
        this.loggeado = true;
      } else {
        // Si no hay usuario autenticado
        this.loggeado = false;
      }
    });
  }

CerrarSesion(){
  this.authservice.cerrarSesion()
  this.Rutas.navigate(["/"])
}
cambiarfondo(){
  let toggle: HTMLInputElement | null = document.getElementById("toggle") as HTMLInputElement
  let label_toggle: HTMLElement | null = document.getElementById("label_toggle") as HTMLElement
  if(toggle){
    let checked: boolean = toggle.checked;
    document.body.classList.toggle('dark',checked);
    if(checked){
      label_toggle!.innerHTML='<i class="fa-solid fa-sun"></i>'
    }
    else{
      label_toggle!.innerHTML='<i class="fa-solid fa-moon"></i>'
    }
  }
}
}
 