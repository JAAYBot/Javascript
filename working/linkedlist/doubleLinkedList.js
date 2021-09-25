
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList{

    constructor(value){
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        let temp = new Node(value);
        let end = this.tail;
        
        end.next = temp
        temp.prev = end;

        this.tail = temp;
        this.length++;
        return this.printList();
    }

    prepend(value){
        let temp = new Node(value);
        let start = this.head;
        
        start.prev = temp;
        temp.next = start;
        
        this.head = temp;
        this.length++;
        return this.printList();

    }

    printList(){
        const array = [];
        let i = 0;
        let temp = this.head;
        while(i < this.length){
            array.push(temp.value);
            temp = temp.next;
            i++;
        }
        return "["+array.join(', ')+"]";
    }

    
    
    insert(index, value){
        if(index === 0) {this.prepend(value); return this.printList();}
        if(index >= this.length) {this.append(value); return this.printList();}
        let node = new Node(value);
        let current = this.head;
        for(let i=0; i<index-1; i++){
            current = current.next;
        }
        let next = current.next;

        next.prev = node;
        node.next = next;

        node.prev = current;
        current.next = node;

        this.length++;
        return this.printList();
    }

    remove(index){
        if(index >= this.length) { return this.printList();}
        if(index === 0) {
            let start = this.head.next;
            start.prev = null;
            this.head = start;
            this.length--;
            return this.printList();
        }
        if(index === this.length-1) {
            let prev = this.tail.prev;
            prev.next = null;
            this.tail = prev;
            this.length--;  
            return this.printList();
        }
        /////////////////////////////////
        let current = this.head;
        for(let i=0; i<index-1; i++){
            current = current.next;
        }

        let next = current.next.next;

        current.next = next;
        next.prev = current;
        
        this.length--;
        return this.printList();
    }

    reverse(){


    }
}


let myDoubleLinkedList = new DoubleLinkedList(5);
console.log("printList: ", myDoubleLinkedList.printList());

console.log(myDoubleLinkedList.append(10));
console.log(myDoubleLinkedList.append(15));
console.log(myDoubleLinkedList.append(20));
//console.log("printList: ", myDoubleLinkedList.printList());
//console.log("head: ", myDoubleLinkedList.head.value);
//console.log("tail: ", myDoubleLinkedList.tail.value);

console.log(myDoubleLinkedList.prepend(0));
console.log(myDoubleLinkedList.prepend(-5));
console.log(myDoubleLinkedList.prepend(-10));
//console.log("printList: ", myDoubleLinkedList.printList());
//console.log("head: ", myDoubleLinkedList.head.value);
//console.log("tail: ", myDoubleLinkedList.tail.value);

console.log(myDoubleLinkedList.insert(0, 99));
console.log(myDoubleLinkedList.insert(3, 199));
//console.log("printList: ", myDoubleLinkedList.printList());
//console.log("head: ", myDoubleLinkedList.head.value);
//console.log("tail: ", myDoubleLinkedList.tail.value);


console.log("---------");
console.log("printList: ", myDoubleLinkedList.printList());
console.log(myDoubleLinkedList.remove(0));
console.log(myDoubleLinkedList.remove(7));
console.log("printList: ", myDoubleLinkedList.printList());
console.log("head: ", myDoubleLinkedList.head.value);
console.log("tail: ", myDoubleLinkedList.tail.value);
console.log("---------");