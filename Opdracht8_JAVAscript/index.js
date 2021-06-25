//Checking if a number is big 
const check = function (number) {
    if (number > 100) {
        return true; 
    }
    else 
    {
return false;
    }
};


console.log (check(150))
console.log (check(120))
console.log (check(70))
console.log (check(45))



//bouncer at the club 


const brendadecides = function (maximum, current, age) {

    if (age < 18) {
        return "this is a club for adults";
    }
    if (current < 2000) {
        return "you can come in";
    }
    if (maximum > 2000) {
        return "its too busy come back later";
    }
};

console.log (brendadecides(2000,500,15))


// calculating the avarage 

const school = function (nbr1,nbr2,nbr3,nbr4,nbr5) {
    const sum = nbr1 + nbr2 + nbr3 + nbr4 + nbr5;
    const average = sum / 5; 
    const round = Math.round(average)
    return round
};

console.log (school (8,7,6,8,8));
console.log (school (8,8,8,8,8));
console.log (school (8,7,6,5,9));
console.log (school (4,7,6,10,8)); 



