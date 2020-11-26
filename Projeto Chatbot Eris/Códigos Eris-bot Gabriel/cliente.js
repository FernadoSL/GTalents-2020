import Mercado from "./mercado.js"

export default class Cliente {
    constructor(number) {
        this.cpf = number;
        this.listaCompras = [];
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
    
}