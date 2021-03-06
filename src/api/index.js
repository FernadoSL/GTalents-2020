import json from 'body-parser';
import express from 'express';
import NumberService from "./numberService.js";
import CustomerService from "./customerService.js";

const app = express();
app.use(json());

var numberService = new NumberService();
var customerService = new CustomerService();

function getNumberFromRequest(request) {
    var data = request.body;
    var number = data.number;
    
    return number;
}

function createResponse(response, message, statusCode) {

    if (!statusCode) {
        statusCode = 200;
    }

    response.status(statusCode).json({ message: message, statusCode: statusCode })
}

app.get('/', (request, response) => {
    response.json(numberService.getList());
})

app.post('/', (request, response) => {

    var numberToAdd = getNumberFromRequest(request)
    
    if (isNaN(numberToAdd)) {
        createResponse(response, numberToAdd + " Is not a number", 400);
    } else {
        numberService.addNumber(numberToAdd);
        createResponse(response, "Number " + numberToAdd + " added...");
    }
})

app.delete('/', (request, response) => {

    var numberToDelete = getNumberFromRequest(request);
    var isDeleted = numberService.deleteNumber(numberToDelete);

    if (isDeleted) {
        createResponse(response, "Number " + numberToDelete + " deleted...");
    }
    else {
        createResponse(response, numberToDelete + " number not found", 400);
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

    // armazenando o nome da intenção em que o dialogflow caiu
    var intentName = data.queryResult.intent.displayName;

    if (intentName == 'GetNome') {
        var parameters = data.queryResult.parameters;
        var name = parameters.person.name;

        customerService.addCustomer(name, 66, "teste@teste.com")
    }

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