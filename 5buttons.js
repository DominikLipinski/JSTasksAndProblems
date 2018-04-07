/* task - make clicking each button print correct button number*/
function createButtons() {
   for (var i = 1; i <= 5; i++) {
     var body = document.getElementsByTagName("BODY")[0];
     var button = document.createElement("BUTTON");
     button.innerHTML = 'Button ' + i;
     button.onclick = function() {
          alert('This is button ' + i);
     }
     body.appendChild(button);
   }
}
createButtons();

/* solution 1 - IIFE*/ 
function createButtons() {
    for (var i = 1; i <= 5; i++) {
      var body = document.getElementsByTagName("BODY")[0];
      var button = document.createElement("BUTTON");
      button.innerHTML = 'Button ' + i;
      (function(num){
      button.onclick = function() {
            alert('This is button ' + num);
       };  
      })(i);  
      body.appendChild(button);
    }
 }

 /*solution 2  - separate function*/
 function createButtons() {
    for (var i = 1; i <= 5; i++) {
      var body = document.getElementsByTagName("BODY")[0];
      var button = document.createElement("BUTTON");
      button.innerHTML = 'Button ' + i;
      addClickFunctionality(button, i);
      body.appendChild(button);
    }
 }

function addClickFunctionality(button, num){
    button.onclick = function() {
        alert('This is button ' + num);
   };  
} 

/*solution 3 - let (ES6) */
function createButtons() {
    for (let i = 1; i <= 5; i++) {
      var body = document.getElementsByTagName("BODY")[0];
      var button = document.createElement("BUTTON");
      button.innerHTML = 'Button ' + i;
      button.onclick = function() {
           alert('This is button ' + i);
      }
      body.appendChild(button);
    }
 }
 createButtons();