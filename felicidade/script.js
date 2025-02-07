//Importando o mudlo HTTP
const http = require('http');

//Configurando as informações do servidor 
const hostname = '127.0.0.1';
const port = 3000;

//Criando o servidor usando uma função com nome diferente 
const meuSevidor = http.createServer((req,res) => {
    //Configurando o cabeçalho da resposta 
    res.statusCode = 200;
    res.setHeader('Content Type','text/plain');

    //Enviando uma mensagem como resposta 
    res.end('Bem-vindo ao meu servidor Node.js!\n'); 
});

//Iniciando o servidor  escutando na porta especificada 
meuSevidor.listen(port,hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
})