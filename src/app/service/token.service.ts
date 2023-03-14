import { Injectable } from '@angular/core';

//Generamos las constantes//
const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';


@Injectable({
  providedIn: 'root'
})
export class TokenService {
  roles: Array<string> =[];
  constructor() { }


//SetToken: Creo unos métodos TOKEN tipo elimina un token ahi y copia el otro en la variable token//
  public setToken(token: string): void{
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

//GetToken//
  public getToken(): string{
    return sessionStorage.getItem(TOKEN_KEY)!;
  }

  //Ahora para UserName//
  //SetUserName//
  public setUserName(userName: string): void{
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, userName);
  }
//GetUserName//
public getUserName(): string{
  return sessionStorage.getItem(USERNAME_KEY)!;
}

 //Ahora para Authorities//
  public setAuthorities(authorities:string[]):void {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): string[]{
    this.roles = [];
  if(sessionStorage.getItem(AUTHORITIES_KEY)){
    JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)!).forEach((authority:any) => {
      this.roles.push(authority.authority);
    });
   }
   return this.roles;
 }

 //Lo anterior era para ingresar y ahora será para salir//
 public logOut():void {
  window.sessionStorage.clear();
 }

}
