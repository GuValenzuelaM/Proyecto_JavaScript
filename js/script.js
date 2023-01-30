
//Comentarios


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

let servicio =prompt("Ingrese la prestación que sea comprar (diagnóstico/limpieza/restauración)");
if(servicio=="diagnóstico" || servicio=="limpieza" || servicio=="restauración"){
    
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
