/**
 * Summary. This function transforms a number into BRL (Reais) currency. 
 * @param {number} price Number to be transformed in price.
 * @returns Returns a price in BRL format.
 */
const numToReais = function(price) {
    return new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(price)
}

export {numToReais}
