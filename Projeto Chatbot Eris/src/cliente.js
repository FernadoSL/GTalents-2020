import Mercado from "./mercado.js"

export default class Cliente {
    constructor(number) {
        this.cpf = number;
        this.listaCompras = [];
        this.listaAividades = [];
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
    
    addAtividades = function(titulo, data, hora){
        
        var atividade = new Atividades(titulo, data, hora); 
        this.listaAividades.push(atividade);
    }
}