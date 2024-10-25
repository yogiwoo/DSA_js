class Node{
    constructor(data){
        this.data=data;
        this.next=null
    }
}

// let a=new node(1)
// let b=new node(2)
// let c=new node(3)
// let d=new node(4)

// a.next=b;
// b.next=c;
// c.next=d;

class linkedList{
    constructor(data){
        this.head=null;
        this.size=0;
    }

    append(data){
        let newNode=new Node(data)
        if(this.head==null){
            this.head=newNode
        }
        else{
            let current=this.head;
            while(current.next!=null){
                current=current.next;
            }
            current.next=newNode
        }
        this.size++
    }
    addtotop(data){
        let newNode=new Node(data);
        newNode.next=this.head;
        this.head=newNode;
        this.size++
    }
    addtoposition(data,index){

    }
    display(){
        let current=this.head;
        while(current!==null){
            console.log(current.data)
            current=current.next;
        }
    }
}
let ll=new linkedList()

ll.addtotop(7)
ll.append(10)
ll.append(20)
ll.append(30)
ll.append(10)
ll.append(40)
ll.display()