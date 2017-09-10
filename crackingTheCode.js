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

function findAllPermutations(str){
	// result array
	let result = [];

	// this is our base case -- since were using recursion, it will always return one single letter to be concatanated to the rest -- this will continue until each level falls off the stack
	if(str.length === 1){
		result.push(str);
		return result;
	}

	// iterate through the length of the string
	for(let i = 0; i < str.length; i++){
		// hold the position of the first character
		let firstChar = str[i];
		// find the remaining characters
		let remainingChars= str.slice(0, i) + str.slice(i + 1);
		// recursively call the characters til it gets broken down to one character and can execute at each stack
		let innerPerms = findAllPermutations(remainingChars);
		// now, well have our first character and can concatanate with each other letter --> "a" + "bc", "a" + "cb"
		for(let j = 0; j < innerPerms.length; j++){
			result.push(firstChar + innerPerms[j]);
		}
	}
	// return the result
	return result;
}

// first call
str = "abc"
firstChar = "a"
remainingChars = "bc"
innerPerms = findAllPermutations("bc")
// second call
innerPerms = findAllPermutations("bc")
firstChar = "b"
remainingChars = "c"
innerPerms = findAllPermutations("c")
// third call
innerPerms = findAllPermutations("c") // --> return ["c"]
// back to second call
// pushes "bc" in inner for loop then goes to back to outer for loop
firstChar = "c"
remainingChars = "b"
innerPerms = findAllPermutations("b")
// fourth call
innerPerms = findAllPermutations("b") // --> returns ["b"]
// back to second call
// pushes "cb" in inner for loop then goes to back to outer for loop
// back to inner for loop in first call
"a" + "bc" --> "abc"
"a" + "cb" --> "acb"
// then moves to the next character "b" and does the same for each character


































