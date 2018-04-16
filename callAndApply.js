/*Describe call() and apply() methods, what paramethers do they take, 
how they're diferent*/

const car1 = {
    brand: 'Porshe',
    getCarDescription: function(cost, year, color) {
        console.log(`This is  ${this.brand}.
        The price is $${cost}, year: ${year}, color: ${color}.\n`);
    }
};

/* CALL */
const car2 = {
    brand: 'Lamborgini'
};

car1.getCarDescription.call(car2, 100000, 2014, 'red');

/* APPLY */
const car3 = {
    brand: 'Ford'
};

car1.getCarDescription.apply(car3, [35000, 2014, 'black']);