import { Component } from '@angular/core';
import { Producto } from '../producto/producto.model';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  descriptionInput: string = '';
  precioInput: number | null = null;

  constructor(private productoService: ProductoService,
    private router: Router
    
  ){}

  guardarProducto(evento: Event){
    evento.preventDefault();
    if(this.descriptionInput.trim() === '' || this.precioInput == null || this.precioInput <=0){
      console.log('Debe ingresar una descrpción y precio valido');
      return;
    }
    const producto = new Producto (this.descriptionInput, this.precioInput);
    
 this.productoService.agregarProducto(producto);

    this.descriptionInput = '';
    this.precioInput = null;
  
    this.router.navigate(['/']);

  }
  cancelar(){
    this.router.navigate(['/']);
  }
}
