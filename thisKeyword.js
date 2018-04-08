/* show example of use of 'this' keyword */
var house = {
    price: 200000,
    squaremeters: 150,
    getPricePerSquareMeters: function() {
        //return house.price / house.squaremeters; // line below does the same thing
        return this.price / this.squaremeters;
    }
};

console.log(house.getPricePerSquareMeters());