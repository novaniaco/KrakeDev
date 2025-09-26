calcularPromedioNotas=function(){
   let n1Float = recuperarFloat("txtn1");
   let n2Float = recuperarFloat("txtn2");
   let n3Float = recuperarFloat("txtn3");
    let promedio=calcularPromedio(n1Float,n2Float,n3Float);
    let resultadoFormateado=promedio.toFixed(2);

    mostrarTexto("lblPromedio",resultadoFormateado);

    if(resultadoFormateado<5 && resultadoFormateado>0){
        mostrarTexto("lblMensaje","REPROBADO");
        mostrarImagen("gift","./gifts/reprobado.gif");
    }else if(resultadoFormateado>=5 && resultadoFormateado<=8){
         mostrarTexto("lblMensaje","BUEN TRABAJO");
        mostrarImagen("gift","./gifts/buenTrabajo.gif");
    }else if(resultadoFormateado>8 && resultadoFormateado<=10){
         mostrarTexto("lblMensaje","EXCELENTE");
        mostrarImagen("gift","./gifts/excelente.gif");
    }else{
        mostrarTexto("lblMensaje","Los datos ingresados son Incorrectos!!");
        mostrarImagen("gift","");   
    }
}
