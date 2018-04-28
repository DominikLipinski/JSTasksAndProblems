/* Whats logged out for each console log? */

const user1 = {
    name: 'Jordan',
    age: 28,
};

const user2 = {
    name: 'Jordan',
    age: 28,
};

console.log(user1 == user2); // false
console.log(user1 === user2); // false

/*
We pass objects by refference not by value, and two different objects are never equal. 
*/

console.log(JSON.stringify(user1) === JSON.stringify(user2)); // true

const user3 = {
    name: 'Jordan',
    age: 28,
};
const user4 = user3;
console.log(user3 == user4); // true
console.log(user3 === user4); // true