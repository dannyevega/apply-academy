// MULTIPLE POINTERS

/* Mutiple pointers example 1
A number of problems involving arrays, lists, and strings require us to iterate with more than one pointer. Sometimes pointers may travel at different speeds and may start from a different initial position. An algorithm that requires one to swap a bunch of values may require multiple pointers

Merge two sorted arrays into one array
input: [1,3,5], [2,4,6,8,10];
output: [1, 2, 3, 4, 5, 6, 8, 10];
*/
function mergeTwoSortedArrays(leftArr, rightArr){
	var result = [], left = 0, right = 0;
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
mergeTwoSortedArrays([1,3,5], [2,4,6,8,10]);

/* Mutiple pointers example 2
Given an array of numbers, return the indices where the values add up to the target return -1 if there is no match

input: array = [4,2,6,5,9,10], target = 13
output: [0, 4];

input: array = [4,2,9,10], target = 23
output: -1
*/

// This solution uses the brute force approach -- it tries every single possible pair combination to see if sum === target
// This would be O(n) time complexity
function twoSum(array, target){
	for(var i = 0; i < array.length; i++){
		for(var j = i + 1; j < array.length; j++){
			if(array[i] + array[j] === target){
				return [i, j]
			}
		}
	}
	return -1
}
twoSum([4,2,9,10], 11);

// Use 2 for loops although we dont need 2 for loops...just makes more sense to break into 2 loops for clarity of the problem
// O(n) using a frequency hash
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

// We use a hash here to check if the difference was ever found then return those indices
// O(n) using a frequency hash
function twoSum(array, target){
	var map = {}, current;
	for(var i = 0; i < array.length; i++){
		current = array[i];
		// set all elements in the array as a key in a map set to its index -- > map = {2: 1, 4: 0, 9: 2, 10: 3}
		if(!map[current]){
			map[current] = i;
		}
		// we check for 'map[target - current] === 0' because if that difference is found in the map and its value is 0, we need to check for that because map[4] = 0 --> if(0) is falsy so it wont evaluate
		if(map[target - current] || map[target - current] === 0){
			return [map[target - current], i];
		}
	}
	return -1;
}
twoSum([4,2,9,10], 11);





// BUBBLE SORT

/*
1. Iterate through the length of the array for outer loop
2. Iterate through lenght of array - 1 for inner loop -- works with length or length - 1 but we dont need to go through the whole array because the last element should be the largest
3. Check if current j is greater than j + 1
4. If it is, swap the elements -- continue til reach end of array
*/

// O(n^2) time complexity
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
bubbleSort([7,5,2,4,3,9]);





// MERGE SORT
function mergeSort(array){
	var middle, left, right, result = [], leftCount = 0, rightCount = 0;;

	if(array.length < 2){
		return array;
	}

	middle = Math.floor(array.length / 2);
	left = mergeSort(array.slice(0, middle));
	right = mergeSort(array.slice(middle));

	while(leftCount < left.length || rightCount < right.length){
		if(left[leftCount] < right[rightCount] || rightCount >= right.length){
			result.push(left[leftCount]);
			leftCount++;
		} else {
			result.push(right[rightCount]);
			rightCount++;
		}
	}
	return result;
}

function mergeSort(arr){
	var result = [], leftCount = 0, rightCount = 0, left, middle, right;

	if(arr.length < 2){
		return arr;
	}

	middle = Math.floor(arr.length / 2);
	left = mergeSort(arr.slice(0, middle));
	right = mergeSort(arr.slice(middle));

	while(leftCount < left.length && rightCount < right.length){
		if(left[leftCount] < right[rightCount]){
			result.push(left[leftCount]);
			leftCount++;
		} else {
			result.push(right[rightCount]);
			rightCount++;
		}
	}
	return result.concat(left.slice(leftCount).concat(right.slice(rightCount)));
}
