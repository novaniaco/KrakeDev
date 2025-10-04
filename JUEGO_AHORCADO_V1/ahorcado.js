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