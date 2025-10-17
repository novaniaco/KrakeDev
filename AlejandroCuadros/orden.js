//Arreglos de personas
let personas = [
    //incluimos en su interior los datos de las personas
    {nombre:"Marcos",edad:18},
    {nombre:"Roberto",edad:15},
    {nombre:"Kate",edad:25},
    {nombre:"Diana",edad:12},
    {nombre:"Benja",edad:5},
]
agregarPersona=function(){//función que no recibe parámetros
    let nombre=recuperarTexto("txtNombre");//recuperamos los valores de las cajas de texto del html
    let edad=recuperarInt("txtEdad");//Que se recupere como entero
    let=valido=true; //mediante esta variable podre saber cuando se debe mostrar el error
    limpiarErrores();//borra los mensajes previos de error
    //agregamos las validaciones para que solo en caso de que se cumpla avance (if)
    if(nombre.length<3){ //el atributo length me permite saber la longitud de la variable o lo recuperado
        mostrarTexto("lblErrorNombre","El nombre debe contener mas de 3 caracteres");//asignamos el id a reemplazar con la información que queremos mostrar
        valido=false; //cambio a false para que se muestre el error
    }
    //validamos la edad
    if(isNaN(edad)||edad<0||edad>100){//isNaN me asegura que sea un número, y con || me aseguro de que pase si se cumplen las 3 condiciones es como decir o
        mostrarTexto("lblErrorEdad","La edad debe ser un valor entero y estar en el rango de 0 a 100");
        valido=false;
    }
    if(!valido) return; // si valido es diferente, es decir true, continua a lo siguiente
    //procedemos a crear el nuevo objeto porque paso todas las condiciones
    let nuevaPersona = {nombre: nombre, edad: edad}; //asignamos los valores recuperados de la caja de texto al objeto
    //agregamos el objeto al arreglo inicial
    personas.push(nuevaPersona); //el push me permite agregar el objeto o un elemento al final de un arreglo
    alert("PERSONA AGREGADA CORRECTAMENTE");
    mostrarPersonas();//permite que la tabla se vaya actualizando con los datos ingresados
    limpiarCajas();
}
//PARTE 2
//Creamos la función mostrarPersonas para que salga la tabla de los mismos en el id del div y funcione a traves del evento onload
mostrarPersonas=function(){
let tabla = "<table border='1'><tr><th>EDAD</th><th>NOMBRE</th></tr>";

    for(let i = 0; i < personas.length; i++){
        tabla += `<tr>
        <td>${personas[i].edad}</td>
        <td>${personas[i].nombre}</td>
        </tr>`;
    }

    tabla += "</table>"; // cerrar tabla fuera del for

    document.getElementById("divTabla").innerHTML = tabla;
}

//PARTE 3
//Algoritmo para encontrar el mayor
function encontrarMayor() {
  let personaMayor = personas[0]; // empezamos con la primera
  for (let i = 1; i < personas.length; i++) {
    let elementoPersona = personas[i];
    console.log("Comparando con:", elementoPersona.nombre, elementoPersona.edad);

    if (elementoPersona.edad > personaMayor.edad) {
      personaMayor = elementoPersona;
    }
  }
  return personaMayor;
}

function determinarMayor() {
  let mayor = encontrarMayor();
  document.getElementById("resultado").innerHTML =
    `<b>La persona de mayor edad es:</b> ${mayor.nombre}, ${mayor.edad} años.`;
}
//Algoritmo para encontrar el menor
function encontrarMenor() {
  let personaMenor = personas[0];
  for (let i = 1; i < personas.length; i++) {
    let elementoPersona = personas[i];
    if (elementoPersona.edad < personaMenor.edad) {
      personaMenor = elementoPersona;
    }
  }
  return personaMenor;
}

function determinarMenor() {
  let menor = encontrarMenor();
  document.getElementById("resultado").innerHTML =
    `<b>La persona de menor edad es:</b> ${menor.nombre}, ${menor.edad} años.`;
}

