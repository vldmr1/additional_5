module.exports = function check(str, bracketsConfig) {
  const stack = [];
  for (let symbol of str) {
    for (let subarray of bracketsConfig) { 
      if (symbol === subarray[0]) {
        if (subarray[0] === subarray[1] && stack[stack.length - 1] === subarray[0]) {
          stack.pop();
        } else {
          stack.push(symbol);
        }  
      } else {
        if (symbol === subarray[1] && stack[stack.length - 1] !== subarray[0]) {
            return false
        }  
        else if (symbol === subarray[1] && stack[stack.length - 1] === subarray[0]) {
          stack.pop();          
        }
      }
    }  
  }
return (stack.length === 0 ? true : false);
}
