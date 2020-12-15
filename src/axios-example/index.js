import json from 'body-parser';
import express, { response } from 'express';
import axios from 'axios';

const app = express();
app.use(json());

app.get('/health', (request, response) => {
    response.json({ health: "OK" })
});

app.post('/webhook', (request, response) => {

    var data = request.body;
    console.log(data);

    var intentName = data.queryResult.intent.displayName;
    console.log(intentName);

    // parametros dialogflow - nome jogo
    var nomeJogo = data.queryResult.parameters.jogos;
    console.log(nomeJogo);

    // função pra chamar api externa
    getJogoPorNome(nomeJogo, response);
})

function getJogoPorNome(nomeJogo, responseDialogflow) {
    axios.get("https://www.cheapshark.com/api/1.0/games?title=" + nomeJogo).then((response) => {
        var listaoDeJogos = response.data;
        var primeiroJogoDaLista = listaoDeJogos[0];

        var nomeJogo = primeiroJogoDaLista.external;
        var valorJogo = primeiroJogoDaLista.cheapest;

        var nomePreco = "Nome: " + nomeJogo + ", Preço: " + valorJogo;

        var responseData =
        {
            fulfillmentMessages: [{ text: { text: ["Primeiro Jogo Enonctrado: " + nomePreco] } }]
        };

        responseDialogflow.json(responseData);
    })
}


app.listen(process.env.PORT || 4200);