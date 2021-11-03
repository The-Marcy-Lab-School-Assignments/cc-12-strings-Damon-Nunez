//write your code here
function reverseString(str) {
    // Step 1. Create an empty string that will host the new created string
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i]; 
        
    }
    console.log(newString)
}
reverseString("Attempt")