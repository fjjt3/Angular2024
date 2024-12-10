import { Component } from '@angular/core';
import { ProductoComponent } from '../producto/producto.component';
import { Producto } from '../producto/producto.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [ProductoComponent, FormsModule],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent {
  productos: Producto[]= [
    new Producto('Pantalón', 130.0),
    new Producto('Camisa', 80.0),
    new Producto('Playera', 50.0)
  ];

  descriptionInput: string = '';
  precioInput: number | null = null;
  
  agregarProducto(){
    if(this.descriptionInput.trim() === '' || this.precioInput == null || this.precioInput <=0){
      console.log('Debe ingresar una descrpción y precio valido');
      return;
    }
    const producto = new Producto (this.descriptionInput, this.precioInput);
    this.productos.push(producto);

    this.descriptionInput = '';
    this.precioInput = null;

  }
}
