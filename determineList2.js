/* determine what will be logged in console*/

const list1 = [1, 2, 3, 4, 5];
const list2 = list1;
list1.push(6, 7, 8);

console.log(list2); // [1, 2, 3, 4, 5, 6, 7, 8];

/*
1.) const can't be re-assigned and re-declared, but const array can be changed with push()
2.) arrays are objects, assigning an array is passing refference to original object (not creating copy/passing value)
*/

let list1 = [1, 2, 3];
const list2 = list1;
    list1 = [10, 20, 30];

console.log(list2); // [1, 2, 3];
/*
when list 1 is assigned to new array, list 2 stays with original object it was assigned to
*/

/* PART 2 - how to set list2 equal to an array that has the same data as list1, without refferencing the same object  */

const list1 = [1, 2, 3];
const list2 = [...list1];
list1.push(4, 5, 6);
console.log(list2); // [1, 2, 3];

/* CAN BE ALSO:
const list2 = list1.slice();
const list2 = list1.concat([]);
const list2 = Array.from(list1);
*/