calcularPromedioNotas=function(){
   let n1Float = recuperarFloat("txtn1");
   let n2Float = recuperarFloat("txtn2");
   let n3Float = recuperarFloat("txtn3");
    let promedio=calcularPromedio(n1Float,n2Float,n3Float);
    let resultadoFormateado=promedio.toFixed(2);

    mostrarTexto("lblPromedio",resultadoFormateado);
    if(resultadoFormateado>7){
        mostrarTexto("lblMensaje","APROBADO");
        mostrarImagen("gift","./gifts/exito.gif");
    }else{
        mostrarTexto("lblMensaje","REPROBADO");
        mostrarImagen("gift","./gifts/fracaso.gif");   
    }
}