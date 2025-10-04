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
    // Limpia la caja de texto y bloquea el campo
    document.getElementById("txtSecreta").value = "";
    document.getElementById("txtSecreta").disabled = true; // evita que la cambien luego
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
     

    if (esMayuscula(letra) && letra.length === 1) {
        let erroresAntes=errores;
        validar(letra);

        if(errores>erroresAntes){
            intentos++
        }
//PASO 5 y 7 ALERTS DE VICTORIA O DERROTA GIFS
        if (coincidencias === 5) {
            document.getElementById("ahorcadoImagen").src = "ganador.gif";
            alert("¡HA GANADO!");
        } else if (intentos >= 9) {
            document.getElementById("ahorcadoImagen").src = "gameOver.gif";
            alert("¡HA PERDIDO!");
        }
    } else {
        alert("SOLO SE ACEPTAN MAYÚSCULAS (una sola letra)");
    }
}
//PASO 6 FUNCIÓN MOSTRAR AL AHORCADO
mostrarAhorcado=function(){
    errores++
     if (errores > 0 && errores <= 9) {
        let ruta = "Ahorcado_0" + errores + ".png";
        document.getElementById("ahorcadoImagen").src = ruta;
    }
}