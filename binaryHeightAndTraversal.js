/*
Binary height just means the distance from the root node to the furthest down leaf node -- think of it as layers of a cake

DFS --> explore the root nodes before the leaf nodes -- goes down as far as possible along each branch before backtracking
BFS -- > explore the root nodes -- explores all the nodes in a given tree and neighbor nodes first before moving to the next level neighbors.
*/
// min height finds the distance from the root node to the first leaf nodes WITHOUT two children
BST.prototype.findMinHeight = function(node = this.root){
	if(node === null){
		return -1;
	}
	let left = this.findMinHeight(node.left);
	let right = this.findMinHeight(node.right);
	if(left < right){
		return left + 1;
	} else {
		return right + 1;
	}
}

// max height finds the distance from the root node down to the furthest possible node
BST.prototype.findMaxHeight = function(node = this.root){
	if(node === null){
		return -1;
	}
	let left = this.findMaxHeight(node.left);
	let right = this.findMaxHeight(node.right);
	if(left > right){
		return left + 1;
	} else {
		return right + 1;
	}
}

BST.prototype.inOrderTraversal = function(){
	let head = this.root;
	if(!head){
		return null;
	} else {
		let result = [];
		function traverseInOrder(node){
			if(node.left){
				traverseInOrder(node.left);
			}
			result.push(node.data);
			if(node.right){
				traverseInOrder(node.right);
			}
		}
		traverseInOrder(head);
		return result;
	}
}
// output = [1, 2, 3, 4, 5, 6, 7, 8, 9]

BST.prototype.preOrderTraversal = function(){
	let head = this.root;
	if(!head){
		return null;
	} else {
		let result = [];
		function traversePreOrder(node){
			result.push(node.data);
			if(node.left){
				traversePreOrder(node.left);
			}
			if(node.right){
				traversePreOrder(node.right);
			}
		}
		traversePreOrder(head);
		return result;
	}
}
// output --> [5, 3, 2, 1, 4, 7, 6, 8, 9]

BST.prototype.postOrderTraversal = function(){
	let head = this.root;
	if(!head){
		return null;
	} else {
		let result = [];
		function traversePostOrder(node){
			if(node.left){
				traversePostOrder(node.left);
			}
			if(node.right){
				traversePostOrder(node.right);
			}
			result.push(node.data);
		}
		traversePostOrder(head);
		return result;
	}
}
// output --> [1, 2, 4, 3, 6, 9, 8, 7, 5]

BST.prototype.breadthFirst = function(){
	let head = this.root, result = [], queue = [], node;
	if(head !== null){
		queue.push(head);
		while(queue.length > 0){
			node = queue.shift();
			result.push(node.data);
			if(node.left !== null){
				queue.push(node.left);
			}
			if(node.right !== null){
				queue.push(node.right);
			}
		}
		return result;
	} else {
		return null;
	}
}
// output --> [5, 3, 7, 2, 4, 6, 8, 1, 9]










