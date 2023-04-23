import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../model/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
 educURL= 'https://backend-final-ryanez.onrender.com/education/' 

  constructor(private httpClient: HttpClient) { }

  public list(): Observable <Education[]>{ //Aquí se refiere al model de igual nombre//
    return this.httpClient.get<Education[]>(this.educURL + 'list');
  }

  public detail(id:number): Observable <Education> {
    return this.httpClient.get<Education>(this.educURL + `detail/${id}`); //Tilde invertido porque pasamos dato de path//
  }

  public save(education: Education): Observable<any>{
    return this.httpClient.post<any>(this.educURL + 'create',education);
  }

  public update(id:number, education:Education): Observable<any>{
  return this.httpClient.put<any>(this.educURL + `update/${id}`, education);
  }

  public delete (id:number): Observable<any>{
    return this.httpClient.delete<any>(this.educURL + `delete/${id}`);
  }
}
