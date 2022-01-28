// const precio = 120;
// const descuento = 18;


// const precioDescuento = 100 - descuento;

// const precioFinal = (precio * precioDescuento) / 100;

// console.log({
//     precio,
//     descuento,
//     precioDescuento,
//     precioFinal
// });

function calcularDescuento(precio, descuento){



    const precioDescuento = 100 - descuento;
    const precioFinal = (precio * precioDescuento) / 100;

    return precioFinal;
}