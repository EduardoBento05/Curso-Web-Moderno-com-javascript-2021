function tratarErroLancar(erro){
   // throw new Error('Erro de Processamento...')
   throw{
       nome: erro.name,
       msg: erro.message,
       date: new Date
   }
}



function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase()+ '!!!!')
    } catch(e){
        tratarErroLancar(e)
    } finally{
        console.log('Final')
    }
    
}

const obj  = {nome: 'Eduardo'}

imprimirNomeGritado(obj)