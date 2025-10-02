// Valida la estructura de la placa
function validarEstructura(placa) {
    let errores = "";

    if (placa.length < 7 || placa.length > 8) {
        errores += "La placa debe tener 7 u 8 caracteres.\n";
    }
    if (!esMayuscula(placa.charAt(0))) {
        errores += "El primer caracter debe ser una letra mayúscula.\n";
    }
    if (!esMayuscula(placa.charAt(1))) {
        errores += "El segundo caracter debe ser una letra mayúscula.\n";
    }
    if (!esMayuscula(placa.charAt(2))) {
        errores += "El tercer caracter debe ser una letra mayúscula.\n";
    }
    if (!esGuion(placa.charAt(3))) {
        errores += "El cuarto caracter debe ser un guión.\n";
    }
    if (!esDigito(placa.charAt(4))) {
        errores += "El quinto caracter debe ser un dígito.\n";
    }
    if (!esDigito(placa.charAt(5))) {
        errores += "El sexto caracter debe ser un dígito.\n";
    }
    if (!esDigito(placa.charAt(6))) {
        errores += "El séptimo caracter debe ser un dígito.\n";
    }
    if (placa.length === 8 && !esDigito(placa.charAt(7))) {
        errores += "El octavo caracter debe ser un dígito.\n";
    }

    return errores === "" ? null : errores;
}

// === PROVINCIAS ===
function obtenerProvincia(placa) {
    let letra = placa.charAt(0); // primera letra de la placa
    let provincias = {
        A: "Azuay",
        B: "Bolívar",
        U: "Cañar",
        C: "Carchi",
        X: "Cotopaxi",
        H: "Chimborazo",
        O: "El Oro",
        E: "Esmeraldas",
        W: "Galápagos",
        G: "Guayas",
        I: "Imbabura",
        L: "Loja",
        R: "Los Ríos",
        M: "Manabí",
        V: "Morona Santiago",
        N: "Napo",
        S: "Pastaza",
        P: "Pichincha",
        K: "Sucumbíos",
        Q: "Orellana",
        T: "Tungurahua",
        Z: "Zamora Chinchipe",
        Y: "Santa Elena"
    };

    if (provincias[letra]) {
        return provincias[letra];
    } else {
        return null;
    }
}

// === TIPOS DE VEHÍCULOS ===
function obtenerTipoVehiculo(placa) {
    let letra = placa.charAt(1); // segunda letra de la placa
    let tipos = {
        A: "Vehículo Comercial",
        Z: "Vehículo Público",
        U: "Vehículo Oficial",
        E: "Vehículo Gubernamental",
        X: "Vehículo de uso Oficial",
        S: "Vehículos del Gobierno de Provincia",
        M: "Vehículo Municipal"
    };

    if (tipos[letra]) {
        return tipos[letra]; 
    } else {
        return "Vehículo Particular/Privado"; 
    }
}

// === PICO Y PLACA ===
function obtenerDiaPicoYPlaca(placa) {
    let ultimo = placa.charAt(placa.length - 1);

    let dias = {
        "1": "Lunes",
        "2": "Lunes",
        "3": "Martes",
        "4": "Martes",
        "5": "Miércoles",
        "6": "Miércoles",
        "7": "Jueves",
        "8": "Jueves",
        "9": "Viernes",
        "0": "Viernes"
    };

    return dias[ultimo] || "Libre circulación (Sábados, Domingos y Feriados)";
}
