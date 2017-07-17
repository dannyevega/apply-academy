function Node(data){
	this.data = data;
	this.left = null;
	this.right = null;
}

function BST(){
	this.root = null;
}

// Use of helper function 'search' for recursive calling
BST.prototype.add = function(data){
	let current = this.root;
	if(!current){
		this.root = new Node(data);
		return;
	} else {
		let search = function(current){
			if(data < current.data){
				if(current.left === null){
					current.left = new Node(data);
					return;
				} else {
					return search(current.left);
				}
			} else if (data > current.data){
				if(current.right === null){
					current.right = new Node(data);
					return;
				} else {
					return search(current.right);
				}
			} else {
				return null;
			}
		}
		return search(current);
	}
}

let bst = new BST();
bst.add(5)
bst.add(3)
bst.add(7)
bst.add(2)
bst.add(4)
bst.add(6)
bst.add(8)
bst.add(1)
bst.add(9)

BST.prototype.findMin = function(){
	let current = this.root;
	while(current.left){
		current = current.left;
	}
	return current.data;
}

BST.prototype.findMax = function(){
	let current = this.root;
	while(current.right){
		current = current.right;
	}
	return current.data;
}

BST.prototype.find = function(data){
	let current = this.root;
	while(current.data !== data){
		if(data < current.data){
			current = current.left;
		} else {
			current = current.right;
		}
	}
	return current;
}

BST.prototype.remove = function(data){
	let removeNode = function(node, data){
		if(node === null){
			return null;
		}
		if(data === node.data){
			if(node.left === null && node.right === null){
				return null;
			} else if (node.left === null){
				return node.right;
			} else if (node.right === null){
				return node.left;
			} else {
				let temp = node.right;
				while(temp.left !== null){
					temp = temp.left;
				}
				node.data = temp.data;
				node.right = removeNode(node.right, temp.data);
				return node;
			}
		} else if (data < node.data){
			node.left = removeNode(node.left, data);
			return node;
		} else {
			node.right = removeNode(node.right, data);
			return node;
		}
	}
	this.root = removeNode(this.root, data);
}