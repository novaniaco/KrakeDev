//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
//Establecemos las Variables Globales, para todo el archivo
let palabraSecreta="";
let intentos=0;
let coincidencias=0;
let errores=0;
//PASO 0 identificar si es mayúscula
esMayuscula=function(caracter){
    let mayuscula=caracter.charCodeAt(0);
    return mayuscula>=65 && mayuscula <=90;
}
//PASO 1 INGRESO DE LA PALABRA SECRETA 
guardarPalabra=function(){
    let palabra=recuperarTexto("txtSecreta");
    
    if (palabra.length !== 5) {
        alert("Debe ingresar una palabra de 5 letras mayusculas.");
        return;
    }

    for (let i = 0; i < palabra.length; i++) {
        if (!esMayuscula(palabra[i])) {
            alert("Debe ingresar SOLO letras mayusculas.");
            return;
        }
    }
    palabraSecreta = palabra;
    console.log("Palabra secreta guardada:", palabraSecreta);
    alert("Palabra guardada correctamente");
}    
//PASO 2 FUNCIÓN PARA MOSTRAR LETRAS EN LOS DIVS
mostrarLetra=function(letra,posición){
    let id="div"+posición;
    mostrarTexto(id,letra);
}