
class Node{
    constructor(value){
        this.value = value;       
        this.next = null;
    }
}

//module.exports = class LinkedList {
class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this.printList();
    }

    preppend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this.printList();
    }

    printList(){
        const array = [];
        let current  = this.head;
        while(current !== null){   
            array.push(current.value);
            current = current.next;
        }
        return "["+array.join(', ')+"]";
    }

    insert(index, value){
        if(index === 0) {this.preppend(value); return this.printList();}
        if(index >= this.length) {this.append(value); return this.printList();}
        let node = new Node(value);
        let current = this.head;
        for(let i=0; i<index-1; i++){
            current = current.next;
        }
        node.next = current.next;
        current.next = node;
        this.length++;
        return this.printList();
    }

    remove(index){
        if(index >= this.length) { return this.printList();}
        if(index === 0) {
            this.head = this.head.next;
            this.length--;
            return this.printList();
        }
        let current = this.head;
        for(let i=0; i<index-1; i++){
            current = current.next;
        }

        current.next = current.next.next;
        this.length--;
        if(index === this.length) {this.tail = current};
        return this.printList();

    }


    reverse(){
        if(this.length === 1) return this.printList();
        this.tail = this.head
        this.reverseFunction(this.head);
        return this.printList();
    }

    reverseFunction(cur, prev=null){
        if(cur === null) {
            this.head = prev;
            return;
        }
               
        this.reverseFunction(cur.next, cur);
        cur.next = prev;
        return;
    }

    reverse3(){
        if(this.length === 1) return this;
        this.tail = this.head;

        let prev = null;
        let curr = this.head;
        let next = null;

        while(curr){
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        this.head = prev;

        return this.printList();
    }
    
    

}

const myLinkedList = new LinkedList(10);
console.log(myLinkedList.append(5));
console.log(myLinkedList.append(8));
console.log(myLinkedList.append(15));
console.log(myLinkedList.preppend(25));
console.log(myLinkedList.printList());
console.log(myLinkedList.insert(1, 100));
console.log(myLinkedList.remove(2));
console.log(myLinkedList.reverse3());
console.log("Head: ", myLinkedList.head);
console.log("Tail: ", myLinkedList.tail);
