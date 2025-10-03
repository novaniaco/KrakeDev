mostrarNumeros=function(){
    console.log("antes del for");
    for(let i=0;i<4;i++){
        console.log(i);
    }

    console.log("Después del for");
}

mostrarNumeros2=function(){
    console.log("Antes del for");
    for(let indice=1;indice<=5;indice++){
        console.log(indice);
    }
    console.log("Después del for")
}
mostrarPares=function(){
    for(let x=2;x<=10;x+=2){
        console.log(x);
    }
    console.log("Depues del for");
}
mostrarInverso=function(){
    console.log("Antes del for");
    for(let i=10;i>0;i--){
        console.log(i);
    }
    console.log("Despues del for");
}
hackearNasaPelis=function(){
    //hackeando nasa 0% ... 100%
    for(let porcentaje=0;porcentaje<=100;porcentaje+=10){
        console.log("Hackeando nasa "+porcentaje+"%");
    }
    console.log("LA NASA HA SIDO HACKEADA XD");
}
mostrarImpares=function(){
    console.log("Antes del For");
    for(let x=1;x<=21;x+=2){
        console.log(x);
    }
    console.log("Depues del for");
}