class node{
    constructor(data){
        this.data=data;
        this.next=null
    }
}

let a=new node(1)
let b=new node(2)
let c=new node(3)
let d=new node(4)

a.next=b;
b.next=c;
c.next=d;

function print(head)
{
    while(head){
        console.log(head.data)
        head=head.next;
    }
}
