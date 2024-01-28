let random = Math.random()
let a = prompt("Enter the first number:")
let c = prompt("Choose your choice:")
let b = prompt("Enter your second number:")

let obj = {
    "+":"-",
    "/":"*",
    "-":"+",
    "*":"**"
}


console.log(random)
if(random>0.1){
    console.log('The result is ${a} ${c} ${b}')
}
else{
    c = obj(c)
    alert('The result is ${eval(${a} ${c} ${b})}')
}