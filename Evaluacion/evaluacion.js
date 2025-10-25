//arreglos
let productos = [
    {nombre:"Camisa",
        descripcion:"Camisa formal de color blanco ideal para eventos sociales",
        categoria:"Formal",
        precio:29.9,
        stock:5
    },
    {nombre:"Jean",
        descripcion:"Pantalón jean azul, ideal para salidas, versátil con cualquier prenda",
        categoria:"Casual",
        precio:39.9,
        stock:15
    },
    {nombre:"Camiseta",
        descripcion:"Camiseta de la seleción Argentina de Fútbol, ideal para ocasiones de oscio",
        categoria:"Deportivo",
        precio:19.9,
        stock:2
    },
    {nombre:"Bermuda",
        descripcion:"Pantalón corto (altura de las rodillas) de color beige, ideal para reuniones sociales",
        categoria:"Casual",
        precio:29.9,
        stock:12
    },
     {nombre:"Chaqueta",
        descripcion:"Chaqueta formal de color negra, ideal para eventos sociales o cuestiones de trabajo",
        categoria:"Casual",
        precio:49.9,
        stock:3
    },
    {nombre:"Pantaloneta",
        descripcion:"Pantaloneta de color negra ideal para practicar deportes o realizar ejercicio",
        categoria:"Deportivo",
        precio:9.9,
        stock:22
    }
]


agregarProducto=function(){
    let nombre=recuperarTexto("txtNombre");
    let descripcion=recuperarTexto("txtDescripcion");
    let categoria=recuperarTexto("txtCategoria");
    let precio=recuperarFloat("txtPrecio");
    let stock=recuperarInt("txtStock");
    
    let errores="";
    if(nombre===""){
        errores+="El campo es obligatorio.";
    }
    let primeraLetra=nombre.charCodeAt(0);
    if(primeraLetra<=65 || primeraLetra>=90){
        errores+=" La primera letra debe estar en mayúscula."
    }
    for (let i=0;i<nombre.length;i++){
        let name=nombre.charCodeAt(i);
        let tieneNumeros =(name<=48 || name>=57);
        let caracterEspecial =((name<=33 || name>=47)&&(name<=58 || name>=64)&&(name<=91 || name>=96)&&(name<=123 || name>=255));
        let esEspacio = (name === 32);
        if (!tieneNumeros){
            errores+=" El nombre debe contener solo letras."
        }
        if (!caracterEspecial){
            errores+=" El nombre no debe contener caracteres especiales, ej.: (;  : -  _ )."
        }
        if(!esEspacio){
            errores+=" El nombre consta de una sola palabra, no requiere espacios."
        }
    }
mostrarTexto("lblErrorNombre",errores)
    let erroresD="";
    if(descripcion===""){
        erroresD+="El campo es obligatorio.";
    }
    let primeraLetraDescripcion=descripcion.charCodeAt(0);
    if(primeraLetraDescripcion<=65 || primeraLetraDescripcion>=90){
        erroresD+=" La primera letra debe estar en mayúscula."
    }
    for (let i=0;i<descripcion.length;i++){
        let name=descripcion.charCodeAt(i);
        let tieneNumeros =(name<=48 || name>=57)  
        if (!tieneNumeros){
            erroresD+=" La descripción debe contener solo letras."
        }
    }
    mostrarTexto("lblErrorDescripcion",erroresD);
    let erroresC="";
     if(categoria===""){
        erroresC+="El campo es obligatorio.";
    }
    let primeraLetraCategoria=nombre.charCodeAt(0);
    if(primeraLetraCategoria<=65 || primeraLetraCategoria>=90){
        erroresC+=" La primera letra debe estar en mayúscula.";
    }
    for (let i=0;i<categoria.length;i++){
        let name=categoria.charCodeAt(i);
        let tieneNumeros =(name<=48 || name>=57);
        let caracterEspecial =((name<=33 || name>=47)&&(name<=58 || name>=64)&&(name<=91 || name>=96)&&(name<=123 || name>=255));
        let esEspacio = (name === 32);
        if (!tieneNumeros){
            erroresC+=" La Categoría debe contener solo letras."
        }
        if (!caracterEspecial){
            erroresC+=" La Categoría no debe contener caracteres especiales, ej.: (;  : -  _ )."
        }
        if(!esEspacio){
            errores+=" La categoría consta de una sola palabra, no requiere espacios."
        }
    }
mostrarTexto("lblErrorCategoria",erroresC)
let erroresP="";
     if(isNaN(precio)){
        erroresP+="El campo es obligatorio.";
    }
    if(precio<0 || precio>90){
        erroresP+=" Ingrese una cantidad válida, entre 0 y 90 dólares."
    }
mostrarTexto("lblErrorPrecio",erroresP)
let erroresS="";
     if(isNaN(stock)){
        erroresS+="El campo es obligatorio.";
    }
    if(stock<0 || stock>20){
        erroresS+=" Ingrese una cantidad válida, entre 0 y 20 productos."
    }
   if (!Number.isInteger(stock)) {
    erroresS += " El stock es un número entero.";
   }
mostrarTexto("lblErrorStock",erroresS)
let existe = productos.some(p => p.nombre.toLowerCase() === nombre.toLowerCase());
    if (existe) {
        alert(" Error: Este producto ya existe.");
        return;
    } 
    let producto={
        nombre:nombre,
        descripcion:descripcion,
        categoria:categoria,
        precio:precio,
        stock:stock
    };
    productos.push(producto);
    alert(" Producto agregado exitosamente.");
    mostrarProductos();
    limpiarCajas();
    limpiarErrores();
}
function mostrarProductos() {
  let tabla = document.getElementById("tablaProductos");
  tabla.innerHTML = "";
  productos.forEach((p, i) => {
    tabla.innerHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${p.nombre}</td>
        <td>${p.descripcion}</td>
        <td>${p.categoria}</td>
        <td>$${p.precio.toFixed(2)}</td>
        <td>${p.stock}</td>
      </tr>`;
  });
}
function limpiarCajas() {
  ["txtNombre","txtDescripcion","txtCategoria","txtPrecio","txtStock"].forEach(id => {
    document.getElementById(id).value = "";
  });
}
function limpiarErrores() {
  ["lblErrorNombre","lblErrorDescripcion","lblErrorCategoria","lblErrorPrecio","lblErrorStock"]
    .forEach(id => mostrarTexto(id, ""));
}

//   Buscar
function buscarProducto() {
  let nombre = recuperarTexto("txtNombre");
  let producto = productos.find(p => normalizar(p.nombre) === normalizar(nombre));
  if (!producto) {
    alert(" Producto no encontrado");
    return;
  }
  document.getElementById("txtDescripcion").value = producto.descripcion;
  document.getElementById("txtCategoria").value = producto.categoria;
  document.getElementById("txtPrecio").value = producto.precio;
  document.getElementById("txtStock").value = producto.stock;
  alert(" Producto encontrado");
}
//  Modificar
function modificarProducto() {
  let nombre = recuperarTexto("txtNombre");
  let producto = productos.find(p => normalizar(p.nombre) === normalizar(nombre));
  if (!producto) {
    alert(" No se puede modificar, producto no encontrado");
    return;
  }
  producto.descripcion = recuperarTexto("txtDescripcion");
  producto.categoria = recuperarTexto("txtCategoria");
  producto.precio = recuperarFloat("txtPrecio");
  producto.stock = recuperarInt("txtStock");
  alert(" Producto modificado");
  mostrarProductos();
  limpiarCajas();
}
//  Eliminar
function eliminarProducto() {
  let nombre = recuperarTexto("txtNombre");
  let index = productos.findIndex(p => normalizar(p.nombre) === normalizar(nombre));
  if (index === -1) {
    alert(" Producto no encontrado");
    return;
  }
  productos.splice(index, 1);
  alert(" Producto eliminado");
  mostrarProductos();
  limpiarCajas();
}

// Arreglo global para almacenar productos en el carrito
let carrito = [];

// Función para agregar al carrito
function agregarAlCarrito(producto) {
    // Verificamos si ya existe en el carrito
    let existe = carrito.find(item => item.nombre === producto.nombre);

    if (existe) {
        alert(`El producto "${producto.nombre}" ya está en el carrito.`);
    } else {
        carrito.push(producto);
        alert(`✅ Producto "${producto.nombre}" agregado al carrito.`);
        mostrarCarrito();
    }
}

// Función para eliminar del carrito
function eliminarDelCarrito(nombreProducto) {
    let index = carrito.findIndex(item => item.nombre === nombreProducto);

    if (index !== -1) {
        carrito.splice(index, 1);
        alert(`❌ Producto "${nombreProducto}" eliminado del carrito.`);
        mostrarCarrito();
    } else {
        alert(`El producto "${nombreProducto}" no está en el carrito.`);
    }
}

// Función para mostrar el carrito en consola o en HTML
function mostrarCarrito() {
    console.clear();
    console.log("🛍️ Carrito actual:");
    carrito.forEach((p, i) => {
        console.log(`${i + 1}. ${p.nombre} - $${p.precio}`);
    });

    // Si tienes una tabla en HTML, la actualizamos
    let tabla = document.getElementById("tablaCarrito");
    if (tabla) {
        tabla.innerHTML = `
            <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Acción</th>
            </tr>
        `;

        carrito.forEach((p, i) => {
            let fila = `
                <tr>
                    <td>${i + 1}</td>
                    <td>${p.nombre}</td>
                    <td>$${p.precio}</td>
                    <td>
                        <button onclick="eliminarDelCarrito('${p.nombre}')">Eliminar</button>
                    </td>
                </tr>
            `;
            tabla.innerHTML += fila;
        });
    }
}
