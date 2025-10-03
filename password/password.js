validarPassword = function(password) {
    let errores = "";
    // Validar longitud
    if (password.length < 8) {
        errores += "El password debe tener al menos 8 caracteres.\n";
    }
    if (password.length > 16) {
        errores += "El password no debe tener más de 16 caracteres.\n";
    }
    // Validar que tenga al menos una mayúscula
    let tieneMayuscula = false;
    for (let i = 0; i < password.length; i++) {
        let caracter = password.charAt(i);
        if (caracter >= 'A' && caracter <= 'Z') {
            tieneMayuscula = true;
            break;
        }
    }
    if (!tieneMayuscula) {
        errores += "El password debe tener al menos una letra mayúscula.\n";
    }

    // Validar que tenga al menos un dígito
    let tieneDigito = false;
    for (let i = 0; i < password.length; i++) {
        let caracter = password.charAt(i);
        if (caracter >= '0' && caracter <= '9') {
            tieneDigito = true;
            break;
        }
    }
    if (!tieneDigito) {
        errores += "El password debe tener al menos un dígito.\n";
    }

    // Validar que tenga un carácter especial (* - _)
    let tieneEspecial = false;
    for (let i = 0; i < password.length; i++) {
        let caracter = password.charAt(i);
        if (caracter === '*' || caracter === '-' || caracter === '_') {
            tieneEspecial = true;
            break;
        }
    }
    if (!tieneEspecial) {
        errores += "El password debe tener al menos un carácter especial (*, - o _).\n";
    }

    return errores; // Cadena vacía si no hay errores
}

ejecutarValidacion = function() {
    let texto = document.getElementById("txtPassword").value;
    let errores = validarPassword(texto);

    if (errores === "") {
        document.getElementById("lblResultado").innerText = " Password Correcto";
    } else {
        document.getElementById("lblResultado").innerText = " Password Incorrecto:\n" + errores;
    }
}
