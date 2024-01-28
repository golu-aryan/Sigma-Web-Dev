document.querySelector(".child").addEventListener("click", (e) => {
    e.stopPropagation()     //stopPropogation mean event bubbling stoped like if you click child then show only child and ignoring parents
    alert("child was clicked")
})
document.querySelector(".childContainer").addEventListener("click", (e) => {
    e.stopPropagation()
    alert("childContainer was clicked")
})
document.querySelector(".container").addEventListener("click", () => {
    e.stopPropagation()
    alert("container was clicked")
})
//Event Bubbling mean when an event is in an element inside that starts with the element that triggered the event

function getRandomColor() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1},${val2},${val3})`
}

let a = setInterval(() => {
    document.querySelector(".child").style.backgroundColor = getRandomColor();
}, 1000); // if you want to repeat some code then use setInterval()
console.log(a)      //and you can stop interval by clearInterval(the value given by the browser)

let b = setTimeout(() => {
    document.querySelector(".child").style.backgroundColor = getRandomColor();
}, 1000); //if you want to stop setTimeout then type clearTimeout in console 
console.log(b)  