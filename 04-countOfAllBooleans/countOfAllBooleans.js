function countOfAllBooleans(arr) {
  //variable count serves as tracker
  let count = 0;

  //iterates through array and increments count when conditional is true
  for(var i = 0; i < arr.length; i++){
    if(arr[i] == true || arr[i] == false){
      count++;
    }
  }
  //console.log(count);
  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleans;
