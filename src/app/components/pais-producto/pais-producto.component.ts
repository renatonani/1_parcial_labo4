import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pais-producto',
  templateUrl: './pais-producto.component.html',
  styleUrls: ['./pais-producto.component.css']
})
export class PaisProductoComponent {
  @Input() pais : any;
}
