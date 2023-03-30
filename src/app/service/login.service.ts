import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environments'
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  private readonly baseUrl = environment["endPoint"];

  loginUsuario(objetp: any){
    return this.httpClient.post<any>(`${this.baseUrl}/CriarTokenIdentificacao/`, objetp);
  }
}
