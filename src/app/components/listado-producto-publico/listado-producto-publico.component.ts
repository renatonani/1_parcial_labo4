import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/clases/producto';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-listado-producto-publico',
  templateUrl: './listado-producto-publico.component.html',
  styleUrls: ['./listado-producto-publico.component.css']
})
export class ListadoProductoPublicoComponent {
  productoSeleccionado : Producto;
  productoes : any;

  constructor( private firestore : FirestoreService){
    this.productoSeleccionado = new Producto("","","","","","");
  }

  async ngOnInit(): Promise<void> {
    this.productoes = await this.firestore.getProductosPublic();
    console.log(this.productoes);
  }
  
  @Output() productoSeleccionadoEvent = new EventEmitter<any>();

  // Método para emitir el actor seleccionado
    emitirProductoSeleccionado(producto: any) {
    this.productoSeleccionado = producto;
    this.productoSeleccionadoEvent.emit(producto);
  }
}
