/* Whats logged to the console? */

const data1 = 'Jordan Smith';
 
const data2 = [].filter.call(data1, function(elem, index) {
  return index > 6;
});
 
console.log(data2); //  ["S", "m", "i", "t", "h"]

/* 
We can't use all array methods on strings - only read-only methods 
(like: filter, forEach, map, some, every) 

These WON'T WORK - push, pop, splice, shift, reverse etc. 
*/