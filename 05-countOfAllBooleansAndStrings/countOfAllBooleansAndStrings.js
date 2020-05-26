function countOfAllBooleansAndStrings(arr) {
  //variable count serves as tracker
  let count = 0;

  //iterates through array and increments count when conditional is true
  for(var i = 0; i < arr.length; i++){
    //conditional uses typeof operater to check data type of element
    if(typeof arr[i] === 'boolean'|| typeof arr[i] === 'string' ){
      count++;
    }
  }
  //console.log(count);
  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;
