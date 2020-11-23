//importando os pacotes
import json from 'body-parser';
import express from 'express';
import CustomerService from "./customerService.js";

const app = express();
app.use(json());

var customerService = new CustomerService();

app.get('/webhook', (request, response) => {

    var result = customerService.getCustomers();
    response.json(result);

})

app.post('/webhook', (request, response) => {

    // armazenando o corpo da requisição que o dialogflow fez
    var data = request.body;
    console.log(data);

    // intents
    var nomeIntencao = data.queryResult.intent.displayName;

    //intent onde o usuário pergunta "em que pode me ajudar"
    if(nomeIntencao == 'IntentAjudaUsuario'){

        var text = data.queryResult.queryText;
        text = 'ajuda', 'ajudar';

        var responseData =
        {
            fulfillmentMessages: [{ text: { text: ["Posso te ajudar de duas formas. Posso te informar os itens de seu carrinho, ou posso passar a sua lista de atividades.(webhook)"] } }]
        };
    
        response.json(responseData)
    }

    //intent onde o usuário pergunta sobre seu carrinho de compras
    if(nomeIntencao == 'IntentListaCarrinho'){
        var parametros = data.queryResult.parameters;
        parametros = 'listaCompras';
        
        var listaCompras = customerService.clienteLogado.listaCompras;
        var listaString = "";
        for (let i = 0; i < listaCompras.length; i++) {
            listaString = listaCompras + ", ";
        }
        
        // var responseData =
        // {
        //     fulfillmentMessages: [{ text: { text: ["Certo antes de ver o que tem no seu carrinho, pode me dizer o seu CPF?(webhook)"] } }]
        // };

        var responseData =
        {
            fulfillmentMessages: [{ text: { text: ["Sua lista de compras: " + listaString] } }]
        };
    
        response.json(responseData)
    }
    //intent que verifica se o usuário é cadastrado ou não
    if(nomeIntencao == 'IntentcheckCPF') {

        var cpf = data.queryResult.queryText.parameters.number;
        customerService.checkCostumer(cpf);
    }

    //intent de cadastro de nome e cpf
    if(nomeIntencao == 'IntentCadastroNomeCPF'){
        var parameters = data.queryResult.parameters;
        var name = parameters.person.name;
        var number = parameters.number;

        customerService.addCustomer(name, number)

        var responseData =
        {
            fulfillmentMessages: [{ text: { text: ["Ok estou processando seus dados...(webhook)"] } }]
        };
    
        response.json(responseData)
    }

    if (nomeIntencao == "AdicionaCompra" && customerService.loginFeito) {
        customerService.clienteLogado.adiciona("nova compra");
    }
   
})

var port = 4200
console.log("Iniciando servidor...");
app.listen(process.env.PORT || port);
console.log("Escutando na porta: " + port);