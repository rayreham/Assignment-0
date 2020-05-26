function sumOfAllOddNumbers(nums) {
  //despite signature, description of function is to count odd numbers
  let count = 0;

  for(var i = 0; i < nums.length; i++){
    //usues modulus to find remainder
    if(nums[i] % 2 != 0){
      count++;
    }
  }
  //console.log(count);
  return count;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;
//sumOfAllOddNumbers([0,1,2,3,4,5,6,7])