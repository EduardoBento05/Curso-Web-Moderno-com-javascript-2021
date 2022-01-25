function rand({min = 0,max = 1000}){
    const valor = Math.random() * (max-min) +min
    return Math.floor(valor)
}
console.log(rand({min:40 , max:50}))

const obj = {max:100,min:200}
console.log(rand(obj))

