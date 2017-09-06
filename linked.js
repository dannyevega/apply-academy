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
	this.length++
}

LinkedList.prototype.add = function(value){
	var current = this.head, node = new Node(value);
	if(!current){
		this.head = node;
	} else {
		while(current.next){
			current = current.next;
		}
		current.next = node;
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

linky = new LinkedList();
linky.add(1);
linky.add(2);
linky.add(3);
linky.add(4);

