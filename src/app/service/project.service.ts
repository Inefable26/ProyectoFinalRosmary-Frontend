import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
 projURL= 'http://localhost:8080/project/' 

  constructor(private httpClient: HttpClient) { }

  public list(): Observable <Project[]>{ //Aquí se refiere al model de igual nombre//
    return this.httpClient.get<Project[]>(this.projURL + 'list');
  }

  public detail(id:number): Observable <Project> {
    return this.httpClient.get<Project>(this.projURL + `detail/${id}`); //Tilde invertido porque pasamos dato de path//
  }

  public save(project: Project): Observable<any>{
    return this.httpClient.post<any>(this.projURL + 'create',project);
  }

  public update(id:number, project:Project): Observable<any>{
  return this.httpClient.put<any>(this.projURL + `update/${id}`, project);
  }

  public delete (id:number): Observable<any>{
    return this.httpClient.delete<any>(this.projURL + `delete/${id}`);
  }
}
