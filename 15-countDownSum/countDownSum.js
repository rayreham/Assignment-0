class MySolution {
  countDownSum(num) {
    if(num == 1){ //checks if num is at 0 to terminate
      return 1;
    }
    return num + this.countDownSum(num-1); //recursively calls method to add numbers
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;

