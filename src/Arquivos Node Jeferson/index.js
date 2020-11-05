// import dos pacotes
import { json } from 'body-parser'; //biblioteca do Node
import express, { request,response } from 'express'; //biblioteca do Node
import NumeroServico from "./numeroServico.js"; //importação do arquivo numeroServico.js
import CustomerService from "./customerService.js";
const app = express();
app.use(json());

// a variavel numeroServico tem acesso aos metodos da classe NumeroServico
var numeroServico = new NumeroServico();
var customerService = new CustomerService();

//função para request:
function pegaNumeroDaRequest(request) {
    //pega os dados do corpo da requisição e armazena uma variavel
    var data = request.body;
    var number = data.number;
    
    //retorna um numero
    return number;
}

//função para resposta de status code:
function criarResposta(response, message, statusCode) {
    
    //se o statuscode for diferente do erro apresente o status 200
    if (!statusCode) {
        statusCode = 200;
    }

    response.status(statusCode).json({ message: message, statusCode: statusCode })
}

// get responde com os números adicionados na lista
app.get('/', (request, response) => {
    response.json(numeroServico.getList());
})

app.post('/', (request, response) => {
    // a variável numeroParaAdd recebe pegaNumeroDaRequest(request)
    var numeroParaAdd = pegaNumeroDaRequest(request)
    
    //se numeroParaAdd não for um numero 
    if (isNaN(numeroParaAdd)) {
        // responda:
        criarResposta(response, numeroParaAdd + " Isso não é um número", 400);
        //caso seja um numero:
    } else {
        numeroServico.addNumero(numeroParaAdd);
        criarResposta(response, "Número " + numeroParaAdd + " adicionado...");
    }
})

app.delete('/', (request, response) => {
    // a variável numeroParaDeletar recebe pegaNumeroDaRequest(request)  
    var numeroParaDeletar = pegaNumeroDaRequest(request);
    /* a variável deletado recebe numeroServico.deleteNumero(numeroParaDeletar)
    onde numeroServico.deleteNumero(numeroParaDeletar) vem da classe NumeroServiço*/ 
    var deletado = numeroServico.deleteNumero(numeroParaDeletar);

    //se o numero for deletado da variável deletado: 
    if (deletado) {
        criarResposta(response, "Número " + numeroParaDeletar + " deletado...");
    }
    //caso o número não esteja na lista:
    else {
        criarResposta(response, numeroParaDeletar + " Número não encontrado", 400);
    }
})


app.get('/customer', (request, response) => {
    var result = customerService.getCustomers();
    response.json(result);
})

app.post('/customer', (request, response) => {

    console.log(request.body);
    
    var name = request.body.name;
    var age = request.body.age;
    var email = request.body.email;
    console.log(name + " " + age + " " + email)

    customerService.addCustomer(name, age, email);
    response.send("Customer Adicionado")
})

app.post('/webhook', (request, response) => {

    // amrazenando o corpo da requisição que o dialogflow fez
    var data = request.body;
    console.log(data);

    // armazenando o nome da intenção em que o dialogflow caiu
    var intentName = data.queryResult.intent.displayName;
    console.log(intentName);

    // armazenando o nome do contexto de saída
    var context = data.queryResult.outputContexts[0].name;
    console.log(context);

    // armazenando o que o usuário digitou 
    var text = data.queryResult.queryText;
    console.log(text);

    var responseData =
    {
        fulfillmentMessages: [{ text: { text: ["Olá, essa resposta veio do webhook!"] } }]
    };

    response.json(responseData)
})

var port = 4200
console.log("Iniciando servidor...");
app.listen(process.env.PORT || port);
console.log("Escutando na porta: " + port);

/*//importando os pacotes
import {json} from 'body-parser';
import express, {response} from 'express';
import FrutaServico from "./frutaServico.js"; 
const app = express();
app.use(json());

// a variavel frutaServiço tem acesso aos metodos da classe FrutaServico
var frutaServico = new FrutaServico();

//função para request:
function pegaFrutaDaRequest(request){
    //pega os dados do corpo da requisição e armazena uma variavel
    var data = request.body;
    var fruta = data.fruta;

    //retorna uma string
    return fruta;
}

//função para resposta de status code:
function criarResposta(response, message, statusCode) {

    //se o statuscode for diferente do erro apresente o status 200
    if (!statusCode) {
        statusCode = 200;
    }

    response.status(statusCode).json({ message: message, statusCode: statusCode })
}

app.get('/', (request, response) => {
    response.json(frutaServico.getList());
})

app.post('/', (request, response) => {

    var frutaParaAdicionar = pegaFrutaDaRequest(request)
    
    if (isNaN(frutaParaAdicionar)) {
        criarResposta(response, frutaParaAdicionar + " Is not a number", 400);
    } else {
        frutaServico.addFruta(frutaParaAdicionar);
        criarResposta(response, "Number " + frutaParaAdicionar + " added...");
    }
})
*/