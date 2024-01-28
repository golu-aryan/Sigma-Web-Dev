document.querySelector(".box")
//<div class = "box">Hey, I am a box</div>

document.querySelector(".box").innerHTML
//'Hey, I am a box'

document.querySelector(".container").innerHTML
//'\n  <div class = "box'>Hey, I am a Box </div>\n'     

document.querySelector(".container").innerText
//'Hey, I am a box'

document.querySelector(".container").outerHTML
//'<div class = "container">\n       <div class="box">Hey, I am a box</div>\n    </div>'
document.querySelector(".container").tagName
// 'DIV'        
document.querySelector(".container").textContent
// '\n        Hey, I am a box\n    '

document.querySelector(".container").hidden = true  //this .hidden element for hide the text 
// true  

document.querySelector(".box").innerHTML = "Aryan kumar"
//'Aryan kumar'

document.querySelector(".box1").hasAttribute("style")       //if any style included then hasAttribute return true otherwise false
// true  

document.querySelector(".box1").getAttribute("style")
// 'background-Color: rebeccapurple;'

document.querySelector(".box1").setAttribute("style", "display:inline")
//you can change attribute by setAttribute 

document.querySelector(".box").attributes
// NamedNodeMap {0: class, class: class, length: 1}

document.querySelector(".box").removeAttribute("style")
// undefined    //remove the attribute if your use inline style in html

document.designMode = "on"
// 'on'  it mean you can design or edit 

document.querySelector(".box").dataset       //accessing the data 
// DOMStringMap {createdby: 'Aryan'}   

document.querySelector(".container").remove()
document.querySelector(".box").remove()
//if you want to remove node 


document.querySelector(".container").classList      //you can achieve your list by classList
// DOMTokenList(3)['container', 'red', 'bg-green', value: 'container red bg-green']
// 0:"container"
// 1:"red"
// 2:"bg-green"         
// length:3
// value:"container red bg-green"

document.querySelector(".container").className
// 'container red bg-green'   // you can access your classes by className

document.querySelector(".container").classList.add("Aryan")  //if you write multiple times same thing that doesn't work run one time
// udnefined but by the classlist.add Aryan is added in class .container

document.querySelector(".container").classList.remove("Aryan")
// and you can remove by the classList.remove 

document.querySelector(".container").classList.toggle("red")
// true/false if you want to color the text by red and remove by classList.toggle 
