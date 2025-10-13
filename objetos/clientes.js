let clientes = [
    { cedula: "123123", nombre: "Juan", edad: 20 },
    { cedula: "222222", nombre: "Mario", edad: 50 },
    { cedula: "333333", nombre: "Pepe", edad: 22 },
];
crearCliente=function(){
    let valorCedula=recuperarTexto("txtCedula");
    let valorNombre=recuperarTexto("txtNombre");
    let valorEdad=recuperarFloat("txtEdad");
    let nuevoCliente={};
    nuevoCliente.cedula=valorCedula;
    nuevoCliente.nombre=valorNombre;
    nuevoCliente.edad=valorEdad;

    agregarCliente(nuevoCliente);
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