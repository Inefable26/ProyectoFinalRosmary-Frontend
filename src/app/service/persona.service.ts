import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL='http://proyectofinalrosmary-backend-production.up.railway.app/personas/';

  constructor(private httpClient: HttpClient) { }

  public getPersonas(): Observable <persona[]>{
    return this.httpClient.get<persona[]>(this.URL+ 'traer');
  }

  public createPersona(persona: persona): Observable<any> {
    return this.httpClient.post<any>(this.URL+ 'crear', persona);
  }
  public deletePersona (id:number): Observable<any> {
    return this.httpClient.delete<any>(this.URL+ `delete/${id}`);
  }

  public editPersona (id: number, nombre: String,apellido: String,img: String,nombredescrip:String, descripcion: String): Observable<persona> {
    return this.httpClient.put<any>(this.URL+ `editar/${id}`, persona);
  }

}