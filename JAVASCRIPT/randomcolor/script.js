let boxes = document.querySelector(".container").children

function getRadnomColor(){
    let var1 = Math.ceil(0+Math.random()*255)
    let var2 = Math.ceil(0+Math.random()*120)
    let var3 = Math.ceil(0+Math.random()*300)
    return `rgb(${var1}, ${var2}, ${var3})`
}

Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getRadnomColor()
    e.style.color = getRadnomColor()
})

