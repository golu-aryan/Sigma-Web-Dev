console.log("Aryan")
let boxes = document.getElementsByClassName("box")
// console.log(boxes)

boxes[2].style.backgroundColor = "red"
document.getElementById("red").style.backgroundColor = "green"
//When you give an id then you can use getelementbyId attributes

document.querySelector(".box").style.backgroundColor = "purple";
//queryselector choose the first box
console.log(document.querySelectorAll(".box"))
//this generate a nodelist of your element 

document.querySelectorAll(".box").forEach(e =>{ //if you want color all element then use loop to select all element
    e.style.backgroundColor = "purple";
})

document.getElementsByTagName("div")    //this return html collection list and all divs 

e = document.getElementsByTagName("div")

e[3].matches("#red") //return true if matches & if not matches return false
//this is checked in browser console

document.querySelector("body").contains(document.querySelector(".container"))

e[4].closest("#red")   //closest part
