/* Whats logged to the console? */

console.log(900.9 === 300.3 * 3); // false

console.log(300.3 * 3); // 900.9000000000001

/* How to fix this */
console.log(Number((300.3 * 3).toFixed(2))); // 900.90 (2 digits after decimal point)
console.log(Number((300.3 * 3).toPrecision(5))); // 900.9 (5 digits total)
console.log(Number((300.3 * 10) * 3) / 10); // 900.9

