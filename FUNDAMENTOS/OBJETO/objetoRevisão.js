//Coleção dinâmica de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira'
produto ['marca do produto'] = 'generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo:'A4',
    valor:89000,
    proprietario:{
        nome:'Eduardo',
        idade: 26,
        endereco:{
            logradouro: 'Rua ABC',
            numero:424
        }
    },
    condutores:[{
        nome: 'Lucas',
        idade: 29
    },{
        nome: 'Lais',
        idade: 23
    }],
    calcularValorSeguro: function(){
        //...
    }
}

carro.proprietario.endereco.numero = 2030
carro['proprietario']['endereco']['logradouro'] = 'Av fodase'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
