const nome = "Eduardo"
const concatenacao = 'Olá ' + nome + '!'

console.log(concatenacao)

const template = `
        Olá
        ${nome}!`
console.log(template)

//expressões...

console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase()//transforma as letras em letras maiusculas
console.log(`Eii.... ${up('cuidado')}!`)