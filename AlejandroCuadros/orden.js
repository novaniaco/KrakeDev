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
    recuperarTexto("txtNombre");//recuperamos los valores de las cajas de texto del html
    recuperarTexto("txtEdad");

    let=valido=true; //mediante esta variable podre saber cuando se debe mostrar el error
    //agregamos las validaciones para que solo en caso de que se cumpla avance (if)
    if(nombre.length<3){//el atributo length me permite saber la lingitud de la variable o lo recuperado
        mostrarTexto("lblErrorNombre","El nombre debe contener mas de 3 caracteres");//asignamos el id a reemplazar con la información que queremos mostrar
        valido=false; //cambio a false para que se muestre el error
    }
    //validamos la edad
    if(isNaN(edad)||edad<0||edad>100){//isNaN me asegura que sea un número, y con || me aseguro de que pase si se cumplen las 3 condiciones es como decir o
        mostrarTexto("lblErrorEdad","La edad debe ser un valor entero y estar en el rango de 0 a 100");
        válido=false;
    }
    if(!valido) return; // si valido es diferente, es decir true, continua a lo siguiente
    //procedemos a crear el nuevo objeto porque paso todas las condiciones
    let nuevaPersona = {nombre: nombre, edad: edad}; //asignamos los valores recuperados de la caja de texto al objeto
    //agregamos el objeto al arreglo inicial
    personas.push(nuevaPersona); //el push me permite agregar el objeto o un elemento al final de un arreglo
    alert("PERSONA AGREGADA CORRECTAMENTE");
}


