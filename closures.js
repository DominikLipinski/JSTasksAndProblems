/*write down closure example*/
const globalCatSetting = "Cats says: "

function createCat() {
    var catsAge = 5;                
    function createCatsPurr() {     // closure starts here
        var catsStatement = "I'm a big cat.";
        if(catsAge > 4) {
            console.log( globalCatSetting +  "MRRRR " + catsStatement );
        }
    };                              // closure ends here
    createCatsPurr();
};

createCat();
