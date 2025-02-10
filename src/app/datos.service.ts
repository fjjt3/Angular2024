import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  url = 'https://tienda-online-4d609-default-rtdb.europe-west1.firebasedatabase.app/';

  constructor(private httpClient: HttpClient) { }
}
