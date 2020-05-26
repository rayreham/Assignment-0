function frequencyCounter(word) {
  let mapper = {};//decalre empty map

  for (var i = 0; i < word.length; i++) {
    var val = word.charAt(i);

    if (word[i] in mapper) {    //check if charcater is already mapped
      mapper[val]++;  //incrments if true
    }
    else {            
      mapper[val] = 1;  //adds to map if not
    }

  }
  //console.log(mapper);
  return mapper;
    
}

// Do not edit this line;
module.exports = frequencyCounter;
//frequencyCounter("cheese");