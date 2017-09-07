// Queue time complexity
// ╔═══════════╦═════════╦════════════╗
// ║ Algorithm ║ Average ║ Worst Case ║
// ╠═══════════╬═════════╬════════════╣
// ║ Space     ║ O(n)    ║ O(n)       ║
// ║ Search    ║ O(n)    ║ O(n)       ║
// ║ Insert    ║ O(1)    ║ O(1)       ║
// ║ Delete    ║ O(1)    ║ O(1)       ║
// ╚═══════════╩═════════╩════════════╝

// Creating a Queue class
function Queue(){
	this.collection = [];
}

Queue.prototype.enqueue = function(value){
	this.collection.push(value);
}

Queue.prototype.dequeue = function(){
	this.collection.shift();
}

Queue.prototype.print = function(){
	return this.collection;
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

// var queue = new Queue();
// queue.enqueue(3);
// queue.enqueue(6);
// queue.enqueue(9);
// console.log(queue.print());
// console.log("front: " + queue.front());
// console.log("size: " + queue.size());
// console.log(queue.isEmpty());
// queue.dequeue();
// console.log(queue.print());
// console.log("front: " + queue.front());
// console.log("size: " + queue.size());





// Creating a priority Queue class
function PriorityQueue(){
	this.collection = [];
	this.currentPriority = 0;
}

PriorityQueue.prototype.enqueue = function(element){
	if(this.isEmpty()){
		this.collection.push(element);
	} else {
		var added = false;
		for(var i = 0; i < this.collection.length; i++){
			if(element[1] < this.collection[i][1]){
				this.collection.splice(i, 0, element);
				added = true;
				break;
			}
		}
		if(!added){
			this.collection.push(element);
		}
	}
}

PriorityQueue.prototype.dequeue = function(){
	this.collection.shift();
}

PriorityQueue.prototype.print = function(){
	return this.collection;
}

PriorityQueue.prototype.front = function(){
	return this.collection[0];
}

PriorityQueue.prototype.size = function(value){
	return this.collection.length;
}

PriorityQueue.prototype.isEmpty = function(){
	return (this.collection.length === 0);
}

var pq = new PriorityQueue();
pq.enqueue(["Danny", 3]);
pq.enqueue(["Reynaldo", 1]);
pq.enqueue(["Juanga", 2]);
console.log(pq.print());
console.log("front: " + pq.front());
console.log("size: " + pq.size());
console.log(pq.isEmpty());
pq.dequeue();
console.log(pq.print());
console.log("front: " + pq.front());
console.log("size: " + pq.size());
pq.enqueue(["Ron", 2]);
console.log(pq.print());
console.log("front: " + pq.front());




