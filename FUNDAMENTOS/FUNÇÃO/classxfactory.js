class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Eduardo')
p1.falar()

const criarPessoa = nome =>{
    return{
        falar1: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Lucas')
p2.falar1()