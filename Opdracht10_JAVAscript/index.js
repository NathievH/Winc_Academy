const Theage = function (number) {
    if (number >= 18) {
        return true
    }
    else {
        return false
    }
}

console.log(Theage(22))
console.log(Theage(25))

const greeting = function () {
    console.log(Theage(22));
    if (Theage >= 18) {
        console.log("hello there")
        return "hello there"
    }
    else {
        console.log("hi kiddo")
    }
    return "hi kiddo"
}
greeting();
greeting();


// VAT Value Added Taxes exersize 1

const price = function (number) {
    total = number * 1.21;
    console.log(total)
    return total
}

price(50);
price(20);

//VAT exercise 2

const splitVAT = function (number) {
    prijs = number / 1.21;
    return prijs;
}

console.log(splitVAT(120))



