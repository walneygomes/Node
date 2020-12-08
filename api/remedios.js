module.exports = (app, ...elementos)=>{

    let pos=1;
  const obter =   (req, res)=>{
        res.send(elementos );

    }

    const salvar = (req, res) =>{
        //regra de negocio
        if(req.body.nome=="coronavac"){
            res.send("contem propriedade do corona virus chineis")
        }else{
        elementos.push(req.body)
            res.send(" Inserido "+pos);
            pos++;
        }
    }
    
    
    app.get('/remedio', obter)
    app.post('/remedio', salvar)


    return {obter,salvar};
}