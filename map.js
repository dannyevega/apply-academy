// Creating Map data structure
function Map(){
	this.collection = {};
	this.count = 0;
}

Map.prototype.size = function(){
	return this.count;
}

Map.prototype.set = function(key, value){
	this.collection[key] = value;
	this.count++;
}

Map.prototype.has = function(key){
	return (key in this.collection);
}

Map.prototype.get = function(key){
	return (key in this.collection) ? this.collection[key] : null;
}

Map.prototype.delete = function(key){
	if(key in this.collection){
		delete this.collection[key];
		this.count--;
	}


Map.prototype.clear = function(key){
	this.collection = {};
	this.count = 0;
}

Map.prototype.values = function(key){
	var result = new Array();
	for (var key of Object.keys(this.collection)) {
		result.push(this.collection[key]);
	};
	return (result.length > 0) ? result : null;
}

