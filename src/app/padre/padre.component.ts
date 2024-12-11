import { Component } from '@angular/core';
import { HijoComponent } from "./hijo/hijo.component";

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  mensaje: string = '';

  // Se emitió un string desde hijo
  recibirNotificacion(mensajeHijo: string){
    this.mensaje = mensajeHijo;
  }
}
