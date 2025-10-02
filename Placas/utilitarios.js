
mostrarImagen = function (idComponente, rutaImagen) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.src = rutaImagen;
}
mostrarTexto = function (idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
}
mostrarTextoEnCaja = function (idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.value = mensaje;
}

recuperarTexto = function (idComponente) {
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;
}

recuperarInt = function (idComponente) {
    let valorCaja = recuperarTexto(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
}

recuperarFloat = function (idComponente) {
    let valorCaja = recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
}

// Verifica si el caracter es una letra mayúscula
function esMayuscula(caracter) {
    let codigo = caracter.charCodeAt(0);
    return (codigo >= 65 && codigo <= 90);
}

// Verifica si el caracter es un dígito
function esDigito(caracter) {
    let codigo = caracter.charCodeAt(0);
    return (codigo >= 48 && codigo <= 57);
}

// Verifica si el caracter es un guion "-"
function esGuion(caracter) {
    let codigo = caracter.charCodeAt(0);
    return (codigo === 45);
}

