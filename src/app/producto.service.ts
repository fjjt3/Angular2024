import { Injectable } from '@angular/core';
import { Producto } from './producto/producto.model';
import { DatosService } from './datos.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos: { [llave: string]: Producto } = {};

  productosActualizados = new Subject<{ [llave: string]: Producto }>();

  constructor(private datosServices: DatosService) { }

  listarProductos() {
    return this.datosServices.listarProductos();
  }

  guardarProducto(producto: Producto, llave: string | null = null) {
    if (llave === null) {
      this.datosServices.agregarProducto(producto).subscribe(() => {
        this.refrescarProductos();
      });
    } else {
      this.datosServices.modificarProducto(producto, llave).subscribe(() =>
        this.refrescarProductos());
    }
  }

  private refrescarProductos() {
    this.listarProductos().subscribe((productos: { [llave: string]: Producto }) => {
      this.setProductos(productos);
    });
  }

  setProductos(productos: { [llave: string]: Producto }) {
    this.productos = productos;
    this.productosActualizados.next(this.productos);
  }

  getProductoByLlave(llave: string): Producto | undefined {
    return this.productos[llave];
  }

  eliminarProducto(llave :string) {
    this.datosServices.eliminarProducto(llave).subscribe(()=>{
      this.refrescarProductos();
    });
  }
}
