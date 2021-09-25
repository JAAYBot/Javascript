const LinkedList = require("../linkedlist/linkedlist");

//let mylist = new LinkedList("5");

class Queue{
    #queue;

    constructor(value){
        this.#queue = new LinkedList(value);
    }

    peek(){
        return this.#queue.tail.value;
    }

    enqueue(value){
        this.#queue.preppend(value);
    }

    dequeue(){
        if(!this.isEmpty()){
            this.#queue.remove(this.#queue.length-1);
        }      
    }

    isEmpty(){
        if(this.#queue.length === 0) return true;
        return false
    }

    print(){
        console.log(this.#queue.printList());
    }

}

let myQueue = new Queue("30");

myQueue.enqueue("5");
myQueue.enqueue("10");
myQueue.enqueue("15");
myQueue.enqueue("200");
myQueue.print();
myQueue.dequeue();
myQueue.print();
console.log("peak: ", myQueue.peek());
myQueue.print();
myQueue.dequeue();
console.log("peak: ", myQueue.peek());
myQueue.print();

console.log(myQueue.isEmpty());

myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.print();
console.log(myQueue.isEmpty());