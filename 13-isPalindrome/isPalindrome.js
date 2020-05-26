function isPalindrome(word) {
  let z = word.length-1;//counter starting from end of array
  let palindrome = false;

  for(var i = 0; i < word.length; i++){
    if(word[i] == word[z]){//checks if values are equal
      palindrome = true;
    }
    z++;
  }
  //console.log(palindrome);
  return palindrome;
}

// Do not edit this line;
module.exports = isPalindrome;
//isPalindrome("racecar")