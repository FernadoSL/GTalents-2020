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

    deleteCarrinho(name){

        var index = this.listaCompras.indexOf(name)
        
        if(index > -1){
            this.listaCompras.splice(index, 0)
        }
        
    } 
    
}