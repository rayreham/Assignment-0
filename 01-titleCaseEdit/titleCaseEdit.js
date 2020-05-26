function titleCaseEdit(title) {
  //splits the elememts at every space value
  var titleArray = title.split(" "); 
  
  //for loop iterates through the array by element
  for(var i = 0; i < titleArray.length; i++){
    //makes first letter uppercase then appends remaining string
    titleArray[i] = titleArray[i].charAt(0).toUpperCase() + titleArray[i].substr(1);
    //console.log(titleArray[i]);
  }
  //joins elemnts by space and returns newly capatilized title
  return titleArray.join(" ");
}

// Do not edit this line;
module.exports = titleCaseEdit;
//console.log(titleCaseEdit("Henry ford Jeffery")); test case