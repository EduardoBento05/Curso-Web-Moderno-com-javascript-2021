let isAtivo = false
console.log(isAtivo)


isAtivo = true
console.log(isAtivo)

isAtivo = 1

console.log(!!isAtivo)// 1 representa o resultado verdadeiro
console.log(!isAtivo)

console.log('Os verdadeiros...')
console.log(!!3)//duplanegação para forçar algo a ser verdadeiro
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))


let nome = 'Lucas'

console.log(nome || 'Desconhecido')