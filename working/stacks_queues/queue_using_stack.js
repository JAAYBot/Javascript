/**
 * Initialize your data structure here.
 */
 var MyQueue = function() {
    this.enqueueStack = new Array();
    this.dequeueStack = new Array();
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    if(this.dequeueStack === 0)
        this.enqueueStack.push(x);
    else{
        while(this.dequeueStack.length > 0){
            this.enqueueStack.push(this.dequeueStack.pop());   
        }
        this.enqueueStack.push(x);   
    }
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function(){
    if(this.enqueueStack === 0)
        return this.dequeueStack.pop();
    else{
        while(this.enqueueStack.length > 0){
            this.dequeueStack.push(this.enqueueStack.pop());   
        }
        return this.dequeueStack.pop();
    }
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(this.enqueueStack === 0)
        return this.dequeueStack[this.dequeueStack.length-1];
    else{
        while(this.enqueueStack.length > 0){
            this.dequeueStack.push(this.enqueueStack.pop());   
        }
        return this.dequeueStack[this.dequeueStack.length-1];
    } 
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return (this.dequeueStack.length === 0 && this.enqueueStack.length === 0)
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */