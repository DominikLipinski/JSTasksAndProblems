/* write a function than can be invoked both singly like: 
getTotal(10, 20) and doubly <currying> like: getTotal(10)(20)  
- in each case returnig sum of two numbers */

function getTotal(a, b) {
    return a + b || function(c) {
        return a + c;
    };
}

console.log(getTotal(10, 20)); 
console.log(getTotal(10)(20)); 


/*  - another solution - 
function getTotal() {
    var args = Array.prototype.slice.call(arguments);

    if(args.length === 2) {
        return args[0] + args[1];
    } else if (args.length === 1) {
        return function(num2) {
            return args[0] + num2;
        };
    }
}
console.log(getTotal(10, 20)); 
console.log(getTotal(10)(20)); 
*/