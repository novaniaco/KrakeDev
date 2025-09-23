let puntos=0;
let lanzamientos=5;
jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
   mostrarCara(resultado);
    modificarPuntos(resultado);
   
    modificarLanzamientos();
    //Si el jugador obtiene mas de 20 puntos 
    // mostrar en pantalla un mensaje GANASTE!
     if(puntos>20){
    cambiarTexto("lblMensaje","GANASTE!!");
    }
} 

modificarPuntos=function(numero){
puntos=puntos+numero;
cambiarTexto("lblPuntos",puntos);
 
}

//no recibe parámetros
//resta 1 a la variable lanzamientos, guarda el resultado en la misma variable
//y muestra en pantalla
modificarLanzamientos=function(){
 lanzamientos=lanzamientos-1;
cambiarTexto("lblLanzamientos",lanzamientos);
//si lanzamientos llega a 0 
// Mostrar en pantalla el mensaje Game Over
//invoca a limpiar
if(lanzamientos==0){
        cambiarTexto("lblMensaje","GAME OVER");
    } else if (lanzamientos<0){
        limpiar();
    }
    }
limpiar=function(){
    //colocar puntaje en 0 y lanzamientos en 5
    //en las variables y en pantalla
    //quitar la imagen src""
    puntos=0;
    lanzamientos=5;
    cambiarImagen("imgDado","");
    cambiarTexto("lblPuntos", puntos);
    cambiarTexto("lblLanzamientos", lanzamientos);
    cambiarTexto("lblMensaje","");
}

//función mostrar cara, recibe el úmero que quiere mostrar
//muestra la imagen correspondiente al numero que recibe
//no retorna nada
mostrarCara=function(numero){
if(numero == 1){ //con == se compara, mientras que con = se asigna
    cambiarImagen("imgDado","dados1.png");
}else if(numero == 2){
    cambiarImagen("imgDado","dados2.png");
}else if(numero == 3){
    cambiarImagen("imgDado","dados3.png");
}else if(numero == 4){
    cambiarImagen("imgDado","dados4.png");
}else if(numero == 5){
    cambiarImagen("imgDado","dados5.png");
}else if(numero == 6){
    cambiarImagen("imgDado","dados6.png");
}
}
lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}