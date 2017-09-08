/*
A tree is a data structure composed of nodes It has the following characteristics:
1. Each tree has a root node (at the top).
2. The root node has zero or more child nodes.
3. Each child node has zero or more child nodes, and so on.

A binary search tree adds these two characteristics:
1. Each node has up to two children.
2. For each node, its left descendents are less than the current node, which is less than the right descendents.

Binary search trees allow fast lookup, addition and removal of items. The way that they are set up means that, on average, each comparison allows the operations to skip about half of the tree, so that each lookup, insertion or deletion takes time proportional to the logarithm of the number of items stored in the tree.

Binary search time complexity
╔═══════════╦══════════╦════════════╗
║ Algorithm ║ Average  ║ Worst Case ║
╠═══════════╬══════════╬════════════╣
║ Space     ║ O(n)     ║ O(n)       ║
║ Search    ║ O(log n) ║ O(n)       ║
║ Insert    ║ O(log n) ║ O(n)       ║
║ Delete    ║ O(log n) ║ O(n)       ║
╚═══════════╩══════════╩════════════╝
*/

function Node(value){
	this.value = value;
	this.left = null;
	this.right = null;
}

function BST(){
	this.root = null;
}

BST.prototype.add = function(value){
	var head = this.root;
	if(!head){
		this.root = new Node(value);
		return;
	} else {
		var search = function(current){
			if(value < current.value){
				if(current.left === null){
					current.left = new Node(value);
					return;
				} else {
					return search(current.left);
				}
			} else if(value > current.value){
				if(current.right === null){
					current.right = new Node(value);
					return;
				} else {
					return search(current.right);
				}
			} else {
				return null;
			}
		}
		return search(head);
	}
}

BST.prototype.findMin = function(){
	var current = this.root;
	while(current.left !== null){
		current = current.left;
	}
	return current.value;
}

BST.prototype.findMax = function(){
	var current = this.root;
	while(current.right !== null){
		current = current.right;
	}
	return current.value;
}

var bst = new BST();
bst.add(5)
bst.add(3)
bst.add(7)
bst.add(2)
bst.add(4)
bst.add(6)
bst.add(8)
bst.add(1)
bst.add(9)

BST.prototype.remove = function(data){
	let removeNode = function(node, data){
		if(node === null){
			return null;
		}
		if(data === node.data){
			if(node.left === null && node.right === null){
				return null;
			} else if(node.left === null){
				return node.right;
			} else if(node.right === null){
				return node.left;
			} else {
				let temp = node.right;
				while(temp.left !== null){
					temp = temp.left;
				}
				node.data = temp.data;
				node.right = removeNode(node.right, data);
				return node;
			}
		} else if(data < node.data){
			node.left = removeNode(node.left, data);
			return node;
		} else {
			node.right = removeNode(node.right, data);
			return node;
		}
	}
	removeNode(this.root, data);
}













