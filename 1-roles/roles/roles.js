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
    deshabilitarFormulario();
}


function mostrarEmpleados() {
    let contenido = "<table>";
    contenido += "<tr><th>CEDULA</th><th>NOMBRE</th><th>APELLIDO</th><th>SUELDO</th></tr>";

    for (let emp of empleados) {
        contenido += `<tr>
            <td>${emp.cedula}</td>
            <td>${emp.nombre}</td>
            <td>${emp.apellido}</td>
            <td>${emp.sueldo.toFixed(2)}</td>
        </tr>`;
    }

    contenido += "</table>";
    document.getElementById("tablaEmpleados").innerHTML = contenido;
}


function ejecutarNuevo() {
    esNuevo = true;

    // limpia solo valores (sin deshabilitar)
    document.getElementById("txtCedula").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtApellido").value = "";
    document.getElementById("txtSueldo").value = "";
    document.getElementById("txtBusquedaCedula").value = "";
    limpiarErrores();

    // habilitar campos
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");

    document.getElementById("txtCedula").focus();
}


function buscarEmpleado(cedula) {
    for (let emp of empleados) {
        if (emp.cedula === cedula) {
            return emp;
        }
    }
    return null;
}

function agregarEmpleado(empleado) {
    let existente = buscarEmpleado(empleado.cedula);
    if (existente == null) {
        empleados.push(empleado);
        return true;
    }
    return false;
}

function ejecutarBusqueda() {
    let cedula = document.getElementById("txtBusquedaCedula").value; 
    let empleado = buscarEmpleado(cedula);

    if (empleado == null) {
        alert("EMPLEADO NO EXISTE");
        limpiarCajas();
    } else {
        document.getElementById("txtCedula").value = empleado.cedula;
        document.getElementById("txtNombre").value = empleado.nombre;
        document.getElementById("txtApellido").value = empleado.apellido;
        document.getElementById("txtSueldo").value = empleado.sueldo;

        deshabilitarComponente("txtCedula");
        habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
        habilitarComponente("txtSueldo");
        habilitarComponente("btnGuardar");

        esNuevo = false;
    }
}


function guardar() {
    let cedula = recuperarTexto("txtCedula");
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let sueldo = recuperarFloat("txtSueldo");

    limpiarErrores();
    let valido = true;

    if (cedula === "" || !/^\d{10}$/.test(cedula)) {
        mostrarTexto("lblErrorCedula", "La cedula debe tener 10 digitos.");
        valido = false;
    }

    if (nombre.length < 3 || !/^[A-Z]+$/.test(nombre)) {
        mostrarTexto("lblErrorNombre", "El nombre debe tener al menos 3 letras y estar en mayusculas.");
        valido = false;
    }

    if (apellido.length < 3 || !/^[A-Z]+$/.test(apellido)) {
        mostrarTexto("lblErrorApellido", "El apellido debe tener al menos 3 letras y estar en mayusculas.");
        valido = false;
    }

    if (isNaN(sueldo) || sueldo < 400 || sueldo > 5000) {
        mostrarTexto("lblErrorSueldo", "El sueldo debe ser un numero entre 400 y 5000.");
        valido = false;
    }

    if (!valido) return;

    if (esNuevo) {
        let nuevoEmpleado = { cedula, nombre, apellido, sueldo };
        let resultado = agregarEmpleado(nuevoEmpleado);

        if (resultado) {
            alert("EMPLEADO GUARDADO CORRECTAMENTE");
        } else {
            alert("YA EXISTE UN EMPLEADO CON LA CEDULA "+cedula);
        }

    } else {
        let empleado = buscarEmpleado(cedula);
        if (empleado != null) {
            empleado.nombre = nombre;
            empleado.apellido = apellido;
            empleado.sueldo = sueldo;
            alert("EMPLEADO MODIFICADO EXITOSAMENTE");
        }
    }

    mostrarEmpleados();
    deshabilitarFormulario();
    esNuevo = false;
}


function limpiarCajas() {
    document.getElementById("txtCedula").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtApellido").value = "";
    document.getElementById("txtSueldo").value = "";
    document.getElementById("txtBusquedaCedula").value = "";
    limpiarErrores();
    deshabilitarFormulario();
    esNuevo = false;
}

function limpiarErrores() {
    mostrarTexto("lblErrorCedula", "");
    mostrarTexto("lblErrorNombre", "");
    mostrarTexto("lblErrorApellido", "");
    mostrarTexto("lblErrorSueldo", "");
}

function deshabilitarFormulario() {
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

mostrarEmpleados();