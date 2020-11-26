//importando os pacotes
import json from 'body-parser';
import express from 'express';
import ClienteServico from "./clienteServico.js";
import Cliente from "./cliente.js" 

const app = express();
app.use(json());

var clienteServico = new ClienteServico();
var cliente = new Cliente();


app.get('/webhook', (request, response) => {

    var result = clienteServico.getCustomers();
    response.json(result);

})

app.post('/webhook', (request, response) => {

    // armazenando o corpo da requisição que o dialogflow fez
    var data = request.body;
    console.log(data);

    // intents
    var nomeIntencao = data.queryResult.intent.displayName;

    
    //intent carrinho de compras
    if(nomeIntencao == 'IntentListaCarrinho' && clienteServico.clienteLogado){
        
        var parametros = data.queryResult.parameters;
        parametros = 'listaCompras';

        var listaCompras = clienteServico.clienteLogado.listaCompras;
        var listaString = "";
        for (let i = 0; i < cliente.listaCompras.length; i++) {
            listaString = listaCompras + ", ";
        }

        var responseData =
            {
                fulfillmentMessages: [{ text: { text: ["Sua lista de compras: " + listaString] } }]
            };
        response.json(responseData)
    
    }else if(nomeIntencao == 'IntentListaCarrinho' && !clienteServico.clienteLogado){

        var responseData =
            {
                fulfillmentMessages: [{ text: { text: ["Para acessar sua lista de compras digite seu CPF."] } }]
            };
        response.json(responseData)
    }

    //intent que verifica se o usuário é cadastrado ou não
    if(nomeIntencao == 'IntentcheckCPF'){

        var cpf = data.queryResult.queryText.parameters;
        clienteServico.checkCliente(cpf);

        var responseData =
            {
                fulfillmentMessages: [{ text: { text: ["Seus dados foram registrados com sucesso! Para acessar sua lista de compras novamente digite 'minha lista de compras'."] } }]
            };
        response.json(responseData)
    }

    if(nomeIntencao == 'IntentAdicionaCarrinho' && clienteServico.loginFeito){
        var addItensCarrinho = data.queryResult.queryText.parameters;
        var name = addItensCarrinho.name;
        var price = addItensCarrinho.price;
        cliente.addCarrinho(name,price);
    }
    

})

app.delete('/webhook', (request, response) => {
    var data = request.body;

    if(nomeIntencao == 'IntentDeletadoCarrinho')
        var deleteItensCarrinho = data.queryResult.queryText.parameters;
        var deletarNome = deleteItensCarrinho.name;
        var deletarPreco = deleteItensCarrinho.price;
        cliente.deleteCarrinho(deletarNome, deletarPreco);

})


var port = 4200
console.log("Iniciando servidor...");
app.listen(process.env.PORT || port);
console.log("Escutando na porta: " + port);