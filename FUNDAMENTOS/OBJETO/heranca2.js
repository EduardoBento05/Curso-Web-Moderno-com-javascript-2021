//cadeia de protótipos(prototype chains)
Object.prototype.attr0 = '0'
const avo = {attr1: "A"}
const mae = {__proto__:avo,attr2:"B"}
const filho = {__proto__:mae,att3:"C"}
console.log(filho.attr0,filho.attr1,filho.attr2,filho.att3)//procura o atributo nos objetos que esta entrelaçado

const carro = {
    velAtual : 0,
    velMax : 200,
    acelerarMais(delta){
        if(this.velAtual + delta  <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}


const ferrari = {
    modelo :"F40",
    velMax:324//sombreamento(shadowing)

}

const volvo = {
    modelo:"V40",
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari,carro)//estabelezar a herançã de ferrari com carro
Object.setPrototypeOf(volvo,carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())