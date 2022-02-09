const nums = [1, 2, 3, 4, 5]

// For com propósito
let resultado = nums.map(function(e) {
    return e * 2 //dobra os elementos do array original e guarda em um novo array
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)

/**Map serve para mapear elementos de um array para outro */