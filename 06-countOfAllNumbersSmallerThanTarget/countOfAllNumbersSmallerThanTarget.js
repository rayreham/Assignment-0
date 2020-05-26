function countOfAllNumbersSmallerThanTarget(nums, target) {
  //traker variable
  let count = 0;
  //iterates through array and increments counter when applicable
  for(var i = 0; i < nums.length; i++){
    if(nums[i] < target){
      count++;
    }
  }
  //console.log(count);
  return count;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;
//countOfAllNumbersSmallerThanTarget([1,5,3,2,20,18], 18);