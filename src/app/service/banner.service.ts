import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banner } from '../model/banner';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
 banURL= 'http://proyectofinalrosmary-backend-production.up.railway.app/banner/' 

  constructor(private httpClient: HttpClient) { }

  public list(): Observable <Banner[]>{ //Aquí se refiere al model de igual nombre//
    return this.httpClient.get<Banner[]>(this.banURL + 'list');
  }

  public detail(id:number): Observable <Banner> {
    return this.httpClient.get<Banner>(this.banURL + `detail/${id}`); //Tilde invertido porque pasamos dato de path//
  }

  public save(banner: Banner): Observable<any>{
    return this.httpClient.post<any>(this.banURL + 'create',banner);
  }

  public update(id:number, banner:Banner): Observable<any>{
  return this.httpClient.put<any>(this.banURL + `update/${id}`, banner);
  }

  public delete (id:number): Observable<any>{
    return this.httpClient.delete<any>(this.banURL + `delete/${id}`);
  }
}

