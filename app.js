const sum = (a,b) => {
    return a + b
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

let oneEuroIs = {
    "JPY": 156.5, 
    "USD": 1.07, 
    "GBP": 0.87
};

// Función de Dólar a Yen
const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a euros
    let valueInEuro = valueInDollar / 1.07;
    // Convertimos de euro a yen
    let valueInYen = valueInEuro * 156.5;
    return valueInYen;
};

// Función de Yen a Libra (Pound)
const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a euros
    let valueInEuro = valueInYen / 156.5;
    // Convertimos de euro a libra
    let valueInPound = valueInEuro * 0.87;
    return valueInPound;
};

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen,fromYenToPound }

