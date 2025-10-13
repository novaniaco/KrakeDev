let clientes = [
    { cedula: "123123", nombre: "Juan", edad: 20 },
    { cedula: "222222", nombre: "Mario", edad: 50 },
    { cedula: "333333", nombre: "Pepe", edad: 22 },
];
crearCliente=function(){
    let valorCedula=recuperarTexto("txtCedula");
    let valorNombre=recuperarTexto("txtNombre");
    let valorEdad=recuperarFloat("txtEdad");
    // Validaciones
    if (valorCedula === "" || valorNombre === "" || document.getElementById("txtEdad").value.trim() === "") {
        alert("Todos los campos son obligatorios.");
        return;
    }

    if (!validarCedula(valorCedula)) {
        alert("La cedula debe tener al menos 10 digitos");
        return;
    }
    if (!validarNombre(valorNombre)) {
        alert("El nombre debe tener entre 3 y 50 caracteres.");
        return;
    }
    if (!validarEdad(valorEdad)) {
        alert("La edad debe ser un numero entero mayor o igual a 18 y menor o igual a 100.");
        return;
    }
    let nuevoCliente={};
    nuevoCliente.cedula=valorCedula;
    nuevoCliente.nombre=valorNombre;
    nuevoCliente.edad=valorEdad;

    agregarCliente(nuevoCliente);
    limpiarCampos();
}
agregarCliente=function(cliente){
    let resultado;
    resultado=buscarCliente(cliente.cedula);
    if(resultado==null){
        clientes.push(cliente)
        alert("Cliente agregado");
        mostrarClientes();

    }else{
        alert("YA EXISTE EL CLIENTE CON LA CEDULA: "+cliente.cedula);
    }
    
}
buscarCliente=function(cedula){
    let elementoCliente;
    let clienteEncontrado=null;
    for(let i=0;i<clientes.length;i++){
        elementoCliente=clientes[i];
        if (elementoCliente.cedula == cedula){
            clienteEncontrado=elementoCliente;
            break;
        }
    }
    return clienteEncontrado;
}
mostrarClientes = function () {
    let cmpTabla=document.getElementById("tablaClientes");
    let contenidoTabla = "<table><tr>"+
    "<th>CEDULA</th>"+
    "<th>NOMBRE</th>"+
    "<th>EDAD</th>"+
    
    "</tr>";
    for (let i = 0; i < clientes.length; i++) {
        elementoCliente = clientes[i];
        contenidoTabla += "<tr><td>" + elementoCliente.cedula + "</td>"
            + "<td>" + elementoCliente.nombre + "</td>"
            + "<td>" + elementoCliente.edad + "</td>"
            + "</tr>"
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;
}
//Validaciones
validarCedula = function(cedula) {
    return /^[0-9]{10}$/.test(cedula);
};

validarNombre = function(nombre) {
    let trimmed = nombre.trim();
    return trimmed.length >= 3 && trimmed.length <= 50;
};

validarEdad = function(edad) {
    return Number.isInteger(edad) && edad >= 18 && edad <= 100;
};

limpiarCampos = function() {
    document.getElementById("txtCedula").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtEdad").value = "";
};