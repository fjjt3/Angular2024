import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoService } from './egreso.service';

@Component({
  selector: 'app-egreso',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './egreso.component.html',
  styleUrl: './egreso.component.css'
})
export class EgresoComponent {
  egresos: Egreso[] = [];
  @Input() ingresoTotal!:number;

  constructor(private egresoServicio: EgresoService){
    this.egresos = this.egresoServicio.egresos;
  }

  eliminarEgreso(egreso: Egreso){
    this.egresoServicio.eliminar(egreso);
  }

  calcularPorcentaje(egreso: Egreso){
    return egreso.valor/this.ingresoTotal
  }
}
