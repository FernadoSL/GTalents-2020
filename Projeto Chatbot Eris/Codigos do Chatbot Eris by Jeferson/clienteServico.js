import Cliente from "./cliente.js"

export default class ClienteServico {

    constructor(){
        this.listaClientes = [];
        this.clienteLogado = false;
        this.loginFeito = false;
    }

    getCustomers() {
        return this.listaClientes;
    }

    checkCliente(cpf){

        for (let i = 0; i < this.listaClientes.length; i++) {
            var cliente = this.listaClientes[i];
            
            if (cliente.cpf == cpf) {
                this.clienteLogado = cliente;
                this.loginFeito = true;
            }    
        }

        if(!this.loginFeito){
            this.addCliente(cpf);
        }
    }
    
    addCliente(number) { 
        // cria um cliente com os dados nome e numero
        var cliente = new Cliente(number);

        // adiciona o cliente na lista
        this.listaClientes.push(cliente);
    }

}

