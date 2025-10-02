class Node {
    constructor(data, next) {
        this.data = data;
        this.next = null;
    }

}

let a1 = new Node(10)

let a2 = new Node(20)
let a3 = new Node(30)
let a4 = new Node(40)
let a5 = new Node(50)

a1.next=a2;
a2.next=a3;
a3.next=a4;
a4.next=a5;


function list(head){
    let current=head;
    while(current!=null){
        console.log(current.data)
        current=current.next
    }
}

list(a1)