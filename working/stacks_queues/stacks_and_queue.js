class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

class Stack {
    constructor(val) {
        this.head = new Node(val)
        this.tail = this.head;
        this.length = 1;
    }

    peek() {
        return this.head.data;
    }

    push(val) {
        const newNode = new Node(val);
        let first = this.head;
        newNode.next = first;
        this.head = newNode;
        this.length++;
    }

    pop() {
        if (this.length > 0) {
            let first = this.head;
            let second = first.next;
            this.head = second;
            this.length--;
            return first.data;
        }
        return undefined;
    }

    isEmpty() {
        if (this.length === 0)
            return true;

        return false;
    }

}



class Queue {
    constructor(val) {
        this.head = new Node(val);
        this.tail = this.head;
        this.length = 1;
    }

    peak() {
        return this.head.data;
    }

    enqueue(val) {
        const newNode = new Node(val);
        let last = this.tail;
        last.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    dequeue() {
        if(this.length > 0){
            let first = this.head;
            let second = first.next;
            this.head = second;
            this.length--;
            return first.data;
        }
        return undefined; 
    }

    isEmpty() {
        if (this.length === 0) {
            return true;
        }
        return false;
    }

}

let myStack = new Stack(12);
console.log(myStack.peek());
myStack.push(5);
console.log(myStack.peek());
myStack.push(6);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());

console.log("------------------------------------------------------------------------------");

let myQueue = new Queue(12);

console.log(myQueue.peak());

myQueue.enqueue(5);
myQueue.enqueue(8);
myQueue.enqueue(10);

console.log(myQueue.peak());

console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());