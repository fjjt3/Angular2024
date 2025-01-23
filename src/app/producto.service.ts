import { Injectable } from '@angular/core';
import { Producto } from './producto/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private idSiguiente = 1;
  productos: Producto[]= [];

  constructor(){
    this.inicializarProductos();
  }
  private inicializarProductos(){
    const producto1 = new Producto(this.idSiguiente++,'Pantalón', 130.0);
    const producto2 = new Producto(this.idSiguiente++,'Camisa', 80.0);
    const producto3 = new Producto(this.idSiguiente++,'Playera', 50.0);

    this.productos.push(producto1, producto2, producto3);
  }

  agregarProducto(producto: Producto) {
    this.productos.push(producto);
    }

    getProductoById(id:number): Producto | undefined{
      return this.productos.find(producto => producto.id === id);
    }

}
