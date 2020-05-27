class MySolution {
  constructor() {
    this.flag = false;
  }

  binarySearch(nums, target) {
    let found = false;
    let middle = Math.ceil(nums.length / 2)-1; //stores middle element
    let left = nums.slice(0, middle + 1); //stores leftmost
    let right = nums.slice(middle + 1, nums.length); //stores rightmost

    if (nums[middle] === target)
      return true;
    if(1 < nums.length ) {
      if (nums[middle] > target)
        found = this.binarySearch(left, target); //recursively calls method to slice again on left side
      else
        found = this.binarySearch(right, target); //recursively calls method to slice again on right side
    }
    return found; mid
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;