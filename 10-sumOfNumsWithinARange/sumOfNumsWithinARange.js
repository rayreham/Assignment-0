function sumOfNumsWithinARange(nums, start, end) {
  var count = 0;
  var i = nums.indexOf(start);

  //counts elements from start to end
  for(i; i <= nums.indexOf(end); i++){
      count++;
  }
  //console.log(count);
  return count;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;
//sumOfNumsWithinARange([2,4,5,6,23], 4, 6)