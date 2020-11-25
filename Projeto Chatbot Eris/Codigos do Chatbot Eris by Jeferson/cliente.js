import Mercado from "./mercado.js"
import Atividades from "./atividade.js";

export default class Cliente {

    constructor(name, number, titulo) {
        
        // dados lista de compras 
        this.name = name;
        this.cpf = number;
        this.listaCompras = [];

        // dados lista de atividades        
        this.titulo = NomeAtividade
        
        this.listAtividades = [];
    } 

    addCarrinho = function (name,price){
        var mercado = new Mercado(name, price);
        this.listaCompras.push(mercado)
    }


    addListaAtividade = function (titulo, dia, mes, hora){
        var atividade = new Atividades(titulo, dia, mes, hora); 
        this.listAtividades
    }


    
}