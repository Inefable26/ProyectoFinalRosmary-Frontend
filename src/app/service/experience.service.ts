import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../model/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService { 
 expURL= 'https://backend-final-ryanez.onrender.com/experience/' 

  constructor(private httpClient: HttpClient) { }

  public list(): Observable <Experience[]>{ //Aquí se refiere al model de igual nombre//
    return this.httpClient.get<Experience[]>(this.expURL + 'list');
  }

  public getById(id:number): Observable <Experience> {
    return this.httpClient.get<Experience>(this.expURL+`detail/${id}`); //Tilde invertido porque pasamos dato de path//
  }

  public save(experience: Experience): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'create',experience);
  }

  public update(id:number, experience:Experience): Observable<any>{
  return this.httpClient.put<any>(this.expURL + `update/${id}`, experience);
  }

  public delete (id:number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }

  public create(experience:Experience): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'create', experience);
  }

}
