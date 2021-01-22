
//DECLARO ARRAY GLOBAL PARA QUE ACTUA COMO BASE DATOS TEMPORAL
var arryBebidas= [];

//RELLENO DATOS DE PRUEBA PARA VER COMO ACTUA
function Rellena(){         
    arryBebidas.push(new Bebida("001", "Coca-Cola", "Cola", "lata 33cc", "Sin", "100", "10", "Nestle"));
    arryBebidas.push(new Bebida("002", "Fanta Naranja", "Naranja", "Botellin", "Sin" ,"200", "15", "Pepsico"));
    arryBebidas.push(new Bebida("003", "Cerveza Estrella", "Cerveza", "Quinto", "Con","2000", "15", "DAM"));
    arryBebidas.push(new Bebida("004", "Trinaranjus", "Naranja", "Botellin", "Sin","200", "15", "Pepsico"));
    arryBebidas.push(new Bebida("005", "Verdejo", "Vino Blanco", "Copa", "Con" ,"350", "4", "Bodegas Toro"));
    arryBebidas.push(new Bebida("006", "Vega Luna", "Vino Negro", "Botella litro", "Con","200", "15", "Bodegas Protos"));
    arryBebidas.push(new Bebida("007", "Vichy Catalana", "Agua", "Botellin", "Sin","80", "4", "Vichy Catalan"));
    //ACTUALIZO LISTA MOSTRANDO LOS VALORES
    MuestraListado();    

}

function Altas(){
    //DECLARO LAS VARIABLES PARA QUE SEA MAS CLARO EL CODIGO Y PASARLE LOS PARAMETROS 
    //AL CONSTRUCTOR DE LA CLASE

    let codigo =    document.getElementById("txt_codigo").value;;
    let nombre =    document.getElementById("txt_nombre").value;
    let sabor =     document.getElementById("sabores").value;
    let formato =   document.getElementById("formato").value;
    let consin =    document.getElementById("alcohol").value;
    let stock =     document.getElementById("txt_stock").value;
    let precio =    document.getElementById("txt_precio").value;
    let proveedor = document.getElementById("proveedor").value;
    
    //INSTANCIO UN OBJETO DE LA CLASE BEBIDA PASANDOLE LOS PARAMETROS 
    //QUE OBTENGO DEL HTML

    bebida=new Bebida (codigo,nombre,sabor,formato,consin,stock,precio,proveedor);

    //LO AGREGO AL ARRAY BEBIDAS QUE UTILZO PARA ALMACENAR LAS BEBIDAS
    arryBebidas.push(bebida);

   } 


//MODIFICO EL ATRIBUTO QUE SE ELIJA DEL OBJETO SELECCIONADO 
//LO BUSCO EN MI ARRAY POR EL CODIGO
//DEPENDIENDO QUE ELIJA MODIFICO UN ATRIBUTO U OTRO

function Modificar(){
    
    let codigo = prompt("Que Bebida quieres Moficar ? ");
    
  
    for(let i=0; i<arryBebidas.length; i++){     

        //COMPARA EL CODIGO PARA BUSCAR EN EL ARRAY arryBebidas
        if(codigo==arryBebidas[i].codigo){
          
            let opcion = prompt ("Selecciona el campo de la bebida que quieres cambiar con codigo : " 
            + codigo 
            + "\n 1. Nombre Bebida. \n 2. Sabor.  \n 3. Formato.  \n 4. Con o Sin Alcohol.  \n 5. Stock.  \n 6. Entrada o Salida Stock.    \n 7. Precio.  \n 8. Proveedor.    ")
   
            //DEPENDIENDO QUE OPCION ELIJAS MODIFICO EL ATRIBUTO CONCRETO DEL OBJETO 
            //CON EL NUEVO VALOR CAMBIANDOLO, INCREMENTADO O RESTANDO
            switch (opcion){
        
                case '1':     //MODIFICAR NOMBRE                
                    let nombre = prompt("Nuevo nombre : ");
                    arryBebidas[i].nombre = nombre;

                break;

                case '2':     //MODIFICAR SABOR
                   let sabor = prompt("Nuevo Sabor :");
                   arryBebidas[i].sabor=sabor;
              
                break;

                case '3':     //MODIFICAR FORMATO      
                    let formato = prompt("Nuevo Formato : ");
                    arryBebidas[i].formato = formato;

                break;
          
                case '4':     //MODIFICAR CON SIN ALCOHOL  
                    let consin = prompt("Tiene o no Alcohol : ");
                    arryBebidas[i].alcohol = consin;

                break;

                case '5':     //MODIFICAR STOCK      
                    let stock = prompt("Nuevo Stock : ");
                     arryBebidas[i].stock = stock;                 

                 break;

                case '6':       //ACTUALIZAR STOCK
                    let cantidad = prompt(" Cantidad de Entrada (+) o Salida (-) :")
                    arryBebidas[i].actualizarStock(cantidad);

                break;

                 case '7':     //MODIFICAR PRECIO      
                    let precio = prompt("Nuevo Precio : ");
                    arryBebidas[i].precio = precio;

                 break;

                 case '8':     //MODIFICAR PROVEEDOR      
                 let proveedor = prompt("Nuevo Proveedor : ");
                 arryBebidas[i].proveedor = proveedor;

              break;

                default:
            }; 
        }
    }          
} 

//PIDO QUE ARTICULO QUIERES CONSULTAR POR EL CODIGO
function Consultas(){

    let codigo=prompt("Que Bebida quieres Consultar ? ");   

    for(let i=0; i<arryBebidas.length; i++){
 
        //COMPARO CODIGO PARA HACER LA BUSQUEDA EN ARRAY POR EL ATRIBUTO CODIGO
       if(codigo==arryBebidas[i].codigo){    

         //MUESTRO EL NOMBRE Y SU STOCK POR EJEMPLO
            alert ("De la Bebida " + arryBebidas[i].nombre + "\n hay en existencias "+ arryBebidas[i].stock );     
        
        }      
    }
} 

//ELIMINO UNA BEBIDA EN EL ARRAY DONDE LAS ALMACENO
//BUSCO POR CODIGO
//UNA VEZ ENCONTRADA LA ELIMINO DEL ARRAY

function Bajas(){

    let codigo=prompt("Que Bebida quieres Eliminar ? ");
    
     for(let i=0; i<arryBebidas.length; i++){
        //COMPARO CODIGO PARA HACER LA BUSQUEDA EN ARRAY POR EL ATRIBUTO CODIGO
         if(codigo==arryBebidas[i].codigo){
          //SOLICITO CONFIRMACION
            let opcion=confirm("Seguro desea ELIMINAR la Bebida con codigo :  " + codigo );
            //SI ES TRUE ELIMINO EL ELEMENTO DEL ARRAY
            if (opcion){      
                arryBebidas.splice(i,1);     
            }
        }
    }
} 

//MUESTRO EN DOCUMENTO LA LISTA DE LOS ELEMENTOS BEBIDAS DE MI 
//ARRAY BEBIDAS
function MuestraListado(){

    document.getElementById("listado").innerHTML="";

    arryBebidas.forEach(bebida => {     
    
        //LLAMO AL METODO DE LA CLASE BEBIDA PARA QUE ME DEVUELVA UNA ARRAY CON 
        //CON TODOS LOS ATRIBUTOS DE CADA ELEMENTO
        document.getElementById("listado").innerHTML+= bebida.InformacionBebida();      
        document.getElementById("listado").innerHTML+= "<hr>"             
    });
}



//FUNCION SUBIR PRECIOS
function SuboPrecios(){
    
    let subida=prompt("Que Pocentaje de incremento en precio quieres aplicar ? ");
    
    arryBebidas.forEach(bebida => {
        bebida.SubirPreciosPorcentaje(subida);        
    });
    MuestraListado();
}


function Coste(ambito){

    let costeTotal=0;
    let coste=0;    
    let encontrado=false;
    let articulo;

    if(ambito=='global'){     

        arryBebidas.forEach(bebida => {
            coste=bebida.CalcularCosteStock();
            costeTotal += coste;
        });

        alert("EL MONTO TOTAL DE LOS PRODUCTO ES " + costeTotal + " Euros");

    }else{   
        
        let codigo=prompt("De que Bebida (CODIGO) quieres el COSTE ? ");
     

        for(let i=0; i<arryBebidas.length; i++){

            //COMPARO CODIGO PARA HACER LA BUSQUEDA EN ARRAY POR EL ATRIBUTO CODIGO
            if(codigo==arryBebidas[i].codigo){
                coste=arryBebidas[i].CalcularCosteStock();    
                articulo  = arryBebidas[i].codigo + " - " + arryBebidas[i].nombre ;
                encontrado=true;
            }
   
        }    
    }
    
    if(encontrado==true){
        alert("EL MONTO DEL PRODUCTO " + articulo + " ES " + coste + " Euros");

    }else{
        alert("ESE ARTICLUO NO EXISTE");
     
    }

}

//RELLENO LA TABLA DE FORMA DINAMICA
function RellenaTabla(){

        document.getElementById("graella").innerHTML="";
   
        //GUARDO DONDE IRA LA TABLA
        var body = document.getElementById("graella");
      
        // CREO UN ELEMENTO  <table> Y OTRO <tbody>
        var tabla   = document.createElement("table");
        tabla.id="tblGraella";

        var tblBody = document.createElement("tbody");
        
      
        
        // PONGO EL ELEMENTO BODY EN ELEMENTO TABLE
        tabla.appendChild(tblBody);
        
        var heading = new Array();
        heading[0] = "CODIGO";
        heading[1] = "NOMBRE";
        heading[2] = "SABOR";
        heading[3] = "FORMATO";
        heading[4] = "CON/SIN ";
        heading[5] = "STOCK ";
        heading[6] = "PRECIO ";
        heading[7] = "PROVEEDOR";

        //CREO LA FILA TR
        var fila = document.createElement("tr");
        //AÑADO AL CUERPO DE LA TABLA
        tblBody.appendChild(fila);

        //VOY AGREGANDO A LA FILA CADA CELDA
       for(i=0; i<heading.length; i++){         
           var cabecera= document.createElement("th");
           cabecera.setAttribute("width", "auto");
           cabecera.appendChild(document.createTextNode(heading[i]));
           fila.appendChild(cabecera);
       }

        // CREO FILAS POR CADA ELEMENTO DEL ARRAYBEBIDAS
        for (var i = 0; i < arryBebidas.length; i++) {

          // CREO EL ELEMENTO FILA POR CADA BEBIDA
          var hilera = document.createElement("tr");
          
          //LLAMAO AL METODO DE LA CLASE BEBIDA PARA QUE ME DEVUELTA 
          //UN ARRAY DE LOS ATRIBUTOS
          var arryAtributos=arryBebidas[i].InformacionBebida();

          //RECORRO EL ARRAY ATRIBUTOS
          for (var j = 0; j < arryAtributos.length; j++) {

            //CREO UN ELEMENTO TD POR CADA ATRIBUTO
            var celda = document.createElement("td");
            //GUARDO EL TEXTO QUE EN LAS CASILLA DE LA CELDA
            var textoCelda = document.createTextNode(arryAtributos[j]);
            //RELLENO LA CELDA
            celda.appendChild(textoCelda);
            //RELLNO LA FILA CON LA CELDA
            hilera.appendChild(celda);
          }
      
          // AGREGO LA FILA A LA TABLA
          tblBody.appendChild(hilera);

        }

        // METO LA TABLA DENTRO DEL BODY
        body.appendChild(tabla);
        // MODIFICO EL BORDE LA TABLA
        tabla.setAttribute("border", "2");
        tabla.setAttribute("padding", "10"); 
}
