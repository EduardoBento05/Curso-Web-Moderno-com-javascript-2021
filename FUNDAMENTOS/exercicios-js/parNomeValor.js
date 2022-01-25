//par nome/valor

const saudacao = 'Salve' //contexto léxico 1

function exec(){
    const saudacao  = 'Olá'//contexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome:'Eduardo',
    idade: 26,
    peso:68,
    endereco:{
        Rua:'Helena Dal Pozzo Bertin',
        numero:424
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)