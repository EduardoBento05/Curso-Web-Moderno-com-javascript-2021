const notas = [6.6,8.6,9.7]

for(i in notas){
    console.log(i,notas[i])
}

const pessoa = {
    nome: 'Eduardo',
    sobrenome : 'Dias',
    idade:26,
    peso:68
}

for(atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}