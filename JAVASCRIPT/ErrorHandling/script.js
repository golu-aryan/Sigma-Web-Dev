let a = prompt("Enter a number")
let b = prompt("Enter second number")
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sry! this is not allowed")
}
let sum = parseInt(a) + parseInt(b)

function main() {

    let x = 1;
    try {
        console.log("The sum is", sum * x);
        return true
    } catch (error) {
        console.lontg("Error aagya bhai");
        return false
    } finally { //Finally uses in function if you want to print anything after return 
        console.log("File are being closed and connection closed ");
    }
}
let s = main()
