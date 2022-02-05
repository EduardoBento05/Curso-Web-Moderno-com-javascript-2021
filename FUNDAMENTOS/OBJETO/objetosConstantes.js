const pessoa = {nome: 'Eduardo'}
pessoa.nome  = 'Lucas'
console.log(pessoa)

//pessoa = {nome:'Lais'}

Object.freeze(pessoa)//Objeto constante que não pode ser mudado

pessoa.nome = 'Lais'
console.log(pessoa.nome)
