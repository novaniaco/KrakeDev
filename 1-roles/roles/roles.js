let esNuevo = false;

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

deshabilitarComponente("txtCedula");
deshabilitarComponente("txtNombre");
deshabilitarComponente("txtApellido");
deshabilitarComponente("txtSueldo");
deshabilitarComponente("btnGuardar");

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

function ejecutarNuevo() {
    esNuevo = true;
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");

}
function buscarEmpleado(cedula) {
    for (let i = 0; i < empleados.length; i++) {
        if (empleados[i].cedula === cedula) {
            return empleados[i];
        }
    }
    return null;
}
function agregarEmpleado(empleado) {
    let existente = buscarEmpleado(empleado.cedula);
    if (existente == null) {
        empleados.push(empleado);
        return true;
    } else {
        return false;
    }
}
function guardar() {
    let cedula = recuperarTexto("txtCedula");
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let sueldo = recuperarFloat("txtSueldo");

    let valido = true;

    if (cedula === "" || !/^\d{10}$/.test(cedula)) {
        mostrarTexto("lblErrorCedula", "La cedula debe tener 10 digitos.");
        valido = false;
    }

    if (nombre.length < 3 || !/^[A-Z]+$/.test(nombre)) {
        mostrarTexto("lblErrorNombre", "El nombre debe tener al menos 3 letras, además, debe estar en mayusculas.");
        valido = false;
    }

    if (apellido.length < 3 || !/^[A-Z]+$/.test(apellido)) {
        mostrarTexto("lblErrorApellido", "El apellido debe tener al menos 3 letras, además, debe estar en mayusculas.");
        valido = false;
    }

    if (isNaN(sueldo) || sueldo < 400 || sueldo > 5000) {
        mostrarTexto("lblErrorSueldo", "El sueldo debe ser un numero entre 400 y 5000.");
        valido = false;
    }

    if (!valido) {
        return;
    }

    if (esNuevo) {
        let nuevoEmpleado = {
            cedula: cedula,
            nombre: nombre,
            apellido: apellido,
            sueldo: sueldo
        };

        let resultado = agregarEmpleado(nuevoEmpleado);
        if (resultado) {
            alert("EMPLEADO GUARDADO CORRECTAMENTE");
            mostrarEmpleados();
        } else {
            alert("YA EXISTE UN EMPLEADO CON LA CEDULA " + cedula);
        }
    }
}

