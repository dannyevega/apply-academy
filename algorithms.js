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
longestCommonSubstr("abc", "ab");
longestCommonSubstr("xab", "ab");

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