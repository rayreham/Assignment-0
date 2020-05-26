function setUnionOfAnyAmountOfSets(...args) {
  let setUnion = new Set(); //declare empty set
  
  for(let i = 0; i < args.length; i ++){
    //iterates through arguments
    for(let z of args[i]){
      //appends values to set
      setUnion.add(z);
    }
  }
  return unionSet; 
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
