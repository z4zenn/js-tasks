// IMPLEMENTING STACK AND QUEUE USING CLASSES
// STACK


class Stack{
constructor(){
    this.items=[];
}
push(n){
this.items.push(n);
console.log(n + " Pushed!");
};
pop(){
let res=this.items[this.items.length-1];
console.log(res +" Popped !");
this.items.pop();
};

peek(){
let res=this.items[this.items.length-1];
console.log(res);
};
}

// 1. Build the actual stack first!
const myStack = new Stack(); 

// 2. Now use your actual object, not the class blueprint
myStack.push(3);
myStack.push(4);
myStack.push(5);
myStack.pop();
myStack.peek();

//QUEUE

class queue {
    constructor() {
        this.queue = [];
    }

    enqueue(n) {
        this.queue.push(n);
        console.log(n + " Added into the Queue");
    };

    dequeue() {
        console.log(this.queue[0] + " Removed From the Queue");
        this.queue.pop(this.queue[0]);
        this.queue.shift();

    }
peek(){
    let res = this.queue[0];
    console.log(res + " is at the top of the Queue");}

}

const qataar = new queue;
qataar.enqueue(2);
qataar.enqueue(3);
qataar.enqueue(4);
qataar.dequeue();
qataar.peek();
