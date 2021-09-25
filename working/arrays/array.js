class MyArray{
    constructor(){
        this.length =  0;
        this.data = {};
    }

    get(index){
        return this.data[index];
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop(){
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }

    delete(index){
        const item = this.data[index];
        this.shiftItems(index);
        const deleteItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return deleteItem;
    }

    shiftItems(index){
        for(let i = index; i < this.length-1; i++){
            this.data[i] = this.data[i+1];
        }
    }

}

const newArray = new MyArray();
console.log(newArray.get(0));
newArray.push('hi');
newArray.push('you');
newArray.push('nice');
newArray.push('are');
newArray.push('nice');
newArray.push('!');
console.log(newArray);
//console.log(newArray.get(1));
//newArray.pop();
//console.log(newArray);
//newArray.pop();
//console.log(newArray);
newArray.delete(2);
console.log(newArray);