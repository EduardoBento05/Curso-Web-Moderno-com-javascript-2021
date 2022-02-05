function Carros(velocidadeMax = 200 , delta = 5){
    //atributo privado -> atributo que pertence só no escopo dessa função
    let velocidadeAtual = 0 

    //metodo publico
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMax){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMax
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const ferrari = new Carros 
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

const uno  = new Carros(350,20)
uno.acelerar()
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual())