
'use strict'
function someone() {
// input
// var today = new Date();
var room = prompt('what size is your room?! 5-10'); 
var someone;

// processing:


if (room > 5) {
  someone = 'Mr Micheal will design your room!';
} else if (room < 5 ) {
  someone = 'Mrs Sarah will design your room!';
} else if (room = 5 ) {
  someone ='Mrs Jessica will design your room!';
} else if (room < 10 ) {
  someone = 'we will contact you soon!'; 
}
// output
return someone;
}

var showRoom = function() {
// input
var total;
var room = prompt('what room would you like to design?'); 
var picture;

//processing
while (room !== 'living room' && room !=='bedroom' && room !=='kitchen') {
  room= prompt('Please enter "living room" or "kitchen" or "bedroom"');
}

total = prompt('how many rooms would you like to design?');
for(var ctr = 0; ctr < total; ctr = ctr +1) {


if (room == 'living room') {
  
  picture = picture+'<img src="https://freshome.com/wp-content/uploads/2018/01/living-room-intro.jpg">';
}
 else if (room == 'bedroom') {
  picture = picture+'<img src="https://st.hzcdn.com/fimgs/dcc15d8c0ab11ed0_9483-w312-h312-b0-p0--modern-bedroom.jpg">';
}
 else if ( room== 'kitchen') {
  picture = picture+'<img src="https://www.ikea.com/images/73/8d/738dc6659e0b04b7c645012910280fe9.jpg?f=s">';


}


}
// output
return picture;

}





    

