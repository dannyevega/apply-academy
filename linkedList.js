function Node(value){
	this.value = value;
	this.next = null;
}

function LinkedList(){
	this.head = null;
}

LinkedList.prototype.prepend = function(value){
	var node = new Node(value);
	node.next = this.head;
	this.head = node;
}

LinkedList.prototype.add = function(value){
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



