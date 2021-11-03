const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1,peso2)

console.log(Number.isInteger(peso1))//pergunta se é um inteiro
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.75
const avaliacao2 = 5.64

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total/(peso2+peso1)

console.log(media.toFixed(2))//deixa uma certa quantidade de numeros depois da virgula
console.log(media.toString(2))//transforma o numero em binario
console.log(typeof media)
console.log(typeof Number)

const a = 3837
console.log(a.toString(2))

console.log(parseInt("111011111101",2))
console.log(parseInt("1101",2))

const b = 25
console.log(b.toString(2))

