Queue time complexity
╔═══════════╦═════════╦════════════╗
║ Algorithm ║ Average ║ Worst Case ║
╠═══════════╬═════════╬════════════╣
║ Space     ║ O(n)    ║ O(n)       ║
║ Search    ║ O(n)    ║ O(n)       ║
║ Insert    ║ O(1)    ║ O(1)       ║
║ Delete    ║ O(1)    ║ O(1)       ║
╚═══════════╩═════════╩════════════╝

// Creating a Queue class
function Queue(){
	this.collection = [];
}

Queue.prototype.print = function(){
	console.log(this.collection);
}

Queue.prototype.enqueue = function(value){
	this.collection.push(value);
}

Queue.prototype.dequeue = function(){
	return this.collection.shift();
}

Queue.prototype.front = function(){
	return this.collection[0];
}

Queue.prototype.size = function(value){
	return this.collection.length;
}

Queue.prototype.isEmpty = function(){
	return (this.collection.length === 0);
}