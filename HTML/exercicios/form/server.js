const express = require('express')
const app = express()
const bodyParser = require('body-parser')//Quando Acessar o body parser terá todas os acessos dos dados que foram submetidos

app.use(bodyParser.urlencoded({extended: true}))//Interpreta o Objeto e o cria ja preenchido em conjunto com o html
//A linha 5 que faz Aparecer o Nome:
app.post('/usuarios', (req,resp) =>{
    console.log(req.body)
    resp.send('Parabéns.Usuário Incluido!')
})

app.post('/usuarios/:id', (req,resp) =>{
    console.log(req.params.id)
    console.log(req.body)
    resp.send('Parabéns.Usuário Alterado!')
})

app.listen(3003)