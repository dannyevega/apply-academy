function Node(data){
	this.data = data;
	this.left = null;
	this.right = null;
}

function BST(){
	this.root = null;
}

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
