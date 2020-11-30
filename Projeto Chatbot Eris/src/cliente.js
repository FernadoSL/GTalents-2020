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

    addAtividades = function(name){
        
        var atividades = new Atividades(name); 
        this.listaAtividades.push(atividades)
    }

    deleteCarrinho(nomeUsuarioDigitou){

        var indiceParaDeletar = -1;
        for (let index = 0; index < this.listaCompras.length; index++) {
            var produto = this.listaCompras[index];
            if (produto.name == nomeUsuarioDigitou) {
                indiceParaDeletar = index;
            }
        }
        
        if(indiceParaDeletar > -1){
            this.listaCompras.splice(indiceParaDeletar, 1)
        }
        
    }

    deleteAtividade(nomeAtividade){
                
        var indiceParaDeletar1 = -1;
        for (let index = 0; index < this.listaAtividades.length; index++) {
  
            var atividade = this.listaAtividades[index];
            if (atividade.name == nomeAtividade) {
                indiceParaDeletar1 = index;
            }
        }
        
        if(indiceParaDeletar1 > -1){
            this.listaAtividades.splice(indiceParaDeletar1, 1);
        }

    }
}