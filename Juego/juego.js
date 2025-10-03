let puntosUsuario = 0;
let puntosComputador = 0;

// Función principal de juego
function jugar(seleccionado) {
    let eleccionComputador = generarElemento();

    // Mostrar imagen del computador
    document.getElementById("imgComputador").src = generarRuta(eleccionComputador);

    // Determinar ganador
    let resultado = determinarGanador(seleccionado, eleccionComputador);

    if (resultado === 0) {
        document.getElementById("resultado").innerText = "¡EMPATE!";
    } else if (resultado === 1) {
        puntosUsuario++;
        document.getElementById("resultado").innerText = "¡GANASTE LA PARTIDA!";
    } else {
        puntosComputador++;
        document.getElementById("resultado").innerText = "¡PERDISTE LA PARTIDA!";
    }

    // Actualizar puntajes
    document.getElementById("puntosUsuario").innerText = puntosUsuario;
    document.getElementById("puntosComputador").innerText = puntosComputador;

    // Validar si alguien llegó a 5
    if (puntosUsuario === 5) {
        alert(" HAS GANADO EL JUEGO ");
    } else if (puntosComputador === 5) {
        alert(" EL COMPUTADOR TE HA VENCIDO ");
    }
}

// Reinicia el juego
function nuevaPartida() {
    puntosUsuario = 0;
    puntosComputador = 0;

    document.getElementById("puntosUsuario").innerText = 0;
    document.getElementById("puntosComputador").innerText = 0;
    document.getElementById("resultado").innerText = "Esperando jugada...";
    document.getElementById("imgComputador").src = "";
}
