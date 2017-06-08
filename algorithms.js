/* Write a function, longestCommonSubstr(str1, str2) that takes two strings and returns the longest common substring. A substring is defined as any consecutive slice of letters from another string. */

function longestCommonSubstr(str1, str2){
	// create empty string variable to hold the longest string
	var longestSubstr = "";
	// iterate through the first string
	for(var i = 0; i < str1.length; i++){
		// iterate through the second string
		for(var j = 0; j < str2.length; j++){
			// if the character at each strings first index matches, well continue looking for more matches
			if(str1[i] === str2[j]){
				// create new variable to hold all matching letters
				var current = str1[i];
				// create new var to keep track of count from original index value so we can keep incrementing and checking if the following characters are a consecutive match
				var count = 1;
				// continue cheking until the letters no longer match or we reach the end of the string length
				// count MUST be less than each strings length AND each consecutive character must match to be pushed into current variable
				while(i + count < str1.length && j + count < str2.length && str1[i + count] === str2[j + count]){
					current += str1[i + count];
					count++;
				}
				// when weve reached the end of the string or letters no longer match, check to see if the current string is longer than the longestSubstr --> if it is, set it to the current string
				if(current.length > longestSubstr.length){
					longestSubstr = current;
				}
			}
		}
	}
	// return string
	return longestSubstr;
}
longestCommonSubstr("abc", "ab"); // --> "ab"
longestCommonSubstr("xab", "ab"); // --> "ab"

// WITHOUT COMMNENTS TO READ EASIER
function longestCommonSubstr(str1, str2){
	var longestSubstr = "";
	for(var i = 0; i < str1.length; i++){
		for(var j = 0; j < str2.length; j++){
			if(str1[i] === str2[j]){
				var current = str1[i];
				var count = 1;
				while(i + count < str1.length && j + count < str2.length && str1[i + count] === str2[j + count]){
					current += str1[i + count];
					count++;
				}
				if(current.length > longestSubstr.length){
					longestSubstr = current;
				}
			}
		}
	}
	return longestSubstr;
}





/* Write a function called sumOfNums that takes an array of integers and returns their sum. Use recursion. */
function sumOfNums(array){
	var result = 0;
	for(var i = 0; i < array.length; i++){
		result += array[i];
	}
	return result;
}

function sumOfNums(array){
	var result = 0;
	function helper(idx){
		if(idx === array.length){
			return;
		} else {
			result += array[idx];
			helper(idx + 1);
		}
	}
	helper(0);
	return result;
}

function sumOfNums(array){
	var result = 0;
	function helper(idx){
		if(idx < 0){
			return;
		} else {
			result += array[idx];
			helper(idx - 1);
		}
	}
	helper(array.length - 1);
	return result;
}

function sumOfNums(array){
	if(array.length === 1){
		return array[0];
	}
	return array[0] + sumOfNums(array.slice(1, array.length));
}
sumOfNums([1,2,3]);
1 + sumOfNums([2, 3]);
1 + 2 + sumOfNums([3]);
1 + 2 + 3
1 + 5
6

function sumOfNums(array){
	if(array.length === 1){
		return array[0];
	}
	return array.pop() + sumOfNums(array);
}
sumOfNums([1,2,3]);
3 + sumOfNums([1, 2]);
3 + 2 + sumOfNums([1]);
3 + 2 + 1
3 + 3
6





/* Write a method called digitalRoot that takes in a number. It should sum the digits of a positive integer. If it is greater than or equal to 10, sum the digits of the resulting number. Keep repeating until there is only one digit in the result, called the "digital root". Do not use string conversion within your method. */
input = 11
output = 2
input = 13
output = 4

// parseInt because it returns the number rounded down
// 13 % 10 = 3
// 13 / 10 = 1.3 --> use parseInt
// add these numbers together
// can check as long as num is greater than 0 and keep adding to your count
// OR recursively check base case if num < 10, return then add the result of modulo plus calling the function again with the new number

function digitalRoot(num){
	var count = 0;
	while(num > 0){
		count += parseInt(num % 10);
		num = parseInt(num / 10);
	}
	return count;
}

function digitalRoot(num){
	if(num < 10){
		return num;
	}
	return parseInt(num % 10) + digitalRoot(parseInt(num / 10));
}





/* Write a function, fibs(num) which returns the first n elements from the fibonnacci sequence, given n.

Basically, pass in a value and return all of the elements up to but not including that value.

Sample Input:
fibs(5)

Sample Output:
[0,1,1,2,3]
*/

0,1,1,2,3,5,8,13
0 1 2 3 4 5 6 7

function fibs(num){
	var fibonacci = [0, 1];
	if(num === 0) return [];
	if(num === 1) return [0];

	while(fibonacci.length < num){
		fibonacci.push(fibonacci[fibonacci.length - 2] + fibonacci[fibonacci.length - 1]);
	}

	return fibonacci;
}

function fibs(num){
	var fibonacci = [0, 1];
	if(num === 0){
		return [];
	}
	function helper(idx){
		if(idx > num){
			return;
		} else {
			fibonacci[idx] = fibonacci[idx - 2] + fibonacci[idx - 1];
			helper(idx + 1);
		}
	}
	helper(2);
	fibonacci.splice(fibonacci.length - 1);
	return fibonacci;
}





/* Write a JavaScript function that takes a string and returns true if it's a palindrome, false if it's not.

Sample Input:
isPalindrome("racecar");
isPalindrome("desire")

Sample Output:
true
false

*/
function isPalindrome(string){
	var splitStr = string.split(""), reverse = "";
	for(var i = splitStr.length - 1; i >= 0; i--){
		reverse += splitStr[i];
	}
	return (reverse === string) ? true : false;
}

function isPalindrome(str){
	var result = "";
	function helper(index){
		if(index < 0){
			return;
		} else {
			result += str[index];
			helper(index - 1);
		}
	}
	helper(str.length - 1);
	return (result === str) ? true : false;
}

function isPalindrome(str){
	function helper(firstIdx, lastIdx, string){
		if(lastIdx <= firstIdx){
			return (string.join("") === str) ? true : false;
		} else {
			swap(firstIdx, lastIdx, string);
			return helper(firstIdx + 1, lastIdx - 1, string);
		}
	}

	function swap(a, b, string){
		var temp = string[a];
		string[a] = string[b];
		string[b] = temp;
	}
	return helper(0, str.length - 1, str.split(""));
}
isPalindrome("racecar")





function uniqueSub(str){
	var length = str.length, result = [], map = {}, uniqueSubs = [];
	for(var i = 0; i < length; i++){
		for(var j = i + 1; j <= length; j++){
			result.push(str.substr(i, j));
		}
	}
	for(var i = 0; i < result.length; i++){
		map[result[i]] = undefined;
	}
	for(var k in map){
		uniqueSubs.push(k);
	}
	return uniqueSubs;
}









