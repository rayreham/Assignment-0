function sumOfAllEvenNumbers(nums) {
  //despite signature, description of function is to count even numbers
  let count = 0;

  for(var i = 0; i < nums.length; i++){
    //usues modulus to find remainder
    if(nums[i] % 2 == 0){
      count++;
    }
  }
  //console.log(count);
  return count;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;
//sumOfAllEvenNumbers([2,4,6,7,8,9,10])