import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../model/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
 skURL= 'http://proyectofinalrosmary-backend-production.up.railway.app/skills/' 

  constructor(private httpClient: HttpClient) { }

  public list(): Observable <Skills[]>{ //Aquí se refiere al model de igual nombre//
    return this.httpClient.get<Skills[]>(this.skURL + 'list');
  }

  public detail(id:number): Observable <Skills> {
    return this.httpClient.get<Skills>(this.skURL + `detail/${id}`); //Tilde invertido porque pasamos dato de path//
  }

  public save(skills: Skills): Observable<any>{
    return this.httpClient.post<any>(this.skURL + 'create',skills);
  }

  public update(id:number, skills:Skills): Observable<any>{
  return this.httpClient.put<any>(this.skURL + `update/${id}`, skills);
  }

  public delete (id:number): Observable<any>{
    return this.httpClient.delete<any>(this.skURL + `delete/${id}`);
  }
}