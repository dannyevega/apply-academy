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
// Recursive solution
/* Idea behing Merge Sort:
- divide and conquer type of algorithm
- recursively break down the array into smaller and smaller pieces each time until you only have one element in each array
- then, compare these single element arrays to each other and merge them together in ascending order
*/
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

// Recursive solution
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

// Recursive solution
function mergeSortRecursive(arr){
	var left, middle, right;

	if(arr.length < 2){
		return arr;
	}

	middle = Math.floor(arr.length / 2);
	left = arr.slice(0, middle);
	right = arr.slice(middle);

	return merge(mergeSort(left), mergeSort(right));
}
function merge(arr1, arr2){
	var result = [], leftCount = 0, rightCount = 0;

	while(leftCount < arr1.length && rightCount < arr2.length){
		if(arr1[leftCount] < arr2[rightCount]){
			result.push(arr1[leftCount]);
			leftCount++;
		} else {
			result.push(arr2[rightCount]);
			rightCount++;
		}
	}
	return result.concat(arr1.slice(leftCount).concat(arr2.slice(rightCount)));
}

// Iterative solution
function mergeSortIterative(arr){
	var work = [];
	if(arr.length < 2){
		return arr;
	}

	for(var i = 0; i < arr.length; i++){
		work.push([arr[i]]);
	}

	while(work.length > 1){
		left = work.shift();
		right = work.shift();
		work.push(merge(left, right));
	}

	return work[0];
}





/* QUICK SORT
basic solution for quicksort algorithm
1. divide and conquer algorithm -- this solution chooses a pivot value, then iterates through the array pushing all elements less than the pivot value into the lesser array and all values greater than the pivot value into the greater array
2. it then rcursively calls the quickSort function on the less side and greater side
3. once the stack completes for each of those sides, the lesser array will be sorted as well as the greater side
4. we then add these two arrays back together
*/
function quickSort(arr){
	var pivot = arr[arr.length - 1], lesser = [], greater = [];

	if(arr.length < 2){
		return arr;
	}

	for(var i = 0; i < arr.length - 1; i++){
		if(arr[i] < pivot){
			lesser.push(arr[i]);
		} else {
			greater.push(arr[i]);
		}
	}

	return quickSort(lesser).concat(pivot).concat(quickSort(greater));
}

quicksort([4,2,6,5,1,3]);
/*
Step 1:
arr = [4,2,6,5,1,3]
pivot = 3
at end of initial call to quickSort with the initial array, we get this:
lesser = [2, 1];
greater = [4,6,5];

Step 2:
then, the quickSort recursively calls itself on the lesser side. We then get:
arr = [2, 1]
pivot = 1
lesser = [];
greater = [2];

Step 3:
at this point, the recursive call to the initial quickSort(lesser) returns and can fall off the stack:
lesser + pivot + greater
[].concat(1).concat([2]) --> [1, 2]
this sorted array is returned to the initial quickSort call waiting for the greater side to be sorted so then it can add these two arrays together

Step 4:
add the pivot value since we know the lesser side is not sorted
lesser + pivot + greater
[1, 2].concat(3).concat(quickSort(greater)) --> [1, 2, 3]
we are still waiting for the greater side to be sorted

Step 5:
quickSort is called on the initial greater array:
arr = [4, 6, 5];
pivot = 5
lesser = [4]
greater = [6]

Step 6:
both sizes of the array are now less than 2 so we can return and add them together:
lesser + pivot + greater
[4].concat(5).concat([6]) --> [4, 5, 6]

Step 7:
now, we have both lesser and greater sides sorted and can add them all together:
lesser + pivot + greater
[1, 2, 3].concat([2]) --> [4, 5, 6]
[1, 2, 3, 4, 5, 6]
*/

// Making use of swap and partition functions
function swap(arr, a, b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function partition(arr, left, right){
    let pivot = arr[right], partitionIndex = left;

    for(var i = left; i < right; i++){
        if(arr[i] < pivot){
            swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(arr, right, partitionIndex);
    return partitionIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1){
    let partitionIndex;
    if(left < right){
        partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
}







