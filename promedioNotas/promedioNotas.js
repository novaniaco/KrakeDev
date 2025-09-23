calcularPromedioNotas=function(){
    //Recuperar valores como Float y guardar en una variable
   let n1Float = recuperarFloat("txtn1");
   let n2Float = recuperarFloat("txtn2");
   let n3Float = recuperarFloat("txtn3");
    //Invocar a la función calcularPromedio, pasándole como parametro las 3 notas guardar el retorno en una variable llamada promedio
    let promedio=calcularPromedio(n1Float,n2Float,n3Float);
    let resultadoFormateado=promedio.toFixed(2);

    mostrarTexto("lblPromedio",resultadoFormateado);

}