'use strict';
// Funciones
document.addEventListener("DOMContentLoaded", () => {
    console.log("Ejercicio funciones");
    //calculadora(5,7);
    // parametros rest
    listarFrutas("Sandia","Naranja","Melon","Platano","Fresa","Manzana");
    var numero = 555;
    //numero.toString();

});

function listarFrutas(fruta1,...resto_de_fruta){
    console.log(fruta1,resto_de_fruta);
}

function calculadora(dato1,dato2,mostrar = false){
    if(mostrar == false){
        console.log("Suma " + (dato1+dato2));
        console.log("Resta " + (dato2-dato1));
        console.log("División " + (dato1/dato2));
        console.log("Multiplicación " + (dato1*dato2));
    }
    else {
        window.alert(dato1+dato2+ "Estado de: " +mostrar);
    }
   

}