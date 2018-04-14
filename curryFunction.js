/*curry function below*/
function getProduct(num1, num2) {
    return num1 * num2;
};

getProduct(10, 20);

/*solution*/

function getProduct(num1) {
    return function(num2) {
        return num1 * num2;
    };
};

getProduct(10)(20);

/*more complex example - use more generic function to more specific use case*/
 function getTravelTime(distance, speed) {
     return distance / speed;
 };
getTravelTime(500, 50);

/*lets say we always travel the same distance - we can use currying*/

const travelTimeBostNYC = getTravelTime(500);
const travelTimeChicNYC = getTravelTime(700);

console.log(travelTimeBostNYC(60));