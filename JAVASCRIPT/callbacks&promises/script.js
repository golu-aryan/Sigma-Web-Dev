console.log("Aryan is a hacker")
console.log("Aryan is a hecker")

setTimeout(() => {
    console.log("I am inside setTimeout")
}, 2000);  //this is print after 2 second because of javascript ancronyms

console.log("The end")  //print before setTimeout function

const fn = ()=>{
    console.log("Nothing")
}

const callback = (arg,fn) => {
    console.log(arg)
}

const loadscript = (src, callback) => {
    let sc = document.createElement("script")
    sc.src = src;
    sc.onload = callback("Aryan",fn);
    document.head.append(sc)
}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)