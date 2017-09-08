/*
A linked list is one of the most basic data structures. It is often compared to an array since many other data structures can be implemented with either an array or a linked list. They each have advantages and disadvantages.

A linked list consists of a group of nodes which together represent a sequence. Each node contains two things: the actual data being stored (which can be basically any type of data) and a pointer (or link) to the next node in the sequence. There are also doubly linked lists where each node has a pointer to both the next item and the previous item in the list.

The most basic operations in a linked list are adding an item to the list, deleting an item from the list, and searching the list for an item.

Linked list time complexity
╔═══════════╦═════════╦════════════╗
║ Algorithm ║ Average ║ Worst Case ║
╠═══════════╬═════════╬════════════╣
║ Space     ║ O(n)    ║ O(n)       ║
║ Search    ║ O(n)    ║ O(n)       ║
║ Insert    ║ O(1)    ║ O(1)       ║
║ Delete    ║ O(1)    ║ O(1)       ║
╚═══════════╩═════════╩════════════╝

*/

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

LinkedList.prototype.returnNodeAt = function(position){
	var current = this.head, length = this.length, count = 1;
	if(!current){
		errorMessage();
	} else {
		while(count < position){
			current = current.next;
			count++;
		}
		return current;
	}
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
