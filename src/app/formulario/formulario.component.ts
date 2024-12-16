import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Producto } from '../producto/producto.model';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  @ViewChild('descripcionInput') descriptionInput!: ElementRef;
  @ViewChild('precioInput') precioInput!: ElementRef;
  @Output() nuevoProducto = new EventEmitter<Producto>();

  agregarProducto(evento: Event){
    evento.preventDefault();
    if(this.descriptionInput.nativeElement.value.trim() === '' || this.precioInput == null || this.precioInput.nativeElement.value <=0){
      console.log('Debe ingresar una descrpción y precio valido');
      return;
    }
    const producto = new Producto (this.descriptionInput.nativeElement.value, this.precioInput.nativeElement.value);
    this.nuevoProducto.emit(producto);
    this.descriptionInput.nativeElement.value = '';
    this.precioInput.nativeElement.value = null;

  }
}
