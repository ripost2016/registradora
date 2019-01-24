import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/model/producto.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  @Input() titulo: string;
  @Input() productos: Producto[];

  @Output() envProducto = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleClick(producto) {
    // console.log(producto);
    this.envProducto.emit(producto);
  }

}
