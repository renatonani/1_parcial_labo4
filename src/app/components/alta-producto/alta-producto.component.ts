import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/clases/producto';
import { FirestoreService } from 'src/app/services/firestore.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.css']
})
export class AltaProductoComponent {
  
  selectedCountry : any;
  regForm : FormGroup;
  producto : Producto;

  onCountrySelected(country: any) {    
    this.selectedCountry = country;        
  }

  async submitForm() {
    console.log(this.regForm.valid, this.producto)
    if(this.regForm.valid && this.selectedCountry != null)
    {
      this.producto.paisOrigen = this.selectedCountry.name; 
      const id = this.firestore.saveProducto(this.producto);
      if(await id)
      {
        Swal.fire({
          icon: 'success',
          title: 'producto agregado correctamente',
          text: "",
          timer: 3000,
        });
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Error al agregar el producto',
          text: "",
          timer: 3000,
        });
      }
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Faltan datos por completar',
        text: "",
        timer: 3000,
      });
    }
  }

  constructor(private formBuilder : FormBuilder, private firestore : FirestoreService){
    
    this.regForm = this.formBuilder.group({
      codigo: ['',[ Validators.required]],
      descripcion: ['', [Validators.required]],
      precio: ['', [Validators.required]],
      stock: ['', [Validators.required]],
      paisOrigen: ['', []],
      comestible: ['', [Validators.required]]

    });

    this.producto = new Producto(
      "",
      "",
      "",
      "",
      "",
      false
    )
  }
}
