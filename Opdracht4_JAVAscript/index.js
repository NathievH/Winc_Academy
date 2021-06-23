const age = 18;
const Female = true;
const driverStatus = "Bob";
const firstname = "Nathalie";
const totalamount = 55;

if (age >= 18) {
    console.log("You are allowed to enter");
}
else {
    console.log("You are NOT old enough to enter, please wait outside");
}

if (Female) {
    console.log("Enjoy LADIES night");
}
else {
    console.log("Its ladies night sorry you van not enter");
}

if ("Bob") {
    console.log("Je mag rijden");
}
else {
    console.log("Je mag niet meer rijden");
}

if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting!");
}
else {
    console.log("Je hebt helaas geen recht op korting");
}

if (firstname == "Sarah" || firstname == "Abraham") {
    console.log("Je krijgt een gratis biertje!")
}
else {
    console.log("Helaas geen gratis bier voor jou maar nog steeds een leuk feestje!")
}
if (totalamount > 100) {
    console.log("Je krijgt een gratis fles champagne")
}
else if (totalamount > 50) {
    console.log("Je krijgt een gratis portie nachos")
}
else if (totalamount > 25) {
    console.log("Je krijgt gratis (vega)bitterballen")
}


