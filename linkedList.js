function Node(value){
	this.value = value;
	this.next = null;
}

function LinkedList(){
	this.head = null;
	this.length = 0;
}

LinkedList.prototype.addAtStart = function(value){
	var node = new Node(value);
	node.next = this.head;
	this.head = node;
	this.length++;
}

LinkedList.prototype.addAtEnd = function(value){
	var node = new Node(value), prev = null, current = this.head;

	while(current){
		prev = current;
		current = current.next;
	}
	if(prev){
		prev.next = node;
		this.length++;
	} else {
		this.head = node;
		this.length++;
	}
}

LinkedList.prototype.addAtPosition = function(value, position){
	var node = new Node(value), count = 1, prev = null, current = this.head;

	if(position === 1){
		node.next = this.head;
		this.head = node;
		this.length++;
	} else {
		while(count < position){
			prev = current;
			current = current.next;
			count++;
		}
		prev.next = node;
		node.next = current;
		this.length++;
	}
}

LinkedList.prototype.deleteAtStart = function(){
	var current = this.head, message = {failure: "Linked List is empty."};

	if(!current){
		throw new Error(message.failure);
	} else {
		this.head = current.next;
		this.length--;
	}
}

LinkedList.prototype.deleteAtEnd = function(){
	var current = this.head, prev = null, message = {failure: "Linked List is empty."};

	if(!current){
		throw new Error(message.failure);
	} else if(current.next === null){
		this.head = current.next;
		this.length--;
	} else {
		while(current.next){
			prev = current;
			current = current.next;
		}
		prev.next = null;
		this.length--;
	}
}

LinkedList.prototype.contains = function(value){
	var current = this.head;

	while(current !== null){
		if(current.value === value){
			return true;
		}
		current = current.next;
	}
	return false;
}

LinkedList.prototype.deleteValue = function(value){
	var current = this.head, prev = null, message = {failure: "Value not found in this Linked List"};

	if(!this.contains(value)){
		throw new Error(message.failure);
	}

	if(current.value === value){
		this.head = current.next;
		this.length--;
	} else {
		while(current.value !== value){
			prev = current;
			current = current.next;
		}
		prev.next = current.next;
		this.length--;
	}
}

LinkedList.prototype.returnNodeAt = function(position){
	var current = this.head, length = this.length, count = 1, message = {failure: "Value not found in this Linked List"};

	if(length === 0 || position < 1 || position > length){
		throw new Error(message.failure);
	}

	while(count < position){
		current = current.next;
		count++;
	}
	return current;
}
