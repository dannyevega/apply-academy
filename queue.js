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