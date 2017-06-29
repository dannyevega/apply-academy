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

// [10] --> [20] --> [30] --> null
// Create current variable set to this.head, prev set to null and failure message to be displayed if list is empty
// 1. Throw an error if the list is empty
// 2. If the list only has one node, then set this.head to current.next which is null
// 3. Iterate through the list so long as current.next is true -- when it's no longer true, we know weve reached the end of list
// 4. Set prev.next (which holds the current node) to point to null -- essentially, cutting off connection from last node
LinkedList.prototype.deleteEnd = function(){
	let current = this.head, prev = null, message = {failure: "Linked List is empty."};
	if(!current){
		throw new Error(message.failure);
	} else if(!current.next){
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

// [10] --> [20] --> [30] --> null
// Create current variable set to this.head
// 1. While there is a current value, check to see if that node's value is the one were looking for
// 2. If the value is the current nodes value, return true
// 3. Continue iterating to the next current node until we run out
// 4. Return false if not foun
LinkedList.prototype.contains = function(value){
	let current = this.head;
	while(current){
		if(current.value === value){
			return true;
		}
		current = current.next;
	}
	return false;
}

// [10] --> [20] --> [30] --> null
// Create current variable set to this.head, prev pointingto null, message set to failure message
// 1. First, check to see if the value were looking to delete is even found in our LinkedList -- throw error if not found
// 2. If the head node is the value were looking to delete, change this.head to null
// 3. Else, we want to iterate through the list so long as the current value is not equal to the value were looking for
// 4. Once the value were looking for is reached, the while loop will break out
// 5. We then set the current node's (at this point, its the prev variable) next property to the next node of the node we want to delete
LinkedList.prototype.deleteValue = function(value){
	let current = this.head, prev = null, message = {failure: "Value not found in Linked List."};
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

// [10] --> [20] --> [30] --> null
// Create current variable set to this.head, message set to failure message, length set to the lists length, count set to 1
// 1. Check to see whether the position were looking to return is not found in the list, if so, throw error
// 2. Iterate while the count is less than the position
// 3. As soon as the count is no longer less than the position, we can return the current node
LinkedList.prototype.returnNode = function(position){
	let current = this.head, length = this.length, count = 1, message = {failure: "Value not found in Linked List."};
	if(length === 0 || position < 1 || position > length){
		throw new Error(message.failure);
	}
	while(count < position){
		current = current.next;
		count++;
	}
	return current;
}
