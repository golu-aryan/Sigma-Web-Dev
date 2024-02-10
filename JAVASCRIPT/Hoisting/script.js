(async function () {
    console.log(a1);
})()
//Hoisting refers to the process whereby the interpreter appears to move the decleration to the top of the ocde before execution.
const a1 = 6;
//Hoisting not support const and let only use var and that output is undefined

const sleep = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

const sum = async(a, b, c)=>{
    return a+b+c
}