import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto/producto.model';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  url = 'https://tienda-online-4d609-default-rtdb.europe-west1.firebasedatabase.app/';

  constructor(private httpClient: HttpClient) { }
  
  listarProductos(): Observable<{[llave:string]:Producto}>{
    return this.httpClient.get<{[llave:string]:Producto}>(this.url + 'datos.json');
  }

}
