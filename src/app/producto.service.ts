import { Injectable } from '@angular/core';
import { Producto } from './producto/producto.model';
import { DatosService } from './datos.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  
  productos: {[llave:string]:Producto} = {};

  constructor(private datosServices: DatosService){}

  listarProductos(){
    return this.datosServices.listarProductos();
  }

  guardarProducto(producto: Producto) {
      /* if (producto.id === null){
        producto.id = this.idSiguiente++;
        this.productos.push(producto);
      } else {
        const indice = this.productos.findIndex(p => p.id === producto.id);
        if(indice != -1){
          this.productos[indice] = producto;
        }
      } */
    }

    getProductoById(id:number): Producto | undefined{
      return undefined;
      // return this.productos.find(producto => producto.id === id);
    }

    eliminarProducto(id:number){
      /* const indice = this.productos.findIndex(producto => producto.id = id);
      if (indice !== -1){
        this.productos.splice(indice, 1);
      } */
    }

}
