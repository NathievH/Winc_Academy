
//function declaretion
function results (nmbr1,nmbr2) {
const sum1= nmbr1*nmbr1;
const sum2= nmbr2*nmbr2
const squared = sum1+sum2
const sumtotal = squared*squared
return sumtotal
}

console.log (results(3,6))
console.log (results(2,4))
console.log (results(4,8))



//function expression
results = function (nr1,nr2) {
    const sum1= nr1*nr1;
    const sum2= nr2*nr2
    const squared = sum1+sum2
    const total = squared*squared
    return total
}
console.log (results(3,6))
console.log (results(2,4))
console.log (results(4,8))


//arrow function 
results = (nr1,nr2) => {
    const sum1= nr1*nr1;
    const sum2= nr2*nr2
    const squared = sum1+sum2
    const sum = squared*squared
    return sum
}
console.log (results(3,6))
console.log (results(2,4))
console.log (results(4,8))
