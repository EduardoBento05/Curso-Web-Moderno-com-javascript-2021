//armazenando uma função em uma variável
const imprimirSoma = function (a , b){
    console.log(a+b)
}

imprimirSoma(2,3)

//armazenando um função arrow em uma variável
const soma = (a,b) => {
    return a + b
}

console.log(soma(3,3))

//retorn implícito
const subtracao  = (a,b) => a - b 
console.log(subtracao(2,3))


const imprimir2 = a => console.log(a)
imprimir2("Legall!!!!")