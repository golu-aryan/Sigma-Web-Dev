function Adjectives() {
    let a = "Crazy"
    let b = "Amazing"
    let c = "Fire"

    let d = Math.floor(Math.random() * 3)

    if (d == 0) { return a }
    if (d == 1) { return b }
    if (d == 2) { return c }
}
function Shopname() {
    let a = "Engine"
    let b = "Foods"
    let c = "Garments"

    let d = Math.floor(Math.random()*3)

    if(d==0){return a}
    if(d==1){return b}
    if(d==2){return c}
}
function Another() {
    let a = "Bros"
    let b = "Limited"
    let c = "Hub"

    let d = Math.floor(Math.random()*3)

    if(d==0){return a}
    if(d==1){return b}
    if(d==2){return c}
}

console.log("random Business Name are--" + Adjectives() + Shopname() + Another())