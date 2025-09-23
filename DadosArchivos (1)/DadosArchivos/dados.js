jugar=function(){
    let aleatorio;
    aleatorio=lanzarDado();
    cambiarTexto("lblNumero",aleatorio);
    if(aleatorio>3){
        cambiarTexto("txtResultado"," ES MAYOR A 3 ");
        cambiarTexto("txtResultado2"," GANASTE ");
    }else{
        cambiarTexto("txtResultado"," ES MENOR A 3 ");
        cambiarTexto("txtResultado2"," PERDISTE ");
    }
}
//Crear una función llamada lanzarDado
//No recibe parámetros
//Retorna un número aleatorio entre 1 y 6
lanzarDado=function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio=Math.random();  //entre 0 y 1
    numeroMultiplicado=aleatorio*6;
    numeroEntero=parseInt(numeroMultiplicado); //entre 0 y 5
    valorDado=numeroEntero+1; //entre 1 y 6
    return valorDado;
}   