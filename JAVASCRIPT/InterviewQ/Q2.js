//The double trouble: You are tasked with writing a function that doubles each element in an array.However, there's catch: if the array contains consecutive duplicate elements, only double one of them.
function doubleTrouble(arr) {
    if (!Array.isArray(arr)) {
      console.error("Input is not an array");
      return;
    }
  
    const result = [];
  
    for (let i = 0; i < arr.length; i++) {
      // Check for consecutive duplicates
      if (i < arr.length - 1 && arr[i] === arr[i + 1]) {
        // Double only one of the consecutive duplicates
        result.push(arr[i] * 2);
        i++; // Skip the next element since we've already processed it
      } else {
        result.push(arr[i] * 2);
      }
    }
  
    return result;
  }
  
  // Example usage:
  const inputArray = [1, 2, 2, 3, 4, 4, 4, 5];
  const doubledArray = doubleTrouble(inputArray);
  console.log(doubledArray); // Output: [2, 4, 4, 6, 8, 8, 4, 10]
  