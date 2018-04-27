/* List and describe 3 ways of creating object*/

/* 1st way - Object literal
Best way to create single object */
let item = { size: "big", available: true, inStock: 15 };

/* 2nd way - Object constructor & new keyword*/
const item = new Object();
item.size = "big";
item.available = true;
item.inStock = 15;

/* 3rd way - constructor function. 
Best way to make a lot of objects quickly */
function Car(color, brand, year) {
    this.color = color; // binding object properties with parameters that were passed
    this.brand = brand;
    this.year = year;
}

Car.prototype.getColor = function() { // method assigned to Car prototype will be available to all Car objects
    return this.color;
};

const someNewCar = new Car('blue', 'mazda', 2018);

