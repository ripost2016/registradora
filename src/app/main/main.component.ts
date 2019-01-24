import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/model/producto.model';
import { LineaComanda } from 'src/model/lineaComanda.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  arrBebida: Producto[];
  arrComida: Producto[];
  comanda: LineaComanda[];

  constructor() {
    this.arrComida = [
      new Producto('Croissant', 1.50, '../../assets/images/croissant.jpg'),
      new Producto('Milanesa Ternera', 8.50, '../../assets/images/milanesa.jpg'),
      new Producto('Napolitana Chocolate', 1.50, '../../assets/images/napolitana.jpg'),
      new Producto('Sandwich de Pollo', 5.00, '../../assets/images/sandwichpollo.jpg'),
      new Producto('Sandwich Vegetal', 5.00, '../../assets/images/sandwichvegetal.jpg'),
      new Producto('Croissant Frambuesa', 1.50, '../../assets/images/croissant.jpg'),
      new Producto('Milanesa Pollo', 8.50, '../../assets/images/milanesa.jpg'),
      new Producto('Napolitana Crema', 1.50, '../../assets/images/napolitana.jpg'),
      new Producto('Sandwich de Pavo', 5.00, '../../assets/images/sandwichpollo.jpg'),
      new Producto('Sandwich Vip', 8.00, '../../assets/images/sandwichvegetal.jpg')
    ];
    this.arrBebida = [
      new Producto('Cocacola', 2.50, '../../assets/images/cocacola.jpg'),
      new Producto('Cruzcampo', 2.50, '../../assets/images/cruzcampo.jpg'),
      new Producto('San Miguel', 2.50, '../../assets/images/sanmiguel.jpg'),
      new Producto('Fanta', 2.50, '../../assets/images/fanta.jpg'),
      new Producto('Heineken', 2.50, '../../assets/images/heineken.jpg'),
      new Producto('Sprite', 2.50, '../../assets/images/sprite.jpg')
    ];
    this.comanda = new Array();
   }

  ngOnInit() {
  }

  handleEnvProducto(producto) {
    const index = this.comanda.findIndex(li => li.producto.nombre === producto.nombre);

    if (index !== -1) {
      this.comanda[index].cantidad += 1;
      // this.comanda[index].total = this.comanda[index].producto.precio * this.comanda[index].cantidad;
    } else {
      let newLine = new LineaComanda(producto);
      this.comanda.push(newLine);
    }

    // console.log(this.comanda);
  }

  handleEvLineaComanda(index) {
    this.comanda[index['index']].cantidad -= index['cantidad'];
    if (this.comanda[index['index']].cantidad === 0) {
      this.comanda.splice(index['index'], 1);
    }
  }

}
