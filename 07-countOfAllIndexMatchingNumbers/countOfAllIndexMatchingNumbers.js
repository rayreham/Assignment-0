function countOfAllIndexMatchingNumbers(nums) {
  //tracker variable
  let count = 0;
  for(var i = 0; i < nums.length; i++){
    if(nums[i] == i){
      count++;
    }
  }
  //console.log(count);
  return count;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;
//countOfAllIndexMatchingNumbers([0,2,3,4,4,5,77]);