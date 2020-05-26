function sumOfMinimumAndMaximum(nums) {
  //intial values of high and low are first elements
  let low = nums[0];
  let high = nums[0];

  //iterator that checks truth values of conditions
  for(var i = 1; i < nums.length; i++){
    if(nums[i] < low){
      low = nums[i];
    }
    if(nums[i] > high){
      high = nums[i];
    }
  }

  let sum = low + high;

  //console.log(sum);
  return sum;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;
//sumOfMinimumAndMaximum([2,4,5,6,23])