/*no arguments
const Paint = function() {
    console.log ( "The wall has been painted red");
}

Paint();*/

//single arguments 
const Paint = function(color) {
    console.log ( "The wall has been painted" + color);
}


Paint(" green");
Paint(" blue");
//Paint(); undefined  

// multiplearguments 

const painting = function() {
    console.log ("The northwall has been painted green");
    console.log ("the southwall has been painted orangje");
}
painting();



