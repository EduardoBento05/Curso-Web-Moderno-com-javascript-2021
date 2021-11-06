const escola  = "Cod3r"

console.log(escola.charAt(4))//retornara o caracter com o indice 4
console.log(escola.charAt(5))//retorna nada pos esse caracter é inexistente
console.log(escola.charCodeAt(3))//valor do caracter do incide 3 na tabela ascii
console.log(escola.indexOf('3'))//procura se existe o valor dentro da string e retorna o seu indice

console.log(escola.substring(1))//imprime do indice 1 para frente
console.log(escola.substring(0,3))//vai do indice 0 ao 3 sem incluir o indice 3


console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace(3,'e'))//substitui o numero 3 pela letra e na string

console.log('Ana,Maria,Pedro'.split(','))//gera uma array com 3 elemento independentes separados por virgulas
