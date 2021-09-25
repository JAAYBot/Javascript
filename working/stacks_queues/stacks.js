

const LinkedList = require("../linkedlist/linkedlist");

//let mylist = new LinkedList("5");

class Stack{
    #stack;

    constructor(value){
        this.#stack = new LinkedList(value);
    }

    peek(){
        return this.#stack.tail.value;
    }

    push(value){
        this.#stack.append(value);
    }

    pop(){
        this.#stack.remove(this.#stack.length-1);
    }

    isEmpty(){
        if(this.#stack.length === 0) return true;
        return false
    }

    print(){
        console.log(this.#stack.printList());
    }

}

let myStack = new Stack("30");

myStack.push("5");
myStack.push("10");
myStack.push("15");
myStack.push("200");
myStack.print();
myStack.pop();
console.log("peak: ", myStack.peek());
myStack.print();
myStack.pop();
console.log("peak: ", myStack.peek());
myStack.print();

console.log(myStack.isEmpty());
