export default class NameService {

    constructor(){
        this.nameList = [];

    }

    addName(name){
        this.nameList.push(name);

    }

    deleteName(name) {
        
         var index = this.nameList.indexOf(name); 


        if (index > -1){
            this.nameList.splice(index, 1);
            return true;
        }
        else {
            return false;
        
        }
   }

   getList() {
       return this.nameList
   }

}