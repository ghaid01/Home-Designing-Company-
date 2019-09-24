
'use strict'
// var today = new Date();
var room = prompt('what size is your room?! 5-10'); 
var someone;

if (room > 5) {
  someone = 'Mr Micheal will design your room!';
} else if (room < 5 ) {
  someone = 'Mrs Sarah will design your room!';
} else if (room = 5 ) {
  someone ='Mrs Jessica will design your room!';
} else if (room < 10 ) {
  someone = 'we will contact you soon!'; 
}

document.write(someone);




    

