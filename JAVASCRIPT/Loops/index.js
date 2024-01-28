console.log("Hey I am a loop")

let a = 1;
for (let i = 0; i < 100; i++) {
    console.log(a + i);
}

let obj = {
    name: "Aryan",
    role: "Programmer",
    Company: "Microsoft"
}

for (const key in obj) {        //forin loop for object 
    const element = obj[key];
    console.log(key,element)
}

for (const c of "aryan") {  //forof loop for iteration
    console.log(c)
}

let i = 10;
// while (i<6) {           
//     console.log(i)
//     i++
// }
let q = 10;
do {
    console.log(i)
    q++
} while (i<6);