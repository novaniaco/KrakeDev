let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1756133870", nombre: "Ako", apellido: "Gami", sueldo: 100.0 }
];

function mostrarOpcionEmpleado() {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    document.getElementById("divEmpleado").style.display = "block";
    mostrarEmpleados();
}

function mostrarOpcionRol() {
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}

function mostrarOpcionResumen() {
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}

function inicializar() {
    mostrarOpcionEmpleado();
}

function mostrarEmpleados() {
    let contenido = "<table>";
    contenido += "<tr><th>CEDULA</th><th>NOMBRE</th><th>APELLIDO</th><th>SUELDO</th></tr>";

    for (let i = 0; i < empleados.length; i++) {
        let emp = empleados[i];
        contenido += "<tr>";
        contenido += "<td>" + emp.cedula + "</td>";
        contenido += "<td>" + emp.nombre + "</td>";
        contenido += "<td>" + emp.apellido + "</td>";
        contenido += "<td>" + emp.sueldo.toFixed(2) + "</td>";
        contenido += "</tr>";
    }

    contenido += "</table>";
    document.getElementById("tablaEmpleados").innerHTML = contenido;
}

