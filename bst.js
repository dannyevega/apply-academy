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
