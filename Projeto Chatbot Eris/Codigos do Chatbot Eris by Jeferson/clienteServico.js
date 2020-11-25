import Cliente from "./cliente.js"

export default class ClienteServico {

    constructor(){
        this.listaClientes = [];
        this.clienteLogado = {};
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
    }
    
    addCliente(name, number) {
        
        // cria um customer com os dados
        var cliente = new Cliente(name, number);

        // adiciona o customer na lista
        this.listaClientes.push(cliente);
    }

}

