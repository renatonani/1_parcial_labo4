export class Producto {
    codigo: any;
    descripcion : any;
    precio : any;
    stock : any;
    paisOrigen : any;
    comestible : any

    constructor(codigo: any,
        descripción : any,
        precio : any,
        stock : any,
        paisOrigen : any,
        comestible : any)
    {
        this.codigo = codigo;
        this.descripcion = descripción;
        this.precio = precio;
        this.stock = stock;
        this.paisOrigen = paisOrigen;
        this.comestible = comestible;
    }
}
