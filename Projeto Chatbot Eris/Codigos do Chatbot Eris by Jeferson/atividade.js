export default class Atividades{
    
    //Passando os parametros do dialogflow
    constructor(dateTime, NomeAtividade, time){
        this.titulo = NomeAtividade;
        this.data = dateTime;
        this.hora = time;
    }


}