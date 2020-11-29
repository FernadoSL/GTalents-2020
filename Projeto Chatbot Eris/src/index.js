//importando os pacotes
import json from 'body-parser';
import express from 'express';
import ClienteServico from "./clienteServico.js";
import Cliente from "./cliente.js"
import Mercado from "./mercado.js"

const app = express();
app.use(json());

var clienteServico = new ClienteServico();

app.get('/webhook', (request, response) => {

    var result = clienteServico.getCustomers();
    response.json(result);

})

app.post('/webhook', (request, response) => {

    // armazenando o corpo da requisição que o dialogflow fez
    var data = request.body;
    console.log(data);

    // intents xbox series x ta muito caro
    // intents
    // outro comentario
    var nomeIntencao = data.queryResult.intent.displayName;


    //intent carrinho de compras
    if(nomeIntencao == 'IntentListaCarrinho' && clienteServico.loginFeito){
        
        var listaString = "";
        for (let i = 0; i < clienteServico.clienteLogado.listaCompras.length; i++) {
            listaString = listaString + clienteServico.clienteLogado.listaCompras[i].name + ", ";
        }
        
        var responseData =
            {
                
                fulfillmentMessages: [{ text: { text: ["Sua lista de compras:  " + listaString] } }]
            };
        response.json(responseData)
    
    }else if(nomeIntencao == 'IntentListaCarrinho' && !clienteServico.loginFeito){
        var parametros = data.queryResult.parameters;
        parametros = 'listaCompras';

        var responseData =
            {
                fulfillmentMessages: [{ text: { text: ["Para acessar sua lista de compras digite seu CPF."] } }]
            };
        response.json(responseData)
    }

    //intent que verifica se o usuário é cadastrado ou não
    if(nomeIntencao == 'IntentcheckCPF'){

        var cpf = data.queryResult.parameters.number;
        clienteServico.checkCliente(cpf);
        console.log(cpf);
        var responseData =
            {
                fulfillmentMessages: [{ text: { text: ["Seus dados foram registrados com sucesso! Para acessar sua lista de compras novamente digite 'minha lista de compras'."] } }]
            };
        response.json(responseData)
    }

    // itent adiciona carrinho
    if(nomeIntencao == 'IntentAdicionaCarrinho' && clienteServico.loginFeito){
        var addItensCarrinho = data.queryResult.parameters.Produto;
        
        clienteServico.clienteLogado.addCarrinho(addItensCarrinho);
        var responseData =
            {
                fulfillmentMessages: [{ text: { text: [addItensCarrinho + " adicionado na lista de compras!"] } }]
            };
        response.json(responseData)

    }

    // intent deleta carrinho
    console.log(deleteItensCarrinho)
    if(nomeIntencao == 'IntentDeletadoCarrinho' && clienteServico.loginFeito){

        
        var deleteItensCarrinho = data.queryResult.parameters.Produto;
        
        clienteServico.clienteLogado.deleteCarrinho(deleteItensCarrinho);

        var responseData =
            {
                fulfillmentMessages: [{ text: { text: [deleteItensCarrinho + "deletado da lista de compras."] } }]
            };
        response.json(responseData)
    }

    // intente Lista de Atividades 
    if(nomeIntencao == 'ListaAtividade' && clienteServico.loginFeito){
        
        var listaString = "";
        for (let i = 0; i < clienteServico.clienteLogado.listaAtividade.length; i++) {
            listaString = listaString + clienteServico.clienteLogado.listaAtividade[i].name + ", ";
        }
        
        var responseData =
            {
                
                fulfillmentMessages: [{ text: { text: ["Sua lista de Atividades:  " + listaString] } }]
            };
        response.json(responseData)
    
    }else if(nomeIntencao == 'ListaAtividade' && !clienteServico.loginFeito){
        var parametros = data.queryResult.parameters;
        parametros = 'listaAtividade';

        var responseData =
            {
                fulfillmentMessages: [{ text: { text: ["Para acessar sua lista de Atividades digite seu CPF."] } }]
            };
        response.json(responseData)
    }
       
    // itent adiciona lista de atividades
    if(nomeIntencao == 'AdicionaEventoListaDeTarefa' && clienteServico.loginFeito){
        var addEvento = data.queryResult.parameters.Produto;
        
        clienteServico.clienteLogado.addAtividades(addEvento);
        var responseData =
            {
                fulfillmentMessages: [{ text: { text: [addEvento + " Ativedade adicionada com sucesso!"] } }]
            };
        response.json(responseData)

    }

    // intent deleta atividade
    console.log(deleteItensCarrinho)
    if(nomeIntencao == 'DeletaEventoListaDeTarefa' && clienteServico.loginFeito){
    
            
            var deleteItemLista = data.queryResult.parameters.nomeAtividade;
            
            clienteServico.clienteLogado.deleteCarrinho(deleteItemLista);
    
            var responseData =
                {
                    fulfillmentMessages: [{ text: { text: [deleteItemLista + "deletado da lista de atividades."] } }]
                };
            response.json(responseData);
        }
    
    

})


var port = 4200
console.log("Iniciando servidor...");
app.listen(process.env.PORT || port);
console.log("Escutando na porta: " + port);