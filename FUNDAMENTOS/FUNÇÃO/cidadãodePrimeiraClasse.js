//Função em JS é First-Class Objetc (Citizens)
//Higher-Order function

//Criar de Forma Literal

function fun1(){}

//Armazernar em um variável
const fun2 = function() {}

//Armazenar em um array
const array = [function(a,b){return a + b},fun1,fun2]
console.log(array[0](2,3))

//Armazenar em um atributo de Objeto
const obj = {}
obj.falar = function(){return 'Opa'}
console.log(obj.falar())

//Passa função como Parametro
function run(fun){
    fun()
}

run(function(){console.log('Executando...')})

//Uma função pode retornar/conter uma função
function Soma(a,b){
    return function (c){
        console.log(a+b+c)
    }
}
Soma(2,3)(4)
const cincoMais = Soma(2,3)
cincoMais(4)