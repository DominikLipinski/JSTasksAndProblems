/*what's logged into console?*/

var myCar = {
    color: "Blue",
    logColor: function() {
        var self = this;
        console.log("In logColor - this.color: " + this.color);
        console.log("In logColor - self.color: " + self.color);
        (function() {
            console.log("In IIFE - this.color: " + this.color);
            console.log("In IIFE - self.color: " + self.color);
        })();
    }
};
 
myCar.logColor();

/*
In logColor - this.color: Blue
In logColor - this.color: Blue
In IIFE - this.color: undefined /binding with this keyword is lost in IIFE
In IIFE - this.color: Blue
*/

/*
https://stackoverflow.com/questions/337878/var-self-this
http://alistapart.com/article/getoutbindingsituations
*/