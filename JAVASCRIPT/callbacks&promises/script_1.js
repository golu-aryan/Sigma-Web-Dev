console.log("This is promises");

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was supporting you")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done");
            resolve("Aryan")
        }, 3000);
    }
})
let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was supporting you2")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done2");
            resolve("Aryan2")
        }, 1000);
    }
})

let p3 = Promise.race([prom1,prom2])   
//promise.race means which one is fast 
//allsettled mean status and value will be printed of resolve and reject    
//settled mean resolve or reject & resolve mean return value without error
p3.then((a)=>{
    console.log(a);
}).catch(err =>{
    console.log(err);
})