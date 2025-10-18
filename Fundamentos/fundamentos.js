// ============================
// FUNDAMENTOS DE JAVASCRIPT
// ============================

// 1️⃣ Variables y tipos de datos
var nombre = "Alejandro"; // String
let edad = 17; // Number
const PI = 3.1416; // Constante
var esEstudiante = true; // Boolean

// 2️⃣ Funciones básicas

// Función que muestra un texto en consola
function mostrarTexto(texto) {
    console.log(texto);
}

// Función que convierte un texto a número (float)
function textoANumero(texto) {
    return parseFloat(texto);
}

// Función que suma dos números
function sumar(a, b) {
    return a + b;
}

// Función que calcula el promedio de un arreglo de números
function promedio(numeros) {
    let suma = 0;
    for(let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma / numeros.length;
}

// Función para generar un número aleatorio entre min y max
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 3️⃣ Condicionales

// IF simple
function validarEdad(edad) {
    if(edad >= 18) {
        console.log("Mayor de edad");
    }
}

// IF-ELSE
function esAdulto(edad) {
    if(edad >= 18) {
        return "Adulto";
    } else {
        return "Menor de edad";
    }
}

// IF-ELSE IF-ELSE
function clasificarEdad(edad) {
    if(edad < 13) {
        return "Niño";
    } else if(edad >= 13 && edad < 18) {
        return "Adolescente";
    } else {
        return "Adulto";
    }
}

// 4️⃣ Bucles

// Bucle FOR básico
function contarHastaDiez() {
    for(let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

// Bucle WHILE
function contarConWhile() {
    let i = 1;
    while(i <= 10) {
        console.log(i);
        i++;
    }
}

// Uso de BREAK
function breakExample() {
    for(let i = 1; i <= 10; i++) {
        if(i === 5) {
            break; // Sale del bucle al llegar a 5
        }
        console.log(i);
    }
}

// 5️⃣ Arreglos y objetos

// Arreglo de nombres
let nombres = ["Marcos", "Roberto", "Kate"];
nombres.push("Diana"); // Agrega un elemento

// Objeto persona
let persona = {
    nombre: "Juan",
    edad: 30,
    saludar: function() {
        console.log("Hola, soy " + this.nombre);
    }
};

// Modificar atributos
persona.edad = 31;

// 6️⃣ Funciones para ejemplos de juegos

// Piedra, papel o tijera
function juegoPPT(usuario, computadora) {
    if(usuario === computadora) {
        return "Empate";
    } else if(
        (usuario === "piedra" && computadora === "tijera") ||
        (usuario === "papel" && computadora === "piedra") ||
        (usuario === "tijera" && computadora === "papel")
    ) {
        return "Ganaste";
    } else {
        return "Perdiste";
    }
}

// Lanzar un dado
function lanzarDado() {
    return numeroAleatorio(1, 6);
}

// 7️⃣ Recorrer cadena de texto
function recorrerCadena(texto) {
    for(let i = 0; i < texto.length; i++) {
        console.log(texto[i]);
    }
}

// 8️⃣ Validaciones básicas

// Validar si es número
function esNumero(valor) {
    return !isNaN(valor);
}

// Validar edad entre 18 y 100
function validarEdadRango(edad) {
    if(edad >= 18 && edad <= 100) {
        return true;
    }
    return false;
}

// Validar longitud mínima
function validarLongitud(texto, min) {
    return texto.length >= min;
}

// Validar mayúsculas
function tieneMayusculas(texto) {
    return /[A-Z]/.test(texto);
}

// 9️⃣ Funciones utilitarias para mostrar en HTML

// Mostrar texto en un div
function mostrarEnDiv(idDiv, texto) {
    document.getElementById(idDiv).innerText = texto;
}

// Mostrar imagen
function mostrarImagen(idDiv, url) {
    document.getElementById(idDiv).innerHTML = `<img src="${url}" alt="Imagen">`;
}

// Recuperar valor de input
function obtenerValorInput(idInput) {
    return document.getElementById(idInput).value;
}

// 10️⃣ Ejemplo práctico: Promedio de notas en HTML
function calcularPromedioNotas() {
    let n1 = textoANumero(obtenerValorInput("nota1"));
    let n2 = textoANumero(obtenerValorInput("nota2"));
    let n3 = textoANumero(obtenerValorInput("nota3"));
    let prom = promedio([n1, n2, n3]);
    mostrarEnDiv("resultado", "Promedio: " + prom);
}

// ============================
// FIN DEL ARCHIVO FUNDAMENTOS.JS
// ============================


// =======================================
// ESTRUCTURA GENERAL DEL BUCLE FOR
// =======================================
// for (inicialización; condición; incremento o decremento) {
//     // Código que se repite mientras la condición sea verdadera
// }

// Ejemplo básico
for (let i = 1; i <= 5; i++) {
    console.log("Contador: " + i);
}
// Salida: 1, 2, 3, 4, 5


for (let i = 10; i >= 1; i--) {
    console.log("Cuenta regresiva: " + i);
}
// Empieza en 10, termina en 1


for (let i = 0; i <= 20; i += 2) {
    console.log("Número par: " + i);
}
// Imprime 0, 2, 4, 6, ..., 20


for (let i = 50; i >= 0; i -= 10) {
    console.log("Bajando de 10 en 10: " + i);
}
// Imprime 50, 40, 30, 20, 10, 0


let frutas = ["Manzana", "Pera", "Uva"];
for (let i = 0; i < frutas.length; i++) {
    console.log("Fruta: " + frutas[i]);
}


for (let fila = 1; fila <= 3; fila++) {
    for (let col = 1; col <= 3; col++) {
        console.log("Fila " + fila + ", Columna " + col);
    }
}


for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Se detuvo en " + i);
        break; // Sale del bucle
    }
    console.log("Número: " + i);
}


for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // Salta el 3
    }
    console.log("Valor: " + i);
}
// Imprime 1, 2, 4, 5


let texto = "Hola";
for (let i = 0; i < texto.length; i++) {
    console.log("Letra " + i + ": " + texto[i]);
}


let n = 5;
for (let i = n; i >= 1; i--) {
    console.log("Cuenta regresiva: " + i);
}


//Operador	Significado	Ejemplo
//i++	Incrementa de 1 en 1	for(i=0; i<5; i++)
//i--	Decrementa de 1 en 1	for(i=5; i>=0; i--)
//i+=n	Aumenta en pasos de n	for(i=0; i<=10; i+=2)
//i-=n	Disminuye en pasos de n	for(i=10; i>=0; i-=2)