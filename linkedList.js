function Node(value){
	this.value = value;
	this.next = null;
}

function LinkedList(){
	this.head = null;
}

LinkedList.prototype.addAtStart = function(value){
	var node = new Node(value);
	node.next = this.head;
	this.head = node;
}

LinkedList.prototype.addAtEnd = function(value){
	var node = new Node(value), prev = null, current = this.head;

	while(current){
		prev = current;
		current = current.next;
	}
	if(prev){
		prev.next = node;
	} else {
		this.head = node;
	}
}

LinkedList.prototype.addAtPosition = function(value, position){
	var node = new Node(value), count = 1, prev = null, current = this.head;

	if(position === 1){
		node.next = this.head;
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
}

LinkedList.prototype.deleteAtStart = function(){
	var current = this.head, message = {failure: "Linked List is empty."};

	if(!current){
		throw new Error(message.failure);
	} else {
		this.head = current.next;
	}
}

LinkedList.prototype.deleteAtEnd = function(){
	var current = this.head, prev = null;

	if(current.next === null){
		this.head = current.next;
	} else {
		while(current.next){
			prev = current;
			current = current.next;
		}
		prev.next = null;
	}
}

LinkedList.prototype.deleteValue = function(value){
	var current = this.head, prev = null;

	if(current.value === value){
		this.head = current.next;
	} else {
		while(current.value !== value){
			prev = current;
			current = current.next;
		}
		prev.next = current.next;
	}
}

