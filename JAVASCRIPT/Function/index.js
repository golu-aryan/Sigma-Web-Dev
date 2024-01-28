function nice(name) {
    console.log(" Hey " + name + " You are nice")
    console.log(" Hey " + name + " You are handsome")
    console.log(" Hey " + name + " You are sigma")
}

nice("Aryan")

function sum(a,b,c=3) {
    return a+b+c          
}

result1 = sum(2,4)
result2 = sum(5,5)
result3 = sum(7,2,5)
console.log("The sum of these number is:" + result1)
console.log("The sum of these number is:" + result2)
console.log("The sum of these number is:" + result3)


const func1 = (x)=>{
    console.log("I am an arrow function" + x)
}

func1(34)
func1(22)
func1(88)