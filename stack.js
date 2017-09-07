// Stack time complexity
// ╔═══════════╦═════════╦════════════╗
// ║ Algorithm ║ Average ║ Worst Case ║
// ╠═══════════╬═════════╬════════════╣
// ║ Space     ║ O(n)    ║ O(n)       ║
// ║ Search    ║ O(n)    ║ O(n)       ║
// ║ Insert    ║ O(1)    ║ O(1)       ║
// ║ Delete    ║ O(1)    ║ O(1)       ║
// ╚═══════════╩═════════╩════════════╝

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
console.log(isPal);

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

















