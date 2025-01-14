import { Component } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoService } from './ingreso.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ingreso',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ingreso.component.html',
  styleUrl: './ingreso.component.css'
})
export class IngresoComponent {
  ingresos: Ingreso[] = [];

  constructor(private IngresoServicio: IngresoService){
    this.ingresos = this.IngresoServicio.ingresos;
  }

  eliminarRegistro(ingreso: Ingreso){
    this.IngresoServicio.eliminar(ingreso);
  }
}
