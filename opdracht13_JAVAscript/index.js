
const person = prompt("Welkom! what is je naam?", "naam..");

console.log (person)

alert ("Hallo " + person + ", Leuk dat je er bent!")

var cijfer = prompt ("Voer een nummer in van 0 tot 25 om te beginnen met raden...")

console.log (cijfer)

alert ("Je hebt gekozen voor " + cijfer + "! goodluck :)")

let minRange = 0
let maxRange = 25 

let randomNumber = getRandomIntInclusive(minRange, maxRange);
console.log('random number:' + randomNumber);

console.log (randomNumber)

const winner = function () {
     if ( randomNumber===cijfer)
     return alert ("je hebt het juiste nummer gekozen, je wint!")
     else {
         return alert ("Helaas, Het is " + randomNumber + " probeer het nog een keer")
     }
}

winner ()


let end = alert ("Het spel is nu afgelopen")






