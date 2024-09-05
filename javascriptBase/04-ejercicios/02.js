//el precio del producto mas impuestos

function precioCompleto(precio, impuesto){
    return precio + (precio * impuesto / 100);
}

let resultado = precioCompleto(19, 13);
console.log(resultado);