export default class CustomerService {

    constructor(){
        this.customerList = [];
    }

    getCustomers() {
        return this.customerList;
    }

    checkCostumer(){

        //armazena o que o cliente digitou (no caso o parametro é número)
        var numCpf = data.queryResult.queryText.parameters.number;
    
        //
        for(numCpf of this.custumerList[number]){
               
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
        this.number = number;            
    }
}
