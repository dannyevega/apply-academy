function Node(value){
	this.value = value;
	this.next = null;
}

function LinkedList(){
	this.head = null;
	this.length = 0;
}

// [10] --> [20] --> [30] --> null
// 1. First create new node with value --> well be inserting 5
// 2. Make new node point to current head --> i.e make node 5 point to current head which will be 10
// 3. Update this.head to point to new node --> now make sure this.head points to the newly prepended node

// prepend will add to beginning of list by passing in a value
LinkedList.prototype.addStart = function(value){
	let node = new Node(value);
	node.next = this.head;
	this.head = node;
	this.length++;
}

// [10] --> [20] --> [30] --> null
// 1. Create new node, prev variable initially set to null and current set to this.head
// 2. First, check to see if the list is empty -- if it is, make node = this.head
// 3. Loop while current is true -- at each iteration, prev will be set to the current node and current will be set to current.next
// 4. As soon as current is no longer true, we know we've reached the last node in the list and can add the value at the end
// 5. Since 'prev' was the last variable to hold the current value (in this case, 30), we are able to make prev.next = node;
LinkedList.prototype.addEnd = function(value){
	let node = new Node(value), prev = null, current = this.head;
	if(!current){
		this.head = node;
		this.length++;
	} else {
		while(current){
			prev = current;
			current = current.next;
		}
		prev.next = node;
		this.length++;
	}
}


// [10] --> [20] --> [30] --> null
// Create a new node variable, count set to 1, prev set to null, current set to this.head
// 2. First, check to see if the list is empty -- if it is, make node = this.head
// 3. Check while the count is less than the position passed in i.e. 1 < 3
// 4. At each iteration, make prev set to current and current set to curent.next
// 5. As soon as count is no longer less than position, we know we've reached the position where we want to add our node
// 6. Make prev.next point to node and node.next point to current;
LinkedList.prototype.addAtPosition = function(value, position){
	let node = new Node(value), count = 1, prev = null, current = this.head;
	if(!current){
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

// [10] --> [20] --> [30] --> null
// Create current variable set to this.head and failure message to be displayed if list is empty
// 1. If list is not empty, set this.head to point to current.next -- essentially, cutting off connection from original this.head
LinkedList.prototype.deleteStart = function(){
	let current = this.head, message = {failure: "Linked List is empty."};
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
