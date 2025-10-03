
ejecutarPrueba1=function(){
    let mensaje;
    mensaje=recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}
ejecutarPrueba2 = function() {
    let texto =recuperarTexto("txtCadena");

    let invertida = invertirCadena(texto);
    mostrarTexto("lblResultado",invertida);
}

recorrerCadena=function(cadena){
    //0123456
    //Juanito
    let caracter;

    for(let posicion=0;posicion<cadena.length;posicion++){
        caracter=cadena.charAt(posicion);
        console.log("Caracter "+caracter+" posicion "+posicion);
    }

    for(let posicion=0;posicion<=cadena.length-1;posicion++){
        caracter=cadena.charAt(posicion);
        console.log("CARACTER "+caracter+" posicion "+posicion);
    }

}

invertirCadena=function(cadena){
    //6543210
    //Juanito
    let resultado = "";
    // Recorremos desde el último hasta el primero
    for (let posicion = cadena.length - 1; posicion >= 0; posicion--) {
        let caracter = cadena.charAt(posicion);
        resultado = resultado + caracter; // concatenamos
    }
    return resultado;
}
