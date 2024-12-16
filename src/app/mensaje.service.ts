import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  private mensaje: string = 'Hola desde el servicio de mensajes'

  constructor() { }

  obtenerMesaje(): string{
    return this.mensaje;
  }
}
