function setUnionOfAnyAmountOfSets(...args) {
  let product = 1; //intilize to 1 

  for(var i = 0; i < args.length; i++){
    product *= args[i]; //multiply args
  }
  //console.log(product);
  return product;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
