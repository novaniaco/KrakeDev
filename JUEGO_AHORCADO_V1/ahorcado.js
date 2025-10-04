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
mostrarLetra=function(letra,posicion){
    let id="div"+posicion;
    mostrarTexto(id,letra);
}
//PASO 3 VALIDAR LA LETRA SI ES QUE EXISTE EN LA PALABRA
validar=function(letra){
    let letrasEncontradas=0;
    for(let i=0;i<palabraSecreta.length;i++){
        if(palabraSecreta[i]===letra){
            mostrarLetra(letra,i);
            letrasEncontradas++;
            coincidencias++
        }
    }
    if(letrasEncontradas===0){
        alert("LA LETRA INGRESADA NO ES PARTE DE LA PALABRA");
        mostrarAhorcado();
    }
}
//PASO 4 FUNCIÓN QUE SE EJECUTA DESDE EL BOTÓN VALIDAR
ingresarLetra=function() {
    let letra = recuperarTexto("txtLetra");
     intentos++;

    if (esMayuscula(letra) && letra.length === 1) {
        validar(letra);
//PASO 5 ALERTS DE VICTORIA O DERROTA
        if (coincidencias === 5) {
            document.getElementById("ahorcadoImagen").src = "ganador.gif";
            alert("¡HA GANADO!");
        } else if (intentos >= 10) {
            document.getElementById("ahorcadoImagen").src = "gameOver.gif";
            alert("¡HA PERDIDO!");
        }
    } else {
        alert("SOLO SE ACEPTAN MAYÚSCULAS (una sola letra)");
    }
}