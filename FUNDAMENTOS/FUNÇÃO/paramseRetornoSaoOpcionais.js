function area(largura,altura){
    const area = largura * altura
    if(area>20){
        console.log(`Valor acimda do permitido: ${area}m2.`)
    }
    else
    {
        return area
    }
}

console.log(area(2,2))
console.log(area(2))//undefiend * um numero = NaN
console.log(area())
console.log(area(2,3,4,5))//apesar de ter tantos parametros a função só pegara os numeros 2 e 3
console.log(area(5,5))

