calcularValorTotal = function () {
    let nombreProducto = recuperarTexto("txtProducto");
    let precioProducto = recuperarFloat("txtPrecio");
    let cantidad = recuperarInt("txtCantidad");

    // Validaciones
 if (!esProductoValido(nombreProducto) ||
        !esCantidadValida(cantidad) ||
        !esPrecioValido(precioProducto)) {
        return;
        }

    // 1. Subtotal
    let valorSubtotal = calcularSubtotal(precioProducto, cantidad);
    mostrarTexto("lblSubtotal", valorSubtotal);

    // 2. Descuento
    let valorDescuento = calcularDescuentoporVolumen(valorSubtotal, cantidad);
    mostrarTexto("lblDescuento", valorDescuento);

    // 3. IVA
    let valorIVA = calcularIVA(valorSubtotal, valorDescuento);
    mostrarTexto("lblValorIVA", valorIVA.toFixed(2));

    // 4. Total
    let valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);
    mostrarTexto("lblTotal", valorTotal.toFixed(2));

}

limpiar = function () {
    document.getElementById("txtProducto").value = "";
    document.getElementById("txtPrecio").value = "";
    document.getElementById("txtCantidad").value = "";

    mostrarTexto("lblSubtotal", "0.0");
    mostrarTexto("lblDescuento", "0.0");
    mostrarTexto("lblValorIVA", "0.0");
    mostrarTexto("lblTotal", "0.0");
    mostrarTexto("lblResumen", "");

    mostrarTexto("lblError1", "");
    mostrarTexto("lblError2", "");
    mostrarTexto("lblError3", "");
}
