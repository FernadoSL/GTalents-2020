import ClienteServico from "./clienteServico.js";
import Mercado from "./mercado.js"


export default class Cliente {
    constructor(number) {
        this.cpf = number;
        
        this.listaCompras = [];
    }

    addCarrinho = function (name,price){

        var mercado = new Mercado(name, price);
        this.listaCompras.push(mercado)
    }
    
}