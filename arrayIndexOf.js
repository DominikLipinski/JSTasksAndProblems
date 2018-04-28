/* Whats logged with each console log? */

console.log([10, 20, 30, 40, 50].indexOf(30));// 2
console.log([{ name: 'Pam' }, { name: 'Kent' }].indexOf({ name: 'Kent' }));// -1
console.log('hello world'.indexOf('o'));// 4 
// string has it's own indexOf method. It shows first occurance of passed parameter 
console.log([[1], [2], [3], [4]].indexOf([2]));// -1



const someArr = [5];
console.log([[1], someArr, [2], [3], [4]].indexOf(someArr)); // 1
const yetAnotherArr = someArr;
console.log([[1], someArr, [2], [3], [4]].indexOf(yetAnotherArr)); // 1

/* 
indexOf won't work with objects/arrays, as two objects are never the same in JS
but it will work if two different variables both refference the same object.
*/