const a = 1
const b = 2
const c = 3

const obj1 = {a:a,b:b,c:c}
const obj2 = {a,b,c}
console.log(obj1,obj2)

const nomeA = 'nota'
const valorA= 5.67

const obj3 = {}
obj3[nomeA] = valorA
console.log(obj3)

const obj4 = {[nomeA]:valorA}
console.log(obj4)

const obj5 = {
    funcao1: function(){
        //..
    },
    funcao2 (){
        //..
    }
}
console.log(obj5)