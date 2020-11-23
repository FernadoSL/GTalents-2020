export default class CustomerService {

    constructor(){
        this.customerList = [];
    }

    getCustomers() {
        return this.customerList;
    }

    addCustomer(name, age, email) {
        
        // cria um customer com os dados
        var customer = new Customer(name, age, email);
        
        // adiciona o customer na lista
        this.customerList.push(customer);
    }

}

class Customer {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;

        this.marketList = [];
        this.taskList = [];
    }

    addTask = function (name, dateTime) {
        var task = new Task(name, dateTime);
        this.taskList.push(task);
    }
}

class Task {
    constructor(name, dateTime) {
        this.name = name;
        this.dateTime = dateTime;
    }
}

class Market {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}