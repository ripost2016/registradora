import { Producto } from './producto.model';

export class LineaComanda {
  producto: Producto;
  cantidad: number;
  // total: number;

  constructor(producto) {
    this.producto = producto;
    this.cantidad = 1;
    // this.total = producto.precio;
  }

  calcularTotal() {
    return this.cantidad * this.producto.precio;
  }
}
