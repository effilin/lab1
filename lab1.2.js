
function addIt(a, b) {
    return a + b ;
}
let addition = addIt(2, 4) ;
document.getElementById("Math").innerHTML= addition;

// which would work better?

function subIt(a, b) {
    let result = a - b ;
    document.getElementById("Math").innerHTML = result ;
}

function isItDivisible(a, b) {
    if (b == 0) {
    window.alert("Not Divisible")
    }
    else { 
        let result = a / b ;
        document.getElementById("Math").innerHTML= result ;
    }
}

function multiplier(a) {
    for(let i = 0; i < 5; i++) {
        let results = a * i ;
        document.getElementById("Math").innerHTML= results + "<br>" ;
    }

}

function Hello() {
    let text ;
    let person = window.prompt("What's Your Name?", "T-Rex Ron")
    if(person == ""){
        text = "Canceled"
    } else {
        text = "Hello" + person + "!"
    }
}git