function Aula(nome,videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bemvindo',445)
const aula2 = new Aula('Até logo',663)
console.log(aula1,aula2)

//simulando new

function novo(f,...params){
        const  Obj = {}
        Obj.__proto__ = f.prototype
        f.apply(Obj,params)
        return Obj
}

const aula3 = novo(Aula,'Bem vindo',442)
const aula4 = novo(Aula,'Até mais',234)