calcularValorDescuento=function(monto,porcentajeDescuento){
    let valorDescuento;
    valorDescuento=(monto*porcentajeDescuento)/100;
    return valorDescuento;
}
calcularIVA=function(subtotal,valorDescuento){
    let valorIVA;
    valorIVA=((subtotal-valorDescuento)*12)/100;
    return valorIVA;
}
calcularSubtotal=function(precio,cantidad){
    let subtotal;
    subtotal=precio*cantidad;
    return subtotal;
}
calcularTotal=function(subtotal,valorDescuento,valorIVA){
    let total;
    total=(subtotal-valorDescuento)+valorIVA;
    return total;
}