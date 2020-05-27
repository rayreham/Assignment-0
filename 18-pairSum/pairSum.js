function pairSum(nums, target) {
    let val = false
    //exception that will be thrown if array is 1 or lower
    if (nums.length <= 1){
      throw('Error: Array is 1 or lower');
    }

    for (var i = 0; i < nums.length - 1; i++) {
      //iterate through rest of array to compare sum to target
      for (var j = 1; j < nums.length; j++) {
        if (nums[i] + nums[j] == target) {
          val = true;
        }
      }
    }
    return val;
}

// Do not edit this line;
module.exports = pairSum;