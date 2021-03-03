const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Servidor Rodando OK na porta 3000')
});
//há 65536 portas, é importante estar disponível
//ver todas as portas sendo usadas netstat -o -n -a
//necessário dar CRTL + C para sair, pois fica infinitando tentando...
//configurar gitignore: criar arquivo .gitignore e depois incluir ./node_modules ou só node_modules
//* .js ignora tudo  ou teste*.js começa com teste e termina com js
//package-lock.json/ verifica todas as dependências - útil mais para devOps para compilar com cliente
//git restore ou git reset limpa o que foi adicionado
//git rm --cached <file>...