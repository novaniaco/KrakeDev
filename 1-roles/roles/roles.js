let esNuevo = false;
let roles = [];
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
    mostrarRoles();
    mostrarTotales();
}

function mostrarOpcionResumen() {
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}

function inicializar() {
    mostrarOpcionRol(); //cambiamos a rol
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
            alert("YA EXISTE UN EMPLEADO CON LA CEDULA " + cedula);
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

function buscarPorRol() {
    let cedula = recuperarTexto("txtBusquedaCedulaRol");
    let empleado = buscarEmpleado(cedula);

    if (empleado == null) {
        alert("EMPLEADO NO EXISTE");
        mostrarTexto("infoCedula", "");
        mostrarTexto("infoNombre", "");
        mostrarTexto("infoSueldo", "");
    } else {

        mostrarTexto("infoCedula", empleado.cedula);
        mostrarTexto("infoNombre", empleado.nombre + " " + empleado.apellido);
        mostrarTexto("infoSueldo", empleado.sueldo.toFixed(2));
    }
}

function calcularAporteEmpleado(sueldo) {
    return sueldo * 0.0945;
}

function calcularValorAPagar(sueldo, aporte, descuento) {
    return sueldo - aporte - descuento;
}

function calcularRol() {
    let sueldo = recuperarFloatDiv("infoSueldo");
    let descuento = recuperarFloat("txtDescuentos");

    if (isNaN(descuento) || descuento < 0 || descuento > sueldo) {
        alert("El descuento debe ser un numero valido y no mayor al sueldo.");
        return;
    }

    let aporte = calcularAporteEmpleado(sueldo);
    let totalPagar = calcularValorAPagar(sueldo, aporte, descuento);

    mostrarTexto("infoIESS", aporte.toFixed(2));
    mostrarTexto("infoPago", totalPagar.toFixed(2));
    document.getElementById("btnGuardarRol").disabled = false;
}


function buscarRol(cedula) {
    for (let i = 0; i < roles.length; i++) {
        if (roles[i].cedula === cedula) {
            return roles[i];
        }
    }
    return null;
}

function calcularAporteEmpleador(sueldo) {
    return sueldo * 0.1115;
}


function agregarRol(rol) {
    let existente = buscarRol(rol.cedula);
    if (existente == null) {
        roles.push(rol);
        alert("Rol agregado correctamente");
    } else {
        alert("Ya existe un rol con esa cedula");
    }
}


function guardarRol() {

    let cedula = recuperarTextoDiv("infoCedula");
    let nombre = recuperarTextoDiv("infoNombre");
    let sueldo = recuperarFloatDiv("infoSueldo");
    let aporteEmpleado = recuperarFloatDiv("infoIESS");
    let valorAPagar = recuperarFloatDiv("infoPago");

    
    if (!cedula || !nombre || isNaN(sueldo) || isNaN(aporteEmpleado) || isNaN(valorAPagar)) {
        alert("Debes calcular el rol antes de guardarlo.");
        return;
    }

    let aporteEmpleador = calcularAporteEmpleador(sueldo);

    //Crear objeto rol
    let rol = {
        cedula: cedula,
        nombre: nombre,
        sueldo: sueldo,
        valorAPagar: valorAPagar,
        aporteEmpleado: aporteEmpleado,
        aporteEmpleador: aporteEmpleador
    };

    //Agregar al arreglo, evito duplicados
    let existente = buscarRol(cedula);
    if (existente != null) {
        alert("Ya existe un rol registrado con esta cedula.");
        return;
    }

    roles.push(rol);
    alert("ROL GUARDADO EXITOSAMENTE");

    //Deshabilito el boton guardar
    document.getElementById("btnGuardarRol").disabled = true;

    mostrarRoles();
    mostrarTotales();
}


function mostrarRoles() {
    let tabla = "<table border='1'><tr><th>CÉDULA</th><th>NOMBRE</th><th>VALOR A PAGAR</th><th>APORTE EMPLEADO</th><th>APORTE EMPLEADOR</th></tr>";

    for (let i = 0; i < roles.length; i++) {
        let r = roles[i];
        tabla += "<tr><td>" + r.cedula + "</td><td>" + r.nombre + "</td><td>" +
            r.valorAPagar.toFixed(2) + "</td><td>" + r.aporteEmpleado.toFixed(2) +
            "</td><td>" + r.aporteEmpleador.toFixed(2) + "</td></tr>";
    }

    tabla += "</table>";
    document.getElementById("tablaResumen").innerHTML = tabla;
}

function mostrarTotales() {
    let totalEmpleado = 0;
    let totalEmpleador = 0;
    let totalAPagar = 0;

    for (let i = 0; i < roles.length; i++) {
        totalEmpleado += roles[i].aporteEmpleado;
        totalEmpleador += roles[i].aporteEmpleador;
        totalAPagar += roles[i].valorAPagar;
    }

    
    document.getElementById("infoAporteEmpleado").textContent = totalEmpleado.toFixed(2);
    document.getElementById("infoAporteEmpresa").textContent = totalEmpleador.toFixed(2);
    document.getElementById("infoTotalPago").textContent = totalAPagar.toFixed(2);
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
