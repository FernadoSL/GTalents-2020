import Atividades from "./atividade.js";
import Mercado from "./mercado.js"
import Atividades from "./atividade.js"

export default class Cliente {
    constructor(number) {
        this.cpf = number;
        this.listaCompras = [];
        this.listaAtividades = [];
    }

    addCarrinho = function (name){
        
        var mercado = new Mercado(name);
        this.listaCompras.push(mercado)
    }

    deleteCarrinho(nomeUsuarioDigitou){ // parametro digitado pelo usuario

        // lista de string
        // ['cebola', 'batata', 'feijao']

        // lista de objetos
        // [{ name: 'cebola' }, { name: 'batata' }, { name: 'feijao' }]

        var a = this.listaCompras[0]
        // a = 'cebola'
        // a = { name: 'cebola' }
        
        var ceb = a.name;
        //ceb = 'cebola'

        var indiceParaDeletar = -1;
        for (let indice = 0; indice < this.listaCompras.length; indice++) {
            var produto = this.listaCompras[indice];
            if (produto.name == nomeUsuarioDigitou) {
                indiceParaDeletar = indice;
            }
        }
        
        if(indiceParaDeletar > -1){
            this.listaCompras.splice(indiceParaDeletar, 0)
        }
        
    }
    
    addAtividades = function(name){
        
        var atividades = new Atividades(name); 
        this.listaAividades.push(atividades);
    }

    /*deleteAtividade(NomeAtividade){
        var evento = this.listaAividades[0];
        var nomeDoEvento = evento.titulo;
                
        var indiceParaDeletar = -1;
        for (let indice = 0; indice < this.listaAividades.length; indice++) {
            
            var atividade = this.listaAividades[indice];
            if (atividade.titulo == nomeUsuarioDigitou) {
                indiceParaDeletar = indice;
            }
        }
        
        if(indiceParaDeletar > -1){
            this.listaAividades.splice(indiceParaDeletar, 0);
        }

    }*/
}