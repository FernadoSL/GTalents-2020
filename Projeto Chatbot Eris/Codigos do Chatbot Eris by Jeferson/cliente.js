import Mercado from "./mercado.js"

export default class Cliente {
    constructor(number) {
        this.cpf = number;
        this.listaCompras = [];
    }

    addCarrinho = function (name){
        
        var mercado = new Mercado(name);
        this.listaCompras.push(mercado)
    }

    deleteCarrinho(name, price){
        var index = this.listaCompras.indexOf(name, price)
        if(index >= 0){
            this.listaCompras.splice(index, 1)
            return true;
        }else{
            return false;
        }
        
    } 
    
}