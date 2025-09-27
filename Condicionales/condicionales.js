calcularTasaInteres=function(ingresoAnual){
    let tasaInteres;
    ingresoAnual = recuperarFloat("txtIngresoAnual");
    if(ingresoAnual<300000){
        tasaInteres=16;
    } else if (ingresoAnual>=300000 && ingresoAnual<500000){
        tasaInteres=15;
    } else if (ingresoAnual>=500000 && ingresoAnual<1000000){
        tasaInteres=14;
    } else if (ingresoAnual>=1000000 && ingresoAnual<2000000){
        tasaInteres=13;
    } else if (ingresoAnual>=2000000){
        tasaInteres=12;
    }
    return "El valor de su tasa de interés es de el "+tasaInteres+"%";
}
calcularCapacidaddePago=function(edad,ingresos,egresos){
    let total;
    let valordeCuenta;
    edad=recuperarInt("txtEdad");
    ingresos=recuperarFloat("txtIngresos");
    egresos=recuperarFloat("txtEgresos");
    total=ingresos-egresos;
    if(edad>50){
        valordeCuenta=(total*30)/100;
    } else{
        valordeCuenta=(total*40)/100;
    }
    return "El valor de la cuota que puede pagar mensualmente es de "+valordeCuenta;
}
calcularDescuento=function(precio,cantidad){
    let descuento;
    let valoraPagar;
    precio=recuperarFloat("txtPrecio");
    cantidad=recuperarInt("txtCantidad");
    if(cantidad<3){
        valoraPagar=precio*cantidad;
    } else if(cantidad>=3 && cantidad<=5){
        descuento=((precio*cantidad)*2)/100;
        valoraPagar=(precio*cantidad)-descuento;
    } else if(cantidad>=6 && cantidad<=11){
        descuento=((precio*cantidad)*3)/100;
        valoraPagar=(precio*cantidad)-descuento;
    } else if(cantidad>=12){
        descuento=((precio*cantidad)*4)/100;
        valoraPagar=(precio*cantidad)-descuento;
    } 
    return "El valor a pagar luego del descuento es de "+valoraPagar;
}
determinarColesterolLDL=function(nivelColesterol,ColesterolHDL,trigliceridos){
    let ColesterolLDL;
    nivelColesterol=recuperarFloat("txtNivelColesterol");
    ColesterolHDL=recuperarFloat("txtColesterolHDL");
    trigliceridos=recuperarFloat("txtTrigliceridos");
    if(trigliceridos<400){
        ColesterolLDL=nivelColesterol-ColesterolHDL-(trigliceridos/5);
        return "Su nivel de Colesterol LDL (Colesterol Malo) es "+ColesterolLDL;
    } else{
        mostrarTexto("lblMensaje","No podemos calcular dicha proporción. Acuda a un laboratorio para mayor exactitud.")
    }
}
validarClave=function(clave){
    let tamanio =clave.length;
    clave=recuperarTexto("txtClave");
    if(tamanio>=8 && tamanio<=16){
        return true;
    } else{
        return false;
    }
}
esMayuscula=function(caracter){
    caracter=recuperarTexto("txtCaracter");
    let codigoCaracter=caracter.charCodeAt(0);
if(codigoCaracter>=65 && codigoCaracter<=90){
    return true;
} else{
    return false;
}
}
esMinuscula=function(caracter){
    caracter=recuperarTexto("txtCaracter");
    let codigoCaracter=caracter.charCodeAt(0);
if(codigoCaracter>=97 && codigoCaracter<=122 || codigoCaracter>=160 && codigoCaracter<=163){
    return true;
} else{
    return false;
}
}
esDigito=function(caracter){
    caracter=recuperarTexto("txtCaracter");
    let codigoCaracter=caracter.charCodeAt(0);
if(codigoCaracter>=48 && codigoCaracter<=57){
    return true;
} else{
    return false;
}
}
darPermiso=function(notaMatematica,notaFisica,notaGeometria){
    notaMatematica=recuperarFloat("txtNotaMatematica");
    notaFisica=recuperarFloat("txtNotaFisica");
    notaGeometria=recuperarFloat("txtNotaGeometria");
    if(notaMatematica>90 || notaFisica>90 || notaGeometria>90){
        return true;
    } else{
        return false;
    }
}
otorgarPermiso=function(notaMatematica,notaFisica,notaGeometria){
    notaMatematica=recuperarFloat("txtNotaMatematica");
    notaFisica=recuperarFloat("txtNotaFisica");
    notaGeometria=recuperarFloat("txtNotaGeometria");
    if(notaMatematica>90 || notaFisica>90 && notaGeometria>80){
        return true;
    } else{
        return false;
    }
}
dejarSalir=function(notaMatematica,notaFisica,notaGeometria){
    notaMatematica=recuperarFloat("txtNotaMatematica");
    notaFisica=recuperarFloat("txtNotaFisica");
    notaGeometria=recuperarFloat("txtNotaGeometria");
    if(notaMatematica>90 || notaFisica>90 || notaGeometria>90 && notaFisica>notaMatematica){
        return true;
    } else{
        return false;
    }
}