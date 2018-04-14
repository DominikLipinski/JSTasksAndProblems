/*Write a function that keeps track of how many times it was called and returns that number.
All functionality should be inside the function*/

function myFunc() {
    var x = 0;
    return function() {
        x++;
        return x;
    };    
};

const instance1 = myFunc();
const instance2 = myFunc();

console.log('instance 1: ', instance1()); //returns 1
console.log('instance 1: ', instance1()); //returns 2
console.log('instance 1: ', instance1()); //returns 3
console.log('instance 2: ', instance2()); //returns 1
console.log('instance 1: ', instance1()); //returns 4