export default class NumberService {

    constructor() {
        this.numberList = [];
    }

    addNumber(number) {
        this.numberList.push(number);
    }

    deleteNumber(number) {
        var index = numberList.indexOf(number);

        if (index > -1) {
            this.numberList.splice(index, 1);
            return true;
        } 
        else {
            return false;
        }
    }

    getList() {
        return this.numberList;
    }
}