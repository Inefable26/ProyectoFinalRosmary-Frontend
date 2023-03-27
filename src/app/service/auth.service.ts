import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = 'https://proyectofinalrosmary-backend-production.up.railway.app/auth/'; //la direc del back//
  constructor(private httpClient:HttpClient, private tokenService: TokenService) { } /*Le sirve a lo escrito arriba*/

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }
  public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario)
  }

  public logout(): Observable<any> {
    this.tokenService.logOut(); // Elimina el token almacenado en el navegador
    return this.httpClient.delete<any>(this.authURL + 'logout');
  }

}
