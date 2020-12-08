function salvar(req, res){
    res.send("Usuario SALVO")
}


function obter(req, res){
    res.send("obter")
}

module.exports = {salvar, obter}