//Closure é o escopo criado quand uma função é declarada
//esse escopo pemite a função acessar e manipular variáveis externas a função

//Contexto léxico em ação

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro (){
        return x 
    }
    return dentro 
}

const minhaFuncao = fora ()
console.log(minhaFuncao())