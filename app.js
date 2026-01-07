import express from 'express';


const servidor = express();



servidor.get('/helloworld', (req, resp) => {
    //Código do endpoint
    resp.send('Hello World')
})

servidor.get('/mensagem/boasvindas', (req, resp) => {
    resp.send('Olá, sejam bem vindos e bem vindas!')
})

servidor.get('/v2/mensagem/boasvindas', (req, resp) => {
    //Exemplo de Endpoint Versionado
    resp.send('Que bom que está aqui usando essa versão! <3')
})


    //Exemplo de Endpoint de Encadeamento
servidor.get('/mensagem/ocupado', (req,resp) => {
    resp.send('Estou ocupado no momento')
})

servidor.get('/mensagem/ocupado/recado', (req,resp) => {
    resp.send('Estou ocupado no momento, deixe uma mensagem no email "pedro.leopoldino.rcm@hotmail.com"')
})


    //Exemplos de Parâmetros de Rota com calculadora simples
servidor.get('/calculadora/soma/:n1/:n2', (req,resp) => {
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);
    let soma = n1 + n2

    resp.send('O resultado da soma é '+ soma)
})

servidor.get('/calculadora/subtracao/:n1/:n2', (req,resp) => {
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);
    let subtracao = n1 - n2

    resp.send('O resultado da subtração é '+ subtracao)
})

servidor.get('/calculadora/multiplicacao/:n1/:n2', (req,resp) => {
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);
    let multiplicacao = n1 * n2

    resp.send('O resultado da multiplicação é '+ multiplicacao)
})


servidor.get('/calculadora/divisao/:n1/:n2', (req,resp) => {
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);
    let divisao = n1 / n2

    resp.send('O resultado da divisão é '+ divisao)
})

servidor.get('/calculadora/potencia/:n1/:n2', (req,resp) => {
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);
    let potencia = n1 ** n2
 
    resp.send('O resultado da potência é '+ potencia)
})

    //Exemplos de Parâmetros de Query com calculadora simples
servidor.get('/calculadora/soma2', (req, resp) => {
    let n1 = Number(req.query.n1);
    let n2 = Number(req.query.n2);
    let soma = n1 + n2

    resp.send('O resultado da soma é ' + soma) 

})














servidor.listen(
    5001,
     () => console.log('--->API subiu com sucesso na porta 5001<---'))