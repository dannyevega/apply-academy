function Node(value){
	this.value = value;
	this.next = null;
}

function LinkedList(){
	this.head = null;
	this.length = 0;
}

LinkedList.prototype.addStart = function(value){
	var node = new Node(value);
	node.next = this.head;
	this.head = node;
	this.length++;
}

LinkedList.prototype.add = function(value){
	var current = this.head, prev = null, node = new Node(value);
	if(!current){
		this.head = node;
	} else {
		while(current){
			prev = current;
			current = current.next;
		}
		prev.next = node;
	}
	this.length++;
}

LinkedList.prototype.addPosition = function(value, position){
	var current = this.head, prev = null, count = 1, node = new Node(value);
	if(!current){
		this.head = node;
	} else {
		while(count < position){
			prev = current;
			current = current.next;
			count++;
		}
		prev.next = node;
		node.next = current;
	}
	this.length++;
}

var linky = new LinkedList();
linky.add(2);
linky.add(4);
linky.add(6);
linky.add(8);

LinkedList.prototype.deleteStart = function(){
	var current = this.head;
	this.head = current.next
	this.length--;
}


















