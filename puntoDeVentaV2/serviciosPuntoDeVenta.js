calcularDescuentoporVolumen = function(subtotal, cantidad) {
    let descuento = 0;
    if (cantidad >= 3 && cantidad <= 5) {
        descuento = subtotal * 0.03;
    } else if (cantidad >= 6 && cantidad <= 11) {
        descuento = subtotal * 0.04;
    } else if (cantidad >= 12) {
        descuento = subtotal * 0.05;
    }
    return descuento;
}

esProductoValido = function (nombre) {
    if (nombre === "") {
        mostrarTexto("lblError1", "Error: *CAMPO OBLIGATORIO");
        return false;
    }
    if (nombre.length > 10) {
        mostrarTexto("lblError1", "Error: máximo 10 caracteres");
        return false;
    }
    mostrarTexto("lblError1", ""); 
    return true;
}

esCantidadValida = function (cantidad) {
    if (cantidad === "" || isNaN(cantidad)) {
        mostrarTexto("lblError2", "Error: *CAMPO OBLIGATORIO");
        return false;
    }
    if (cantidad < 0 || cantidad > 100) {
        mostrarTexto("lblError2", "Error: debe estar entre 0 y 100");
        return false;
    }
    mostrarTexto("lblError2", "");
    return true;
}

esPrecioValido = function (precio) {
    if (precio === "" || isNaN(precio)) {
        mostrarTexto("lblError3", "Error: *CAMPO OBLIGATORIO");
        return false;
    }
    if (precio < 0 || precio > 50) {
        mostrarTexto("lblError3", "Error: debe estar entre 0 y 50");
        return false;
    }
    mostrarTexto("lblError3", "");
    return true;
}

calcularIVA = function(subtotal, valorDescuento) {
    return ((subtotal - valorDescuento) * 12) / 100;
}

calcularSubtotal = function(precio, cantidad) {
    return precio * cantidad;
}

calcularTotal = function(subtotal, valorDescuento, valorIVA) {
    return (subtotal - valorDescuento) + valorIVA;
}
