class Stack{
    #stack;

    constructor(){
        this.#stack = [];
    }

    peek(){
        return this.#stack[this.#stack.length-1];
    }

    push(value){
        this.#stack.push(value);
    }

    pop(){
        this.#stack.pop();
    }

    isEmpty(){
        if(this.#stack.length === 0) return true;
        return false
    }

    print(){
        console.log("[ "+this.#stack.join(', ')+" ]");
    }

}

let myStack = new Stack();

console.log(myStack.isEmpty());

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