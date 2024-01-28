console.log("Hey! This is Tutorial 55")

let a = 5;
a = a + 1;
let c = "Harry"
let b = 6;
// var 55a = "Aryan"; // Not allowed 

// const a1 = 6;
// a1 = a1 + 1; //Not Allowed because a1 is constant
{
    let a = 66   //Using let is good for local and global infront of var 
    //var is ignoring block but let is in block that is local type and is out of block that is global type
    console.log(a)
}
console.log(a + b - 7)
console.log(typeof a, typeof b, typeof c)

let x = "Aryan bhai";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r)
//typeof null is object
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)

let o = {
    "name": "Aryan",
    "job code": 5600, // you have compulsory to give double quote because of space
    "is_Handsome": true
}

console.log(o);
o.salary = "100crore"
console.log(o);
o.salary = "500crore"
console.log(o);
o.anothername = "Aprajita"
console.log(o);