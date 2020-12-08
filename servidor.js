const express= require('express');
const html = express();


let usuarios = []
html.get('/usuarios', ( req, res)=>{
    res.send(usuarios);


})

html.post('/usuarios', (req, res)=>{
    req.on('data', (data)=>{
        usuarios.push(JSON.parse(data));
        res.json("Inserido com sucesso")
    })

})

html.listen(2000)