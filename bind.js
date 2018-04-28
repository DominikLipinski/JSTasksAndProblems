/* describe and demonstrate bind() function */

this.distance = 6000; // global

const trip = {
    distance: 3000,
    getDistance: function() {
        return this.distance;
    }
};

const getTripDistance = trip.getDistance;
getTripDistance(); // 6000
const getBindedTripDistance = trip.getDistance.bind(trip);
getBindedTripDistance(); // 3000

/*  const findTripDistance = getTripDistance.bind(trip);
findTripDistance(); // 3000 */

/* another use - we want function to always be called with certain parameter */ 
const trip2 = {
    distance: 3000,
    getDistance: function(unit) {
        return this.distance + unit;
    }
};
const getBindedTripDistance2 = trip2.getDistance.bind(trip2, ' KM');
getBindedTripDistance2();

/* another use - wa want function to be called with certain paramether (always the same) 
+ another parameter (each time different) */
const trip3 = {
    distance: 3000,
    getDistance: function(unit, caption) {
        return this.distance + unit + caption;
    }
};
const getBindedTripDistance3 = trip3.getDistance.bind(trip3, ' KM');
getBindedTripDistance3(' left to go.');
