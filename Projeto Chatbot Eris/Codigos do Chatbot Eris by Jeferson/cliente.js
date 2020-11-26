import Mercado from "./mercado.js"
import Atividades from "./atividade"

export default class Cliente {
    constructor(number) {

        this.cpf = number;
        this.listaCompras = [];
        this.listaAividades = [];
    }

<<<<<<< HEAD
    addCarrinho = function(name,price){

        var mercado = new Mercado(name, price);
=======
    addCarrinho = function (name){
        
        var mercado = new Mercado(name);
>>>>>>> c7ef36794d508a8a31b93ff647c45ee24fdf8e0d
        this.listaCompras.push(mercado)
    }

    deleteCarrinho(name, price){
        var index = this.listaCompras.indexOf(name, price)
<<<<<<< HEAD
        if(index > -1){
=======
        if(index >= 0){
>>>>>>> c7ef36794d508a8a31b93ff647c45ee24fdf8e0d
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