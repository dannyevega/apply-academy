function product(a, b){
	var sum = 0;
	for(var i = 0; i < b; i++){
		sum += a;
	}
	return sum;
}

function power(a, b){
	if(b < 0){
		return 0; // error or something
	} else if(b === 0){
		return 1;
	} else {
		return a * power(a, b - 1);
	}
}

function div(a, b){
	var count = 0, sum = b;
	while(sum <= a){
		sum += b;
		count++
	}
	return count;
}

function findSquareRoot(n){
	function helper(num, min, max){
		if(max < min){
			return -1;
		} else {
			var guess = Math.floor((min + max) / 2);
			if(guess * guess === num){
				return guess;
			} else if(guess * guess < num){
				return helper(num, guess + 1, max);
			} else {
				return helper(num, min, guess - 1);
			}
		}
	}
	return helper(n, 1, n);
}

function findPairs(arr, diff){
	var map = {}, result = [];
	for(var i = 0; i < arr.length; i++){
		map[arr[i]] = i;
	}
	for(var i = 0; i < arr.length; i++){
		var num = arr[i] + diff;
		if(map[num]){
			result.push([arr[i], arr[map[num]]]);
		}
	}
	return result;
}
findPairs([1,7,5,9,2,12,3], 2);

function uniqueChars(str){
	let map = {};
	for(var i = 0; i < str.length; i++){
		if(map[str[i]]){
			return false;
		}
		map[str[i]] = i;
	}
	return true;
}
uniqueChars("hello") // should return false
uniqueChars("about") // should return true




































