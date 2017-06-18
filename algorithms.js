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
[0,1,1,2,3] */
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
false */
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





/* Write a method that finds all the unique substrings for a word.

Sample input:
"aab"

Sample output:
["a", "aa", "aab", "ab", "b"] */
function uniqueSubs(str){
	// create empty array result to store all substrings of the string passed in
	// create empty uniqueSubs array to store all unique substrings as there will likely be duplicates
	// empty map to store unique properties
	var result = [], uniqueSubs = [], map = {};
	// iterate through the string starting at index 0 for the outer loop and add 1 to the index in the inner loop
	// this is so you'll be able to slice the string from the index and 1 over each time i.e. "a" --> "aa" --> "aab" & so on
	for(var i = 0; i < str.length; i++){
		for(var j = i + 1; j <= str.length; j++){
			result.push(str.slice(i, j));
		}
	}
	// now we have all the substrings in the results array but they are not unique ["a", "aa", "aab", "a", "ab", "b"]
	// since we have duplicates, we set each substring as a key with the value of true (value is arbitrary, just need a place holder) because pushing to a map will not push duplicates therefore we know each key in the map is unique
	for(var i = 0; i < result.length; i++){
		map[result[i]] = true;
	}
	// iterate through the map and push each key into the uniqueSubs array
	for(var k in map){
		uniqueSubs.push(k);
	}
	// return uniqueSubs array
	return uniqueSubs;
}
uniqueSubs("aab");

/* without comments */
function uniqueSubs(str){
	var result = [], uniqueSubs = [], map = {};
	for(var i = 0; i < str.length; i++){
		for(var j = i + 1; j <= str.length; j++){
			result.push(str.slice(i, j));
		}
	}
	for(var i = 0; i < result.length; i++){
		map[result[i]] = true;
	}
	for(var k in map){
		uniqueSubs.push(k);
	}
	return uniqueSubs;
}
uniqueSubs("aab");

// since "a" is not unique, thats why we pass the character into the map so it will store the character as a key with its value -- pushing duplicates into a map will not store it twice so we know each key is unique
i = 0
j = 1 "a"

i = 0
j = 2 "aa"

i = 0
j = 3 "aab"

i = 1
j = 2 "a"

i = 1
j = 3 "ab"

i = 2
j = 3 "b"





/* If a word starts with a vowel ('a', 'e', 'i', 'o', 'u', or 'y'), just append "way" to the end of the word.

If a word starts with a consonant (a letter that's not a vowel), move all consonants leading up to the first vowel to the end of the word and add an "ay" at the very end

Given a word, translate it into Pig Latin.

Sample input:
"lit"
"apple"

Sample output:
"itlay"
"appleway" */
function pigLatin(word){
	var result = "";
	// regex to check for vowels
	var regex = /[aeiouy]/gi;
	// check if first letter in word is vowel -- if it is, return word as is and add 'way' at end
	if(word[0].match(regex)){
		result = word + "way";
	} else {
		// match returns an array with all of the matches found using the regex passed in
		// we pass [0] to get the first vowel in the array
		// then pass that vowel into the indexOf function to find where it is located in the string -- save as firstVowel variable
		var firstVowel = word.indexOf(word.match(regex)[0]);
		// use substr to cut the string from the first vowel to end of the strings length
		// add all the consonants before the firstVowel using substr from 0 index up until the firstVowel
		// add 'ay' at the end
		result = word.substr(firstVowel) + word.substr(0, firstVowel) + "ay";
	}
	// return the result
	return result;
}





/* add all values in a given rectangle in a matrix passed by the coordinates left and right
only adds elements if they are its the entire inner array -- cant pass other coordinates to get rectangles skipping any elements
you wouldnt be able to do left = [1,0], right = [2,1] to get 8


input:
left = [1,0]
right = [2,2]
0 1 2
2 1 3
2 3 1

output:
12
2 + 1 + 3 + 2 + 3 + 1 = 12 */
function matrixSum(matrix, left, right){
	// empty sum variable to keep count
	var sum = 0;
	// x coords in left and right coordinates tell you how much to loop i.e. left = [1,1] right = [2,2] -- > 0 and 2 is range to loop thru
	for(var i = left[0]; i <= right[0]; i++){
		// you're always in the array you want to check because i = left[0] === 1 --> matrix[1] === [2,1,3]
		// inner loop tells you what index to start counting from within inner array
		// make sure to set j = 0 + left[1] which whill tell you the position to start from i.e. matrix[i][j] === matrix[1][1] --> 1
		// since we have the position, we know where to start and add thru the length of the array
		for(var j = 0 + left[1]; j < matrix[i].length; j++){
			sum += matrix[i][j];
		}
	}
	// return sum
	return sum;
}
matrixSum([[0,1,2], [2,1,3], [2,3,1]], [1,1], [2,2]);





/* add all diagonal values in a given matrix

input:
left = [0,0]
right = [2,2]
3 1 2
2 2 3
2 3 1

output:
6
3 + 2 + 1 = 12 */
function diagonalMatrix(matrix, left, right){
	// empty sum variable to keep count
	var sum = 0;
	// x coords in left and right coordinates tell you how much to loop i.e. left = [0,0] right = [2,2] -- > 0 and 2 is range to loop thru
	for(var i = left[0]; i <= right[0]; i++){
		// i holds the position of the array and index you want to grab
		// matrix[0][0] --> 5
		// matrix[1][1] --> 4
		// matrix[2][2] --> 3
		sum += matrix[i][i];
	}
	// return the sum
	return sum;
}
diagonalMatrix([[5,1,2], [2,4,3], [2,5,3]], [1,1], [2,2]);





/* this matrix will return sum of all values for any indices you pass in

input: [1,2], [2,3]
[0,1,2,1]
[2,2,1,3]
[2,4,3,1]

output:
8
1 + 3 + 3 + 1 = 8 */
function anyMatrixSum(matrix, left, right){
	var sum = 0;
	for(var i = left[0]; i <= right[0]; i++){
		for(var j = 0 + left[1]; j <= right[1]; j++){
			sum += matrix[i][j];
		}
	}
	return sum;
}





function caesarCipher(string, shift){
	// empty variable to hold result
	var result = "";
	// put all letters of alphabet into array to check the indices of the string passed in
	var letters = "abcdefghijklmnopqrstuvwxyz".split("");

	// iterate through the length of the string
	for(var i = 0; i < string.length; i++){
		// get each current letter in the string
		var char = string[i];
		// check if current element is a space -- push to result if it is
		if(char === " "){
			result += " ";
		} else {
			// its not an empty space -- get index of each character i.e. "d" --> 3
			var index = letters.indexOf(char);
			// create new letter to push in -- old index + amount to shift over i.e. letters[3 + 2] === letters[5] --> "f"
			// we modulo by amount of letters in alphabet, 26 to account for letters at end of alphabet i.e. "y" shift over 2 should be "a"
			// without modulo, would return undefined because letters[24 + 2] === letters[26] which does not exist
			var newLetter = letters[(index + shift) % 26];
			// push newLetter to result
			result += newLetter;
		}
	}
	// return result
	return result;
}





function validIP(string){
	var periods = 0, split, isValid;
	for(var i = 0; i < string.length; i++){
		if(string[i] === "."){
			periods += 1;
		}
	}
	if(!periods === 3){
		return false;
	} else {
		split = string.split(".");
		split = split.map(function(el){
			return parseInt(el);
		});
		isValid = split.filter(function(num){
			return num >= 0 && num <= 255;
		});
		return (isValid.length === 4) ? true : false;
	}
}





/* merge two sorted arrays into one sorted array

input: [1, 5, 7], [2, 3, 6]
output: [1,2,3,5,7]; */
function mergeSortedArrays(array1, array2){
	var result = [];
	function helper(firstIndex, secondIndex){
		// base case -- if BOTH indices are bigger than the length of its array, we know to return
		if(firstIndex > array1.length && secondIndex > array2.length){
			return result;
		} else {
			// check to see if both elements exist
			if(array1[firstIndex] && array2[secondIndex]){
				// if element in first array is less than element in second array at same position, push into result -- increment firstIndex and call helper function again
				if(array1[firstIndex] < array2[secondIndex]){
					result.push(array1[firstIndex]);
					firstIndex++;
					return helper(firstIndex, secondIndex);
				} else {
					// else the element in second array in same position is bigger, push into result
					result.push(array2[secondIndex]);
					secondIndex++;
					return helper(firstIndex, secondIndex);
				}
			}
			// at end, were not going to have two elements to compare because only 1 element will be left over
			// 1 & 2 --> push in 1
			// 5 & 2 --> push in 2
			// 5 & 3 --> push in 3
			// 5 & 6 --> push in 5
			// 7 & 6 --> push in 6
			// only one element, 7, is left over in array1 so we add all elements from that index over to the result array
			if(array1[firstIndex]){
				return result.concat(array1.splice(firstIndex));
			}
			if(array2[secondIndex]){
				return result.concat(array2.splice(secondIndex));
			}
		}
	}
	return helper(0, 0);
}
mergeTwoArrays([1, 5, 7], [2, 3, 6]);

function mergeSortedArrays(arr1, arr2){
	// create variables -- first to keep track of index in first array, second to keep track of index in second array & result to hold new array
	var first = 0, second = 0, result = [];
	// iterate while these conditions are met
	// first condition -- checks to see if both counters are less than their respective array length
	// second condition -- what if there are no more elements in 2nd array? as long as first is < arr1.length, we continue
	// third condition -- what if there are no more elements in 1st array? as long as second is < arr2.length, we continue
	while((first < arr1.length && second < arr2.length) || first < arr1.length || second < arr2.length){
		// in the case there are no more elements in the second array, we continue to push because there are no longer two arrays to compare
		if(second >= arr2.length || arr1[first] < arr2[second]){
			result.push(arr1[first]);
			first++;
		} else {
			result.push(arr2[second]);
			second++;
		}
	}
	return result;
}
mergeSortedArrays([1,3,5,7], [2,4]);

function mergeSortedArrays(arr1, arr2){
	var result = [], first = 0, second = 0;
	while(first < arr1.length || second < arr2.length){
		if(arr1[first] < arr2[second] || second >= arr2.length){
			result.push(arr1[first]);
			first++;
		} else {
			result.push(arr2[second]);
			second++;
		}
	}
	return result;
}

function merge(leftArr, rightArr){
	var result = []; left = 0, right = 0;
	while(left < leftArr.length && right < rightArr.length){
		if(leftArr[left] < rightArr[right]){
			result.push(leftArr[left]);
			left++;
		} else {
			result.push(rightArr[right]);
			right++;
		}
	}
	return result.concat(leftArr.slice(left).concat(rightArr.slice(right)));
}





/* given an array of numbers, return the indices where the values add up to the target
return -1 if there is no match

input: array = [4,2,6,5,9,10], target = 13
output: [0, 4];

input: array = [4,2,9,10], target = 23
output: -1 */

// NAIVE SOLUTIONS
function twoSum(nums, target){
	for(var i = 0; i < nums.length; i++){
		for(var j = i + 1; j < nums.length; j++){
			if(nums[i] + nums[j] === target){
				return [i, j];
			}
		}
	}
	return -1;
}

function twoSum(nums, target){
	for(var i = 0; i < nums.length; i++){
		difference = target - nums[i];
		for(var j = i + 1; j < nums.length; j++){
			if(nums[j] === difference){
				return [i, j];
			}
		}
	}
	return -1;
}
twoSum([4,2,9,10], 11);

// Using a hash to make matching more efficient
function twoSum(nums, target){
	var map = {}, current;
	for(var i = 0; i < nums.length; i++){
		current = nums[i];
		if(map[current]){
			return true;
		}
		map[target - current] = true;
	}
	return false;
}
twoSum([2,4,9,10], 11);

function twoSum(nums, target){
	// set empty hash to hold out elements along with their indices
	var map = {}, current;
	for(var i = 0; i < nums.length; i++){
		// set the current value equal to current
		current = nums[i];
		// if current is not inside the map, set the value equal to its index i.e. map = { 2: 0 }
		if(!map[current]){
			map[current] = i;
		}
		// now check if weve found the current values difference at some point
		// since we are evaluting for truthy values, well need to check if the value exists in the map OR if the value is equal to 0
		// for example, map[2] = 0 but 0 is a falsy number. running 'if(map[2])' wont return anything because 0 is not true
		if(map[target - current] || map[target - current] === 0){
			return [map[target - current], i]
		}
	}
	return -1;
}
twoSum([2,4,9,10], 11);

function twoSum(array, target){
	var map = {}, current;
	for(var i = 0; i < array.length; i++){
		if(!map[array[i]]){
			map[array[i]] = i;
		}
	}
	for(var i = 0; i < array.length; i++){
		if(map[target - array[i]]){
			return [ i, map[target - array[i]] ];
		}
	}
	return -1;
}





/* given an array of bits, return them in order
input: [0, 1, 1, 0, 1, 1, 1, 0]
output: [0, 0, 0, 1, 1, 1, 1, 1] */
function sortBits(array){
	var zeros = [], ones = [];
	for(var i = 0; i < array.length; i++){
		if(array[i] === 0){
			zeros.push(array[i]);
		} else if(array[i] === 1){
			ones.push(array[i]);
		}
	}
	return zeros.concat(ones);
}





// BUBBBLE SORT
function bubbleSort(array){
	for(var i = 0; i < array.length; i++){
		for(var j = 0; j < array.length - 1; j++){
			if(array[j] > array[j + 1]){
				var temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}
	return array;
}





/* You have array of integers nums and you need to return a new counts array. In the new counts array, counts[i] is the number of smaller elements to the right of nums[i].

For nums = [3, 8, 4, 1], the output should be
countSmallerToTheRight(nums) = [1, 2, 1, 0]. */
function countSmallerToTheRight(nums){
	var result = [], count;
	for(var i = 0; i < nums.length; i++){
		count = 0;
		for(var j = i + 1; j < nums.length; j++){
			if(nums[i] > nums[j]){
				count++;
			}
		}
		result.push(count);
	}
	return result;
}
input = [3, 8, 4, 1]
output = [1, 2, 1, 0]





/* Given an array, move all zeros to the end. The order of non-zero elements does not matter
input = [1,0,0,4,5,0,9]
output = [1,4,5,9,0,0,0] */
function moveZeros(array){
	var zeroCounter = array.length - 1;
	for(var i = 0; i < array.length && i < zeroCounter; i++){
		while(array[zeroCounter] === 0){
			zeroCounter--;
		}
		if(array[i] === 0){
			swap(i, zeroCounter, array);
		}
	}

	function swap(a, b, arr){
		var temp = arr[a];
		arr[a] = arr[b];
		arr[b] = temp;
	}
	return array;
}
input = [1,0,0,4,5,0,9]
output = [1,4,5,9,0,0,0]

function swap(a, b, arr) {
    console.log(`  swapping ${a} for ${b} in ${arr}`);
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    console.log(`    > ${arr}`);
}
function moveZeros(array) {
    var zeroCounter = array.length - 1;
    for (var i = 0; i < array.length && i < zeroCounter; i++) {
        while (array[zeroCounter] === 0) {
          zeroCounter--;
          console.log("zeroCounter: " + zeroCounter);
        }
        if (array[i] === 0) {
          swap(i, zeroCounter, array);
        }
        console.log("incrementing i to " + i);
    }
    return array;
}





/* Find the missing number. Assume an array of non-negative integers. A second array is formed by shuffling the elements of the first array and deleting a random element. Given these two arrays, find which element is missing in the second array.

input = [1, 3, 9, 12, 5], [1, 3, 12, 5]
output = 9 */
function findMissingNumber(arr1, arr2){
	var sum1 = 0, sum2 = 0;
	for(var i = 0; i < arr1.length; i++){
		sum1 += arr1[i];
	}
	for(var i = 0; i < arr2.length; i++){
		sum2 += arr2[i];
	}
	return sum1 - sum2;
}





/* Upper case a string recursively */
function upcaseRecursive(str){
	var result = "";
	function helper(index){
		if(index === str.length){
			return;
        } else {
			result += str[index].toUpperCase();
			helper(index + 1);
        }
    }
	helper(0);
	return result;
}


















