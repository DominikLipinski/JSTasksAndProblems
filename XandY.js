/* Whats logged to the console? */

var x = 10;
 
function y() {
    x = 100;
    return;
    function x() {}
}
 
y();
 
console.log(x); //10

/* function X is hoisted to the top of function Y scope*/