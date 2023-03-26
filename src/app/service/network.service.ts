import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Network } from '../model/network';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
 netURL= 'http://proyectofinalrosmary-backend-production.up.railway.app/network/' 

  constructor(private httpClient: HttpClient) { }

  public list(): Observable <Network[]>{ //Aquí se refiere al model de igual nombre//
    return this.httpClient.get<Network[]>(this.netURL + 'list');
  }

  public detail(id:number): Observable <Network> {
    return this.httpClient.get<Network>(this.netURL + `detail/${id}`); //Tilde invertido porque pasamos dato de path//
  }

  public save(network: Network): Observable<any>{
    return this.httpClient.post<any>(this.netURL + 'create',network);
  }

  public update(id:number, network:Network): Observable<any>{
  return this.httpClient.put<any>(this.netURL + `update/${id}`, network);
  }

  public delete (id:number): Observable<any>{
    return this.httpClient.delete<any>(this.netURL + `delete/${id}`);
  }
}
