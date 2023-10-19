import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: any;
  contrasena: any;

  constructor(private auth : AuthService, private router : Router){

  }
  autocompletarAdmin() {
    this.usuario = 'admin@admin.com';
    this.contrasena = 'admin123';
  }

  autocompletarEmpleado() {
    this.usuario = 'empleado@empleado.com';
    this.contrasena = 'empleado123';
  }

  async logIn()
  {
    console.log(this.usuario, this.contrasena)
    if(this.usuario != null && this.contrasena != null)
    {
      try {
        const userCredential = await this.auth.logIn(
          this.usuario,
          this.contrasena
        );
    
        if (userCredential.user) {
          // Autenticación exitosa, redirige al usuario a la página principal
          this.auth.logeado = true;
          this.router.navigate(['/bienvenida']);
        }     
        
      } catch (error:any) {
        // Autenticación fallida, muestra un mensaje de error al usuario
        Swal.fire({
          icon: 'error',
          title: '¡Datos inválidos!',
          text: "",
          timer: 2000,
        });
      }      
    }   
    else{
      Swal.fire({
        icon: 'error',
        title: '¡Complete los campos!',
        text: "",
        timer: 2000,
      });
    }   
  }
}
