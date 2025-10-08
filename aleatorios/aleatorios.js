
generarAleatorio = function() {
    let numero = Math.floor(Math.random() * 100) + 1;
    return numero;
}

generarAleatorios = function() {
    let aleatorios = [];
    let cantidad = recuperarInt("txtCantidad");

    if (isNaN(cantidad) || cantidad < 5 || cantidad > 20) {
        alert("Por favor ingresa un número entre 5 y 20.");
        return;
    }

    for (let i = 0; i < cantidad; i++) {
        console.log("Índice: " + i);
        let numero = generarAleatorio();
        aleatorios.push(numero);
    }

    mostrarResultados(aleatorios);
}

mostrarResultados = function(arregloNumeros) {
    let contenido = "<table>";
    contenido += "<tr><th>Índice</th><th>Valor</th></tr>";

    for (let i = 0; i < arregloNumeros.length; i++) {
        contenido += "<tr><td>" + i + "</td><td>" + arregloNumeros[i] + "</td></tr>";
    }

    contenido += "</table>";

    mostrarTexto("lblResultado", ""); 
    document.getElementById("lblResultado").innerHTML = contenido;
}
