import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent {
  hide = true

  constructor(
    public servicioAuth: AuthService,
    public servicioFirestore: FirestoreService,
    public servicioRutas: Router
  ) { }

  usuarios: Usuario = {
    uid: "",
    nombre: "",
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
       */
  async iniciarSesion() {
    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password
    }

    try {
      // obtenemos usuario de la Base de Datos
      const usuarioBD = await this.servicioAuth.obtenerUsuario(credenciales.email);

      // Condicional verificada que ese usuario de la BD existiera o que sea igual al de nuestra colección
      if (!usuarioBD || usuarioBD.empty) {
        Swal.fire({
          title: "¡Oh no!",
          text: "Correo electrónico no registrado",
          icon: "error"
        });
        this.limpiarInputs();
        return;
      }

      // Vinculaba al primer documento de la colección "usuarios" que se obtenía desde la BD
      const usuarioDoc = usuarioBD.docs[0];

      /*
        Extrae los datos del documento en forma de "objeto" y se específica que va a ser del 
        tipo "Usuario" (se refiere a la interfaz Usuario de nuestros modelos)
      */
      const usuarioData = usuarioDoc.data() as Usuario;

      // Encripta la contraseña que el usuario envía mediante "Iniciar Sesión"
      const hashedPassword = CryptoJS.SHA256(credenciales.password).toString();

      /*
        Condicional que compara la contraseña que acabamos de encriptar y que el usurio 
        envío con la que recibimos del "usuarioData"
      */
      if (hashedPassword !== usuarioData.password) {
        Swal.fire({
          title: "¡Oh no!",
          text: "Contraseña incorrecta",
          icon: "error"
        });

        this.usuarios.password = '';
        return;
      }

      const res = await this.servicioAuth.iniciarSesion(credenciales.email, credenciales.password)
        .then(res => {
          Swal.fire({
            title: "¡Buen trabajo!",
            text: "¡Se pudo ingresar con éxito :)!",
            icon: "success"
          });
/*
          this.servicioAuth.setUsuarioRol(usuarioData.rol)

          if(usuarioData.rol === "admin"){
            console.log("inicio de administrador")
            this.servicioRutas.navigate('/admin')
          }
          else{
            console.log("inicio de visitante")
            this.servicioRutas.navigate('/inicio')
          }
*/
          this.servicioRutas.navigate(['/inicio']);
        })
        .catch(err => {
          Swal.fire({
            title: "¡Oh no!",
            text: "Hubo un problema al iniciar sesión :( " + err,
            icon: "error"
          });

          this.limpiarInputs();
        })
    } catch (error) {
      this.limpiarInputs();
    }
  }

  limpiarInputs() {
    const inputs = {
      email: this.usuarios.email = '',
      password: this.usuarios.password = ''
    }
  }

}

