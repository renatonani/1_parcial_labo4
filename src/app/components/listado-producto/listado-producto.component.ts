import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/clases/producto';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-listado-producto',
  templateUrl: './listado-producto.component.html',
  styleUrls: ['./listado-producto.component.css']
})
export class ListadoProductoComponent {
  productoSeleccionado : Producto;
  productoes : any;

  constructor( private firestore : FirestoreService){
    this.productoSeleccionado = new Producto("","","","","","");
  }

  async ngOnInit(): Promise<void> {
    this.productoes = await this.firestore.getProductos();
    console.log(this.productoes);
  }
  
  @Output() productoSeleccionadoEvent = new EventEmitter<any>();

// Método para emitir el actor seleccionado
  emitirProductoSeleccionado(producto: any) {
  this.productoSeleccionado = producto;
  this.productoSeleccionadoEvent.emit(producto);
}
}
