import { Vendedor } from './../models/vendedor';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendedoresService {

 // URL API WEB
 endpoint = environment.baseUrl + 'vendedores';

 // INJEÇÃO DE DEPENDÊNCIA
 constructor(private httpClient: HttpClient) { }

  // BUSCAR TODOS
  buscarTodos() {
   return this.httpClient.get<Vendedor[]>(this.endpoint);

  }

  cadastrar(vendedor: Vendedor){
    return this.httpClient.post<Vendedor>(this.endpoint + '/cadastro', vendedor);
  }
}
