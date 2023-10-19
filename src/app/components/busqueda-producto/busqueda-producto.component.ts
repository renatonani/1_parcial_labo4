import { Component } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-busqueda-producto',
  templateUrl: './busqueda-producto.component.html',
  styleUrls: ['./busqueda-producto.component.css']
})
export class BusquedaProductoComponent {
  productoSeleccionado : any;
  pais : any;

  constructor(private paises : PaisesService){}
  onProductoSeleccionado(producto: any)
  {
    this.productoSeleccionado = producto;
    this.paises.getACountry(this.productoSeleccionado.paisOrigen).subscribe((data: any) => {
      this.pais = data[0];       
    });
  }
}
