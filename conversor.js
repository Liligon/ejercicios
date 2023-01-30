// let montoTotalDolares = Number;

const dolar = 745;

function conversion(montoTotalDolares) {
    if (isNaN(montoTotalDolares)) {
        console.log(`${montoTotalDolares} - Debe ingresar valor numerico`);
    } else {
        let resultado = Math.round(montoTotalDolares * dolar);
        console.log(`$ ${resultado}`);
    }
};

conversion(1000);
conversion("estudiante");
conversion("2");
