import Mercado from "./mercado.js"
import Atividades from "./atividade"


export default class Cliente {
    constructor(number) {

        this.cpf = number;
        this.listaCompras = [];
        this.listaAividades = [];
    }

    addCarrinho = function(name,price){

        var mercado = new Mercado(name, price);
        this.listaCompras.push(mercado)
    }

    deleteCarrinho(name, price){
        var index = this.listaCompras.indexOf(name, price)
        if(index > -1){
            this.listaCompras.splice(index, 1)
            return true;
        }else{
            return false;
        }
        
    } 
    
    addAtividades = function(titulo, data, hora){
        
        var atividade = new Atividades(titulo, data, hora); 
        this.listaAividades.push(atividade);
    }      





    
}