let arr = [1, 11, 5, 7, 13]
// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element ** 2)       //
// }
let newArr = arr.map((e, index, arr) => {         //map using for newarray 
    return e ** 2
})
console.log(newArr)

const greaterThanSeven = (e) => {
    if (e > 7) {
        return true
    }
    return false
}
console.log(newArr.filter(greaterThanSeven))    //if you want to filter some number


let a = [1, 2, 3, 4, 5, 6]

const red = (a, b) => { //reducing for any operation
    return a + b
} 
console.log(a.reduce(red))

Array.from("Aryan") //write on browser console 
//array.from change a string to array
