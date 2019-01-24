import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LineaComanda } from 'src/model/lineaComanda.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() comanda: LineaComanda[];

  @Output() evLineaComanda = new EventEmitter();

  totalComanda: number;
  // trashValue: string;

  constructor() {
    this.totalComanda = 0;
    // this.trashValue = '1';
  }

  ngOnInit() {
  }

  calcularComanda() {
    return this.comanda.reduce((total, li) => total + li.calcularTotal() , 0 );
  }

  handleTrash(index) {
    // console.log('indice', lineaComanda);
    // this.evLineaComanda.emit({index : index, cantidad: 1});

    this.comanda[index].cantidad--;

    if (this.comanda[index].cantidad === 0 || this.comanda[index].cantidad < 0) {
      this.comanda.splice(index, 1);
    }
  }

  handleInputChange(index) {
    // console.log('borrando con input ', index);
    // this.evLineaComanda.emit({index : i, cantidad : this.trashValue});

    if (this.comanda[index].cantidad < 0) { this.comanda[index].cantidad = 0; }
  }
}
