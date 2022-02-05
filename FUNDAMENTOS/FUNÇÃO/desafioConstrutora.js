function Pessoa(nome){
    this.nome = nome

    this.Falar = function (){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa("Eduardo")
p1.Falar()