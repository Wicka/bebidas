class Bebida{

    constructor(codigo, nombre, sabor, formato, alcohol, stock, precio,proveedor){

        this.codigo=codigo;
        this.nombre=nombre;
        this.sabor=sabor;
        this.formato=formato;
        this.alcohol=alcohol;
        this.stock=stock;
        this.precio=precio;
        this.proveedor=proveedor;

    }
   

    actualizarStock(cantidad){         
        this.stock =     parseInt(this.stock)+parseInt(cantidad);   
    }
    
        
    CalcularCosteStock(){
        let costeTotalStock =  parseInt(this.precio) * parseInt(this.stock); 
        return costeTotalStock;
    }

    SubirPreciosPorcentaje(porcentaje){
        this.precio=
            parseInt(this.precio) +  ((parseInt(this.precio) * parseInt(porcentaje))/100);

    }

    InformacionBebida(){
        let articulo = [];
        articulo.push(this.codigo);
        articulo.push(this.nombre);
        articulo.push(this.sabor);
        articulo.push(this.formato);
        articulo.push(this.alcohol);
        articulo.push(this.stock);
        articulo.push(this.precio);
        articulo.push(this.proveedor);
        return articulo;
    }































     /*
 
  
    */
}
