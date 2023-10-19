import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, getDocs } from '@angular/fire/firestore';
import { Producto } from '../clases/producto';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore : Firestore) { }

  public async saveProducto(producto: Producto) {
    const productosCollection = collection(this.firestore, 'productos');    

    const docRef = await addDoc(productosCollection, {
      codigo : producto.codigo,
      descripcion : producto.descripcion,
      precio : producto.precio,
      stock : producto.stock,
      paisOrigen : producto.paisOrigen,
      comestible : producto.comestible      
    });

    return docRef.id;
  }   

  public async getProductos() {
    const productoCollection = collection(this.firestore, 'productos');
    const querySnapshot = await getDocs(productoCollection);
  
    // Usar `docs` para obtener tanto los datos como las IDs de los documentos
    const productoes = querySnapshot.docs.map(doc => {
      return {
        id: doc.id,  // Obtener la ID del documento
        ...doc.data()  // Obtener los datos del documento
      };
    });
  
    return productoes;
  }

  async getProductosPublic()
  {
    const productoCollection = collection(this.firestore, 'productos');
    const querySnapshot = await getDocs(productoCollection);
    
    const productoes = querySnapshot.docs
      .filter(doc => {
        const productoData = doc.data();
        return productoData['stock'] > 0;
      })
      .map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        };
      });

    return productoes;
  }
}
