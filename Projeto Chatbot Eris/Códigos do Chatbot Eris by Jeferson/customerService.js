export default class CustomerService {

    constructor(){
        this.listaClientes = [];
        this.clienteLogado = {};
        this.loginFeito = false;
    }

    getCustomers() {
        return this.customerList;
    }

    checkCostumer(cpf) {
        for (let i = 0; i < this.listaClientes.length; i++) {
            var cliente = this.listaClientes[i];

            if (cliente.cpf == cpf) {
                this.clienteLogado = cliente;
                this.loginFeito = true;
            }
        }
    }
    
    addCustomer(name, number) {
        
        // cria um customer com os dados
        var customer = new Customer(name, number);

        // adiciona o customer na lista
        this.customerList.push(customer);
    }


}

class Customer {
    constructor(name, number) {
        this.name = name;
        this.cpf = number;            
    }
}
