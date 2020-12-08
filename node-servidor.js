const express=  require('express');
const html = express();
const body= require('body-parser');
const usuario =  require('./api/usuario')
html.post('/usuario', usuario.salvar)
html.use(body.text());//intepreta texto
html.use(body.json());// intepreta json



const usuariosApi =  require('./api/remedios');
usuariosApi(html)

function porta(port, text){
html.listen(port,console.log(text));
}
porta(2000, "ligada")