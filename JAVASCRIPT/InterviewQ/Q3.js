//The Mirror Mirror:Imagine you have a string, and you need to create a new string that is a mirror image of the original .Write a function that appends the reversed version of the original string to itself.

function mirrorMirror(originalString) {
    if (typeof originalString !== 'string') {
      console.error("Input is not a string");
      return;
    }
  
    // Reverse the original string
    const reversedString = originalString.split('').reverse().join('');
  
    // Append the reversed string to the original string
    const mirroredString = originalString + reversedString;
  
    return mirroredString;
  }
  
  // Example usage:
  const inputString = "Hello";
  const mirroredResult = mirrorMirror(inputString);
  console.log(mirroredResult); // Output: "HelloolleH"
  