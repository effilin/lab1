
function addIt(a, b) {
   console.log (a + b)
}
// simple addition

function subIt(a, b) {
    console.log(a - b)
}

function isItDivisible(a, b) {
    if (b == 0) {
    console.log("Not Divisible")
    }
    else { 
        let result = a / b ;
        console.log(result);
    }
}
// can handle dividing by 0

function multiplier(a) {
    for(let i = 0; i < 5; i++) {
        let results = a * i ;
        console.log(results)
    }
}
// this multiplier returns multiple results

function hello(name) {
    console.log("Hello" + " "+ name + "!") ;
}

hello("Eva")
console.log(addIt(1,"two"))
console.log(multiplier("two"))
console.log(multiplier(3000))
console.log(isItDivisible("three"))