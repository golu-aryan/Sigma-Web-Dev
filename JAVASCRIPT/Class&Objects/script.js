// let object = {
//     a : "aryan",
//     b : "Kumar",
//     c : 1
// }

// console.log(object);


// let animal = {
//     eats : true
// }
// let leo = {
//     jumps : true
// }

// leo.__proto__ = animal; //Sets leo.[[prototype]] = animal

class Animal {
    constructor(name) {
        this.name = name
        console.log("Object is created");
    }
    eats() {
        console.log("Kha rha hu");
    }
    jumps() {
        console.log("Kud rha");
    }
}

class Lion extends Animal {      //extend Animal mean all properties of Animal in class lion (Inheritance another name)
    constructor(name){
        super(name) //super keyword use for invoke superclass constructor
        console.log("Object is created and he is a lion");
    }
    eats(){         //Method Overriding 
        super.eats()
        console.log("Kha rha hu roar");
    }
}

let a = new Animal("Katt");
console.log(a);

let l = new Lion("Shera");;
console.log(l);