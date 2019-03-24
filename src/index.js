module.exports = function check(str, bracketsConfig) {
  // your solution

  let stack = [];
  let openSymbol = [];
  let closeSymbol = [];
  let pair, bracket;

  if (str.length % 2 !== 0) return false; 
  
  for (let i = 0; i<bracketsConfig.length; i++) {
    openSymbol.push(bracketsConfig[i][0]);
    closeSymbol.push(bracketsConfig[i][1]);
  } 

  for (let i = 0; i < str.length; i++) {
    bracket = str[i];
    
    if (openSymbol.indexOf(bracket) === closeSymbol.indexOf(bracket)) {
      
      if ( stack.length === 0 ) {
        stack.push(bracket);
        continue;
      }

      if ( stack[stack.length - 1] === bracket ) {
        stack.pop();
        continue;
      }

      if (stack[stack.length-1] !== bracket) {
        stack.push(bracket);
        continue;
      }
      
    }
    
    if (openSymbol.indexOf(bracket) > -1) {
      stack.push(bracket);
    } else {
      pair = openSymbol[closeSymbol.indexOf(bracket)]
      if (stack.length == 0 || (stack.pop() != pair)) {
        return false;
      }
    }

  }

  return (stack.length == 0);

}
