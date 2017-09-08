/*
A stack is a basic data structure where you can only insert or delete items at the top of the stack. It is kind of similar to a stack of books. If you want to look at a book in the middle of the stack you must take all of the books above it off first.

The stack is considered LIFO (Last In First Out) — meaning the last item you put in the stack is the first item that comes out of the stack

There are three main operations that can be performed on stacks: inserting an item into a stack (called ‘push’), deleting an item from the stack (called ‘pop’), and displaying the contents of the stack (sometimes called ‘pip’).

Stack time complexity
╔═══════════╦═════════╦════════════╗
║ Algorithm ║ Average ║ Worst Case ║
╠═══════════╬═════════╬════════════╣
║ Space     ║ O(n)    ║ O(n)       ║
║ Search    ║ O(n)    ║ O(n)       ║
║ Insert    ║ O(1)    ║ O(1)       ║
║ Delete    ║ O(1)    ║ O(1)       ║
╚═══════════╩═════════╩════════════╝
*/

// STACKS

// functions: push, pop, peek, length

// Using arrays -- using a stack to check for palindrome
// letters array is our stack
var letters = [], word = "racecar", reverse = "";

// push letters of word into stack
for(var i = 0; i < word.length; i++){
	letters.push(word[i]);
}

// pop off the stack in reverse order
for(var i = 0; i < word.length; i++){
	reverse += letters.pop();
}

// check for palindrome
var isPal = (word === reverse) ? true : false;
// console.log(isPal);

// Creating a Stack class
function Stack(){
	this.count = 0;
	this.storage = {};
}

Stack.prototype.push = function(value){
	this.storage[this.count] = value;
	this.count++;
}

Stack.prototype.pop = function(){
	if(this.count === 0) { return undefined; }
	this.count--;
	var result = this.storage[this.count];
	delete this.storage[this.count];
	return result;
}

Stack.prototype.size = function(){
	return this.count;
}

Stack.prototype.peek = function(){
	return this.storage[this.count - 1];
}

var stack = new Stack();
stack.push(2);
stack.push(4);
stack.push(6);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());










