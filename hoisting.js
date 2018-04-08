/* demonstrate how hoisting works*/

console.log(catsName); // undefined
var catsName = "Filemon";
console.log(catsName); // Filemon
console.log(dogsName); // ReferenceError: dogsName is not defined

/*Example 2*/
function printCatsName() {
    console.log(catsName);
    }
    var catsName = "Filemon";
    
    printCatsName(); // prints: Filemon
    
// var catsName = "Filemon"; // wont work here, after function is called

/*Hoisting moves variable's declarations to the top of the scope. 
Only declarations - not value assignment.

Function exppressions: var x = function(){} works the same as normal varialbles 
and when tried to call, will give error: x is not a function
Function declarations: function x(){} are all moved to the top 
and can be called before declaration, so:
console.log(add(3,2));
function add(x,y) {x+y},  
will print: 5. 

let and const are not initialised with undefined, will return Refference Error*/