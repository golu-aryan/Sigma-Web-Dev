let number;
function Factorial(number) {
    let fac = 1
    for (let index = 1; index <= number; index++) {
        fac = fac * index;
    }
    return fac;
}
Factorial(number);