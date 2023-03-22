import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from '../model/login-usuario';
import { AuthService } from '../service/auth.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  isLogged = false;
  isLogginFail= false;
  isAdmin = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[]=[];
  errMsj!: string;


  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()){
      this.isLogged = true; /*Logueado*/
      this.isLogginFail = false; /*si logged is true,then logginFail is false..ooobviooo */
      this.roles =this.tokenService.getAuthorities(); //guarda en variable rol lo traido de tokenService//
    }
  }

  onLogin(): void {
    console.log("Llamada a Login");
    this.loginUsuario= new LoginUsuario(this.nombreUsuario, this.password); 
    this.authService.login(this.loginUsuario).subscribe(
      {
        next: data => {
          this.isLogged = true;
          this.isLogginFail = false;
          this.tokenService.setToken(data.token);
          this.tokenService.setUserName(data.nombreUsuario);
          this.tokenService.setAuthorities(data.authorities);
          this.roles = data.authorities;
          //Authorities tiene la forma de [{"authority":"ROLE_ADMIN"},{"authority":"ROLE_USER"}]
          // Agregado para generar un cambio en el html del modal
          this.isAdmin = false;
    
    
          //Desde aqui es para verificar si el usuario tiene el rol de administrador

          //Problema: data.authorities es un tipo object, pero lo recibimos como tipo string en jwt-dto
          //Solucion: Forzar a que sea entendido como unknown y luego como un array de {authority: string}
          //Eso nos deja hacer la comparacion de las authorities. some chequea en todos los elementos
          if ((data.authorities as unknown as { authority: string }[]).some(authority => authority.authority === 'ROLE_ADMIN')) {
            // Redirigir al usuario a la página de destino (dashboard)
            this.isAdmin = true;
            this.router.navigate(['edit']);
            console.log("Admin loggeado");
          } else {
            // Mostrar un mensaje de error si el usuario no tiene el rol requerido
            this.isLogged = false;
            this.isLogginFail = true;
            this.errMsj = 'No tiene permiso para acceder a esta página.';
            console.log(this.errMsj);
          }
        }, 
        error: err => {
          this.isLogged = false;
          this.isLogginFail = true;
          this.errMsj = err.error.mensaje;
          console.log(this.errMsj);
        }
      }
    );
  }
}