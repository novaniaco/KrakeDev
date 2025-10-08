let notas=[];

agregarElementos=function(){

    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}
generarTabla=function(){
    let contenidoTabla="";
    let cmpTabla=document.getElementById("divTabla");
    contenidoTabla+="<table><tr><td>UNO</td></tr>"+
    "<table><tr><td>DOS</td></tr></table>";
    cmpTabla.innerHTML=contenidoTabla;

}
mostrarNotas=function(){
    let cmpTabla=document.getElementById("divTabla");
    let contenidoTabla="<table><tr><th>NOTA</th></tr>";
    for(let i=0;i<notas.length;i++){
        miNota=notas[i];
        contenidoTabla+="<tr><td>"
        contenidoTabla+=miNota;
        contenidoTabla+="</tr></td>"
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;
}

recorrerArreglo=function(){
    let notaR;
    for(let indice=0;indice<notas.length;indice++){
        notaR=notas[indice];
        console.log(notaR);
    }
}

probarAgregar=function(){
    let notaRecuperada; 
    notaRecuperada=recuperarInt("txtNota");
    agregarNota(notaRecuperada);
}

agregarNota=function(nota){
    notas.push(nota);
    mostrarNotas();
}
calcularPromedio=function(){
    let sumaNotas=0;
    let promedio;
    for (let i = 0; i < notas.length; i++) {
        sumaNotas = sumaNotas + notas[i];
    }
    promedio = sumaNotas / notas.length;
    return promedio;
}
ejecutarPromedio = function() {
    let resultado = calcularPromedio();
    mostrarTexto("lblPromedio", "El promedio es: " + resultado);
}