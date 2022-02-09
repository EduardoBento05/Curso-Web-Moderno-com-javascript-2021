console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function(){
    return this.split('').reverse().join('')//reverte todo o testo
}
console.log('Eduardo de Almeida Bento Dias'.reverse())

Array.prototype.first = function(){
    return this[0] //retornta o primeiro elemento da string
}
console.log([1,2,3,4,5].first())
console.log(['a','b','c'].first())

String.prototype.toString = function (){
    return 'Fodeu'
}
console.log('Eduardo'.reverse())