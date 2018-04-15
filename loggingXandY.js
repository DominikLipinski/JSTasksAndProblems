/*What is the value of X and Y when they're logged*/

(function() {
    //var z = 300;
    var x = y = 200;
})();

//console.log('z: ', z); // refference Error, x is not defined

console.log('y: ', y); // 200 - as Y is declared without var keyword 
// -> so it is global
console.log('x: ', x); // refference Error, x is not defined
