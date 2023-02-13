
//objetos
//arreglos
//metodos de arreglos

//Objeto tipo clase  

class Horas{
    constructor (servicio, precio , hora){
        this.servicio = servicio;
        this.precio = precio;
        this.hora = hora;
    }
    //métodos asociados al objetivo de tipo clase
    get_datos(){
        console.log("------------");
        console.log("Servicio: ", this.servicio);
        console.log("Precio: ", this.precio);
        console.log("Hora: ", this.hora);
    }

    get_hora (){
        if ( this.hora <=0){
            return false
        }
        else{
            return true
        }
    }

    venta_hora(cantidad){
        if( this.hora>= cantidad){
            this.hora =this.hora -cantidad;
            return true
            
        }
        else{
            return false
        }
    }
}


//CARGA DE PRODUCTOS Y STOCK
let lista_servicios =[];

lista_servicios.push( new Horas ("Diagnóstico" , 10000 ,4));
lista_servicios.push( new Horas ("Limpieza" , 15000 ,4));
lista_servicios.push( new Horas ("Restauración" , 40000 ,4));

//RENDER DE PRODUCTOS

for(let servicio of lista_servicios){
    servicio.get_datos();
}


function buscar_servicio( cita ){

    return cita.servicio == compra_servicio
}


function mayor_de_edad (edad){

    if(edad>=18){ 
        return true
    }
    else{
        return false
    }
}

let edad_usuario =prompt("Para ingresar por favor ingrese su edad");
edad_usuario = parseInt(edad_usuario);
 
if(mayor_de_edad(edad_usuario)){
    console.log("Bienvenido al sitio");
}
else{
    console.log("Todo servicio para menores de edad debe ser aprobado por un adulto");    
}

/*
let diagnóstico = 10000; //diagnóstico dental
let limpieza = 15000; //limpieza dental
let restauración = 40000; //restauración dental
*/

let compra_servicio =prompt("Ingrese la prestación que sea comprar (diagnóstico/limpieza/restauración)");

let resultado_find = lista_servicios.find( buscar_servicio);

if( resultado_find!= undefined){

    //SIMUALCIÓN DE COMPRA Y AJUSTE DE STOCK//

    //SOLICITUD DE HORA//
    //COMPROBACIÓN DE INVENTARIO INICIAL//
    if (resultado_find.get_hora()){
        let citas =prompt("¿Cuantas citas necesitas?")
    //COMPROBACIÓN DE STOCK Y ACTUALZIACIÓN DE INVENTARIO//
        if (resultado_find.venta_hora(citas)){
            console.log("Gracias por tu compra");
        }
        else{
            console.log("No tenemos disponibilidad");
        }
    }
    else{
        console.log("No se ha podido completar tu compra, no tenemos suficientes horas disponibles");
    }
    //RESUMEN DE INVENTARIO POST SIMULACIÓN DE COMPRA//
    resultado_find.get_datos();
}
else{
    console.log("Tipo de servicio no encontrado ", compra_servicio);
}

/*
    let cantidad =prompt("Ingrese la cantidad que deseada");
    cantidad=parseInt(cantidad);

    if(cantidad>0 && servicio==="diagnóstico"){
        console.log("Resumen de Compra");
        console.log("Producto:" , servicio);
        console.log("Cantidad:", cantidad);
        console.log("Doctor:", "Gustavo Valenzuela");
        console.log("Precio Total a pagar:", 10000*cantidad);
    } 
    
    else if(cantidad>0 && servicio==="limpieza"){
        console.log("Resumen de Compra");
        console.log("Producto:" , servicio);
        console.log("Cantidad:", cantidad);
        console.log("Doctor:", "Gustavo Valenzuela");
        console.log("Precio Total a pagar:", 15000*cantidad);
    }
    
    else if(cantidad>0 && servicio==="restauración"){
        console.log("Resumen de Compra");
        console.log("Producto:" , servicio);
        console.log("Cantidad:", cantidad);
        console.log("Doctor:", "Gustavo Valenzuela");
        console.log("Precio Total a pagar:", 40000*cantidad);
    }    

    else{
    while(cantidad <= 0){
        console.log("La cantidad debe ser un número positivo")
        cantidad =prompt("La cantidad no puede ser negativa, por favor reingresar dato");
        console.log("La cantidad debe ser un número positivo")
        cantidad =prompt("La cantidad no puede ser negativa, por favor reingresar dato");
        break
    }
    }
}
else{
    console.log("por favor ingresar un servicio valido")
    servicio =prompt("Ingrese la prestación que sea comprar (diagnóstico/limpieza/restauración), no olvidar los tildes");
}
*/
