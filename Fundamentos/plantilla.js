/* ==============================
   FUNCIONES BÁSICAS
   ============================== */

// Recuperar valores desde los inputs
function mostrarDatos() {
    let nombre = document.getElementById("nombre").value;
    let edad = parseInt(document.getElementById("edad").value);

    if (nombre === "" || isNaN(edad)) {
        mostrarMensaje("Por favor ingrese nombre y edad válidos", "error");
        return;
    }

    // Mostrar datos en pantalla
    mostrarMensaje(`Hola ${nombre}, tienes ${edad} años.`, "success");

    // Agregar datos a la tabla
    agregarAFila(nombre, edad);
}

/* ==============================
   VALIDACIONES
   ============================== */
function validarEdad() {
    let edad = parseInt(document.getElementById("edad").value);

    if (isNaN(edad)) {
        mostrarMensaje("Ingrese una edad válida", "error");
    } else if (edad < 18) {
        mostrarMensaje("Debe ser mayor de edad (18+)", "error");
    } else if (edad > 100) {
        mostrarMensaje("Edad fuera de rango", "error");
    } else {
        mostrarMensaje("Edad válida ✅", "success");
    }
}

/* ==============================
   TABLAS Y DOM
   ============================== */
function agregarAFila(nombre, edad) {
    let tabla = document.getElementById("tablaDatos");
    let fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${nombre}</td>
        <td>${edad}</td>
    `;

    tabla.appendChild(fila);
}

/* ==============================
   MENSAJES Y ALERTAS
   ============================== */
function mostrarMensaje(texto, tipo) {
    let div = document.getElementById("resultado");
    div.className = "alert " + tipo;
    div.textContent = texto;
}

/* ==============================
   FUNCIONES ALEATORIAS
   ============================== */
function lanzarDado() {
    // Generar número aleatorio entre 1 y 6
    let numero = Math.floor(Math.random() * 6) + 1;
    mostrarMensaje(`Salió el número: ${numero} 🎲`, "success");
}

/* ==============================
   ESTRUCTURAS DE CONTROL (EJEMPLOS)
   ============================== */
function ejemplosFor() {
    console.log("=== Ejemplo FOR normal ===");
    for (let i = 0; i < 5; i++) {
        console.log("Contando: " + i);
    }

    console.log("=== Ejemplo FOR decreciente ===");
    for (let i = 5; i > 0; i--) {
        console.log("Cuenta regresiva: " + i);
    }

    console.log("=== Ejemplo FOR con break ===");
    for (let i = 0; i < 10; i++) {
        if (i === 5) break;
        console.log("Hasta 5 -> " + i);
    }
}

/* ==============================
   OBJETOS Y ARREGLOS
   ============================== */
let cliente = {
    nombre: "Alejandro",
    edad: 20,
    saldo: 100.5
};

function mostrarCliente() {
    console.log("Cliente:", cliente);
}

/* ==============================
   EJEMPLOS DE IF / ELSE
   ============================== */
function verificarSaldo() {
    if (cliente.saldo > 0) {
        console.log("Saldo disponible: $" + cliente.saldo);
    } else {
        console.log("Saldo insuficiente ❌");
    }
}

