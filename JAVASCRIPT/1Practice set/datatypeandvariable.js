/*1. create a variable of type string and try to add a number to it */
let a = "Aryan"
let b = 23
let c = a + b
console.log(c)
/*2. Use typeof operator to find the datatype of the string in last question */
console.log(typeof c)

/*3. Create a const object in Javascript can you change it to hold a number later*/
const obj = {
    value: 10,  //creating object and putting number inside of object 
}

console.log(obj.value)  //printing the object
obj.value = 20  //You can change the number 

console.log(obj.value)      //and print the object value

/*4. Try to add a new key to the const object in problem 3 were you able to do it*/
obj.name = "Aryan"      
console.log(obj)

/*5. write a js program to create a word-meaning dictionary of 5 words*/
const dictionary = {
    real : "Asli",
    fake : "nakli",
    world : "Duniya",
    persistent : "ziddi",
    well : "khair"
}

console.log(dictionary)