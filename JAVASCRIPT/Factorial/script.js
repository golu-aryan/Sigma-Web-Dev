//Factorial program with using reduce function 
let a = 6;
function fact(n) {
    let arr = Array.from(Array(n + 1).keys());        //shortcut to create an Array 
    let c = arr.slice(1,).reduce((a, b) => a * b)
    return c
}

fact(a)
