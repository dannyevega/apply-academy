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
	if(position === 0){
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
	this.length++;
}

var linky = new LinkedList();
linky.add(2);
linky.add(4);
linky.add(6);
linky.add(8);

function errorMessage(){
	var message = {failure: "Linked List is empty."};
	throw new Error(message.failure);
}

function nodeNotFoundMessage(){
	var message = {failure: "Node is not found in this list."};
	throw new Error(message.failure);
}

LinkedList.prototype.deleteStart = function(){
	var current = this.head;
	if(this.length === 0){
		errorMessage();
	} else {
		this.head = current.next;
		this.length--;
	}
}

LinkedList.prototype.delete = function(){
	var current = this.head, prev = null;
	if(this.length === 0){
		errorMessage();
	} else {
		while(current.next){
			prev = current;
			current = current.next;
		}
		prev.next = null;
	}
	this.length--;
}

LinkedList.prototype.contains = function(value){
	var current = this.head;
	while(current){
		if(current.value === value){
			return true;
		}
		current = current.next;
	}
	return false;
}

LinkedList.prototype.deleteValue = function(value){
	var current = this.head, prev = null;
	if(this.length === 0){
		errorMessage();
	}
	if(this.contains(value) === false){
		nodeNotFoundMessage();
	} else if(current.value === value){
		this.head = current.next;
	} else {
		while(current.value !== value){
			prev = current;
			current = current.next;
		}
		prev.next = current.next;
	}
	this.length--;
}

LinkedList.prototype.deleteNodeAt = function(position){
	var current = this.head, prev = null, count = 1;
	if(position === 1){
		this.head = current.next;
	} else {
		while(count < position){
			prev = current;
			current = current.next;
			count++;
		}
		prev.next = current.next;
	}
	this.length--;
}
