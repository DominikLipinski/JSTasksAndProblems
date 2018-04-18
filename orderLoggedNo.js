/* What order are the numbers: 1, 2, 3, 4 logged in? */

function logNumbers() {
    console.log(1);
    setTimeout(function(){console.log(2)}, 1000);
    setTimeout(function(){console.log(3)}, 0);
    console.log(4);
}

logNumbers(); // 1, 4 , 3, 2

/* 
setTimeout() with callback puts that line into event loop, while console.log() doesn't. 
That's why setTimeout() have to wait until console.log() is executed to run, 
even if the delay is set to zero sec.
*/