const express = require('express');
const app = express();


app.get('/usuarios', (req, res, next)=>{
    res.send("Ola, usuario");
    console.log("ANTES")

    next()


})

app.get('/usuario/relatorio', (req, res)=>{
    res.send(req.query.completo + req.query.ano )

})
app.get('/usuario/:id', (req, res)=>{

    res.send(  req.params.id );

})

 let usuarios= [];
app.post('/corpo', (req, res)=>{
    req.on('data', function(data){
        usuarios.push(JSON.parse(data))
        res.json(usuarios);
    })
    

})

app.get('/corpo',(req,res)=>{
    res.send(usuarios)
})

app.get('/corpo/:id',(req,res)=>{
    res.send(usuarios[req.params.id-1].nome)
})

app.get('/usuarios', (req, res, next)=>{
   console.log("EM CURSO")
 


})
//receber parametros


app.listen(3001, ()=>{
    console.log("Rodando")


});