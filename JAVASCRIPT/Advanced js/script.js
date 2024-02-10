async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000)
    })
}
function sum(a,b,c){
    return a+b+c
}

(async function main() {     //IIFE(Immediately invoke function expression)
    // let a = await sleep()
    // console.log(a);
    // let b = await sleep()
    // console.log(b);

    let [a,b, ...rest] = [1,2,3,4,5,6]  //destructuring is a feature of js that allows you to unlock value from arrays or properties. and if you not include three dot then print 123 and ignore all numbers
    console.log(a,b,rest)

    // let obj = {
    //     a: 1,
    //     b: 2,
    //     c: 3
    // }

    // let {a,b} = obj
    // console.log(a,b);

    let arr = [1,2,4]
    // console.log(sum(arr[0], arr[1], arr[2]))
    console.log(sum(...arr));   //Spread operator mean open the array 

    const ar = [1,2,11]
    const obje= {...ar}
})()