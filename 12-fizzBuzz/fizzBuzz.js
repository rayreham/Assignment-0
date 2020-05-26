function fizzBuzz(start, end) {
  var arr = []; //declare empty array
 
  for(var i = start; i <= end; i++){
    //checks conditionals and pushes appropriate values
    if (i % 3 == 0 && i % 5 == 0) {
      arr.push("FizzBuzz");
    } 
    else if (i % 5 == 0) {
      arr.push("Buzz");
    } 
    else if (i % 3 == 0) {
      arr.push("Fizz");
    } 
    else {
      arr.push(i);
    }
  }
  //console.log(arr);
  return arr;
}

// Do not edit this line;
module.exports = fizzBuzz;
//fizzBuzz(1, 15);