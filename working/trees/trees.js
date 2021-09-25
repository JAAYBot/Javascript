

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null)
            this.root = newNode;
        else
            this.insertNode(this.root, newNode);
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);
        } else {
            if (node.right === null)
                node.right = newNode;
            else
                this.insertNode(node.right, newNode);
        }
    }

    lookup(value) {
        return this.lookupHelper(this.root, value);
    }

    lookupHelper(node, value) {
        if (node === null) return false;
        if (node.value === value) return node;

        if (value < node.value)
            return this.lookupHelper(node.left, value);
        else
            return this.lookupHelper(node.right, value);
    }

    print() {
        let height = this.getHeight();
        for (let i = 1; i <= height; i++) {
            let temp = this.printHelper(this.root, i);
            console.log(temp);
        }

    }

    printHelper(node, level) {
        if (node === null) return "";

        if (level === 1)
            return node.value;

        if (level > 1) {
            return this.printHelper(node.left, level - 1) + " " + this.printHelper(node.right, level - 1);

        }
    }

    getHeight() {
        return this.getHeightHelper(this.root);
    }

    getHeightHelper(node) {
        if (node === null)
            return 0;

        let left = this.getHeightHelper(node.left);
        let right = this.getHeightHelper(node.right);

        if (left > right) {
            return left + 1
        } else {
            return right + 1;
        }
    }

    remove(value) {
        this.root = this.removeNode(this.root, value);
    }
    // a recursive function to insert a new value in binary search tree

    removeNode(current, value) {
        // base case, if the tree is empty 
        if (current === null) return current;
        // when value is the same as current's value, this is the node to be deleted
        if (value === current.value) {
            // for case 1 and 2, node without child or with one child
            if (current.left === null && current.right === null) {
                return null;
            } else if (current.left === null) {
                return current.right;
            } else if (current.right === null) {
                return current.left;
            } else {
                /// node with two children, get the inorder successor, 
                //smallest in the right subtree
                let tempNode = this.kthSmallestNode(current.right);
                current.value = tempNode.value;
                /// delete the inorder successor
                current.right = this.removeNode(current.right, tempNode.value);
                return current;
            }
            // recur down the tree
        } else if (value < current.value) {
            current.left = this.removeNode(current.left, value);
            return current;
        } else {
            current.right = this.removeNode(current.right, value);
            return current;
        }
    }

    /// helper function to find the smallest node
    kthSmallestNode(node) {
        while (!node.left === null)
            node = node.left;

        return node
    }


    breathFirstSearch(){
        let currentNode = this.root;
        let list = [];
        let queue = [];
        queue.push(currentNode);
        while(queue.length > 0){
            currentNode = queue.shift();
            console.log(currentNode.value);
            list.push(currentNode.value);

            if(currentNode.left){
                queue.push(currentNode.left);
            }

            if(currentNode.right){
                queue.push(currentNode.right);
            }
        }

        return list;
    }

    /*
    breathFirstSearch(){
        let currentNode = this.root;
        let list = [];
        let queue = [];
    }
    */

    dfsInOrder(){
        return this.traverseInOrder(this.root, []);
    }

    traverseInOrder(node, list){   
        //console.log(node.value);     
        if(node.left)
            this.traverseInOrder(node.left, list);
        
        list.push(node.value);
        
        if(node.right)
            this.traverseInOrder(node.right, list);

        return list;
    }

    dfsPostOrder(){
        return this.traversePostOrder(this.root, []);
    }

    traversePostOrder(node, list){   
        //console.log(node.value);     
        if(node.left)
            this.traversePostOrder(node.left, list);
        
        if(node.right)
            this.traversePostOrder(node.right, list);

        list.push(node.value);

        return list;
    }


    dfsPreOrder(){
        return this.traversePreOrder(this.root, []);
    }


    traversePreOrder(node, list){   
        //console.log(node.value); 
        list.push(node.value);    
        if(node.left)
            this.traversePreOrder(node.left, list);
                
        if(node.right)
            this.traversePreOrder(node.right, list);

        return list;
    }


    isValidBST(){
        return this.isValidBSTHelper(this.root, Infinity, -Infinity);  
    }


    isValidBSTHelper(node, maxValue, minValue) {
        if(node === null) return true;
        
        if(node.value >= maxValue || node.value <= minValue) return false;
        
        console.log("Start ---------------");
        console.log("maxValue: ", node.value, ", MinValue: ", minValue);
        console.log("maxValue: ", maxValue, ", MinValue: ", node.value);
        console.log("End   ---------------");
        const isLeftSubTreeValid  = this.isValidBSTHelper(node.left,  node.value, minValue);
        const isRightSubTreeValid = this.isValidBSTHelper(node.right, maxValue, node.value);
        
        return isLeftSubTreeValid && isRightSubTreeValid
        
    }
    /*
    var isValidBST = function(root) {
        return isValidBSTHelper(root, Number.MAX_INFINITY, Number.NEGATIVE_INFINITY);
    
        
        function isValidBSTHelper(node, max, min){
            if(node === null) return true;
            
            let leftAns, rightAns;
            
            if(node.val >= max || node.val <= min) return false;
                
            leftAns = isValidBSTHelper(node.left, node.val, min);
            rightAns = isValidBSTHelper(node.right, max, node.val);
    
    
            return leftAns && rightAns;    
        }
    };*/

    

}

const tree = new BinarySearchTree();
const tree2 = new BinarySearchTree();
const tree3 = new BinarySearchTree();

tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
//tree.print();


//let temp = tree.lookup(15);
//console.log(temp);

//console.log(tree.breathFirstSearch());

//[5,1,4,null,null,3,6]

tree2.insert(5);
tree2.insert(1);
tree2.insert(4);
tree2.insert(null);
tree2.insert(null);
tree2.insert(3);
tree2.insert(6);

tree3.insert(5);
tree3.insert(2);
tree3.insert(7);
tree3.insert(1);
tree3.insert(4);
tree3.insert(6);
tree3.insert(8);


//console.log(tree3.dfsInOrder().join(','));
console.log(tree3.breathFirstSearch());

//console.log(tree.dfsPreOrder().join(','));

//console.log(tree.dfsPostOrder().join(','));

//console.log("----");

//console.log(tree.isValidBST());

console.log(tree3.isValidBST());

//tree.remove(20);
//tree.print();