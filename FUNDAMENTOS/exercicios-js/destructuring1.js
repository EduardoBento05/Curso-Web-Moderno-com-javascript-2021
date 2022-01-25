// novo recurso do ES2015

const pessoa = {
    nome:'Eduardo',
    idade:26,
    endereco:{
        logradouro: 'Rua ABC',
        numero:1000
    }
}

const {nome,idade} = pessoa

console.log(nome,idade)

const {nome: n , idade: i } = pessoa
console.log(n,i)

const{sobrenome,risada = true} = pessoa
console.log(sobrenome,risada)

const{endereco:{logradouro,numero,cep}} = pessoa
console.log(logradouro,numero,cep)

//const{conta:{ag , num}} = pessoa
//console.log(ag,num)