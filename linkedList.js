
function linkedList() {
  this.head = null;
}

function node(data) {
  this.data = data;
  this.next = null;
}

linkedList.prototype.traverse = function(){
  var data,next;
  while (this.head !== null){
    data = this.head.data;
    next = this.head.next && this.head.next.data || "null";
    console.log("data: " + data + " " +"next: " + next);
    this.head = this.head.next;
  }
}

linkedList.prototype.addLast = function(data) {
  var newNode = new node(data);
  var last = this.head;
  while (last.next !== null){
    last = last.next;
  }
  last.next = newNode;
}

linkedList.prototype.addFirst = function(data){
  var newNode = new node(data);
  if(this.head === null){ //if there is no node in list
    this.head = newNode;
    return;
  }
  newNode.next = this.head;
  this.head = newNode;
}

linkedList.prototype.insertAfter = function(prevNode,data){
  var newNode = new node(data);
  newNode.next = prevNode.next;
  prevNode.next = newNode;
}

linkedList.prototype.delete = function(key){
  var temp = this.head;
  var prev = null;
  //if head has key
  if(temp !== null && temp.data === key){
    this.head = temp.next;
    return;
  }
  while( temp !== null && temp.data !== key){
    prev = temp;
    temp = temp.next;
  }
  if(temp.next === null) {
    return;
  }
   prev.next = temp.next;
}
/** refer http://algorithms.tutorialhorizon.com/reverse-a-linked-list/ **/
LinkedList.prototype.reverseByIterate = function() {
  var  next = null;
  var  prev = null;
  var cur = this.head;
	while(cur){
		next = cur.next;
		cur.next = prev;
		prev = cur;
		cur = next;
  }
  this.head = prev;
}

var list = new linkedList();
var node1 = new node(1);
var node2 = new node(2);
var node3 = new node(3);
list.head = node1;
list.head.next = node2;
node2.next = node3;

//list.traverse();

//list.addLast("4");
//list.addLast("5");
// list.traverse();
 //list.addFirst("-a");
// list.traverse();
//list.insertAfter(node2,4);
// list.traverse();
//list.traverse();

//list.traverse();
//list.delete(3);
//list.delete("-a");

//list.traverse();
