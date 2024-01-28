console.log("Hello I am conditional tutorial")

let age = 3;
// let grace = 2;

// age += grace        // Increment Assignment operator and all 
// console.log(age);       
// console.log(age + grace);
// console.log(age - grace);
// console.log(age / grace);
// console.log(age * grace);
// console.log(age ** grace); //Exponentiation opertor 
// //This double star mean power 2 is the power of 3 = 3 x 3 = 9
// console.log(age % grace);  //modulus operator it means give you the remainder
// console.log(age++);  //Increment operator 
// console.log(age--); // Decrement operator


//If your trying to check equal value and type use ===
//example ---> "3"===3 output is False because one is string and one is numeric value 

if (age == 18) {
    console.log("You can drive");
}
else if (age == 0) {
    console.log("Are you kidding?");
}
else if (age == 3) {
    console.log("Are you crazy bro!");
}
else {
    console.log("your cannot drive");
}


let a = 6
let b = 8
let c = a > b ? (a - b) : (b - a)   //Ternary Operator
console.log(c)