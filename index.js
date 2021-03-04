const express = require('express');
const app = express();

const listaUsuarios = [
    'Ivens',
    'Nykolle',
    'Natalia',
    'João'
]

//há 65536 portas, é importante estar disponível
//ver todas as portas sendo usadas netstat -o -n -a
//necessário dar CRTL + C para sair, pois fica infinitando tentando...
//configurar gitignore: criar arquivo .gitignore e depois incluir ./node_modules ou só node_modules
//* .js ignora tudo  ou teste*.js começa com teste e termina com js
//package-lock.json/ verifica todas as dependências - útil mais para devOps para compilar com cliente
//git restore ou git reset limpa o que foi adicionado
//git rm --cached <file>...

//Query Params
//Ex: localhost:3000/usuarios
app.get('/usuarios', (req, res) => {
    const { nome } = req.query;
    let listaRetorno = listaUsuarios.filter( i => i.includes(nome || ''));
    //console.log(req.query);
    return res.json(listaRetorno);
    //return res.json(listaUsuarios);
})

//Route paramns Ex: ecommerce.com.br/produtos/1/detalhes (1,2,3 e etc)
app.get('/:usuario', (req, res)=>{ //dois ponto e um nome é o route paramns
    const { usuario } = req.params;
    //console.log(req.params); //joga dentro do atributo a requisição
    return res.send(`Hello World ${usuario}`); //return é boa prática
});

/* app.get('/usuarios/:id', (req, res)=> {
    return res.send()
}) */

//npm install -g nodemon

app.listen(3000, () => {
    console.log('Servidor Rodando OK na porta 3000');
});