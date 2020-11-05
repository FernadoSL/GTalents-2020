export default class NumeroServico {

    //cria uma lista onde os números possam ser armazenados
    constructor() {
        this.numeroLista = [];
    }

    // adiciona os numeros que o usuário digitar
    addNumero(number) {
        this.numeroLista.push(number);
    }

    
    deleteNumero(number) {
        
        var index = this.numeroLista.indexOf(number);
        // se o indice for -1 (se não existir na lista)
        if (index > -1) {
            // delete o numero inexistente
            this.numeroLista.splice(index, 1);
            return true;
        } 
        else {
            return false;
        }
    }

    getList() {
        return this.numeroLista;
    }
}




/*export default class FrutaServico {

    constructor() {
        this.frutaLista = [];
        
    }

    // pega o que o usuário digita e adiciona na lista
    addFruta(passar a string){
        this.frutaLista.push();
    }

    // 
    deletaFruta(passar a string){
        var index = frutaLista.indexOf(passar a string);
        // se o indice for -1 (se não existir na lista)
        if (index > -1){
        // delete o numero inexistente
        this.frutaLista.splice(index, 1);
        
        return true;
        
        }else{
            return false;
        }
    }

    pegarLista(){
        return this.frutaLista;
    }
}
*/