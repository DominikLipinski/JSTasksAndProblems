/*what will be printed into console?*/

var num = 50;

function logNumber() {
    console.log(num);
    var num = 100;
}

logNumber();  
/* undefined, as local num is hoisted as undefined to the top of logNumber scope*/