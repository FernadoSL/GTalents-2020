import { json } from 'body-parser';
import express, {request, response} from 'express';
import NameService from "./NameService.js";
const app = express();
app.use (json());

var nameService = new NameService();

// obtem o Nome da solicitação
function getNameFromRequest(request){
    var data = request.body;
    var name = data.name;
    return name;
}
// cria resposta do código de erro e responde o usuário 
function createResponse(response, message, statusCode){
    if(!statusCode){
        statusCode = 200;

    }
    
    response.status(statusCode).json({message: message, statusCode: statusCode});
}

// Get
app.get('/', (request, response) => {
    response.json(nameService.getList()); //Resposta do jason ao usuário
})

// Post
app.post('/', (request, response) => {
    
    var nameToAdd = getNameFromRequest(request);
        createResponse(response, "Nome " + nameToAdd + " Adicionado...");
        nameService.addName(nameToAdd);


  
})

// Delete
app.delete('/',(request, response) => {
    var nameToDelete = getNameFromRequest(request);
    var isDeleted = nameService.deleteName(nameToDelete);

    if (isDeleted){
        createResponse(response, "Nome " + nameToDelete + " Deletado");
    } 
    else{
        crieateResponse(response, nameToDelete + " Nome Não encontrado", 400);
    }
})

// parte operacional do dialogflow
app.post('/webhook', (request, response) =>{

    // armazena corpo da requisição feita pelo dialogflow
    var data = request.body;
    console.log(data);

    // armazena nome da intenção que o dialogflow caiu
    var intentName = data.queryResult.intent.displayName;
    console.log(intentName);
    



})

var port = 4200;
console.log("Iniciando servidor...");
app.listen(process.env.PORT || port);
console.log("executando na porta: " + port);    