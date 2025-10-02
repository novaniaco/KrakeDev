function validarPlaca() {
    let placa = document.getElementById("txtPlaca").value.toUpperCase();
    let erroresEstructura = validarEstructura(placa);

    if (erroresEstructura === null) {
        mostrarTexto("lblResultado", "ESTRUCTURA VÁLIDA ");

        // Obtener provincia
        let provincia = obtenerProvincia(placa);
        if (provincia !== null) {
            mostrarTexto("lblProvincia", "Provincia: " + provincia);
        } else {
            mostrarTexto("lblProvincia", "Provincia INCORRECTA ");
        }

        // Obtener tipo de vehículo
        let tipoVehiculo = obtenerTipoVehiculo(placa);
        if (tipoVehiculo !== null) {
            mostrarTexto("lblTipo", "Tipo de vehículo: " + tipoVehiculo);
        } else {
            mostrarTexto("lblTipo", "Tipo de vehículo INCORRECTO ");
        }

        // Obtener Pico y Placa
        let dia = obtenerDiaPicoYPlaca(placa);
        mostrarTexto("lblPicoPlaca", "Pico y Placa: " + dia);

    } else {
        mostrarTexto("lblResultado", "ESTRUCTURA INCORRECTA ");
        mostrarTexto("lblErrores", erroresEstructura);
        limpiarDatos();
    }
}

// Función para limpiar todos los textos
function limpiar() {
    document.getElementById("txtPlaca").value = "";
    limpiarDatos();
}

function limpiarDatos() {
    mostrarTexto("lblResultado", "");
    mostrarTexto("lblErrores", "");
    mostrarTexto("lblProvincia", "");
    mostrarTexto("lblTipo", "");
    mostrarTexto("lblPicoPlaca", "");
}
