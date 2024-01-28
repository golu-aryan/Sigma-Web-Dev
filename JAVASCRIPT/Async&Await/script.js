// async function getData() {
//     //simulate getting data fro a server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }
/*settle means resolve or reject
  resolve means promise has settled successfully
  reject means promise has not settled seccussfully 
*/
async function getData() {
    //simulate getting data fro a server
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', { 
        method: 'POST',
        body: JSON.stringify({      //this is post request
            title: 'foo',
            body: 'bar',
            userID: 1,
        }),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
let data = await x.json()
return data
}

async function main() {

    console.log("Loading modules")

    console.log("Load Data")

    let data = await getData()

    console.log(data)

    console.log("do something else")

    console.log("process data")
}
main()
// data.then((v)=>{
//     console.log(data);
//     console.log("Process Data")
//     console.log("Aryan")
// })