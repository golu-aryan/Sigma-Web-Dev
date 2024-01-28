let button = document.getElementById("btn")
//List of all mouse events

button.addEventListener("click", () => {
    document.querySelector(".box").innerHTML = "<b>yaaay you are clicked!</b>"
})
button.addEventListener("contextmenu", () => {
    alert("Dont hack us by right click")
})
document.addEventListener("keydown", (e) => {
    console.log(e, e.key, e.keyCode)
}) 
