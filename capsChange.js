function SwapCase(str) { 
var strSplit = str.split("");
 var solution =[];
  console.log(strSplit);
  for (var i=0; i<str.length; i++){
    if (strSplit[i] === strSplit[i].toUpperCase()){
      console.log(strSplit[i]);
      solution.push(strSplit[i].toLowerCase());
      
    }
    else {
      solution.push(strSplit[i].toUpperCase());
    }
    
  }
  console.log(solution.join());
  return solution; 
         
}
SwapCase("Hello World");