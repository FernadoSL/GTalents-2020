export default class NumberService {
    
    constructor() {
        this.numberList = [1, 2, 3];
    }

    addNumber(number) {
        this.numberList.push(number);
    }

    getList() {
        return this.numberList;
    }
}

function getService() {
    return new NumberService();
}