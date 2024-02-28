//The password validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteriaL at least 8 character long, contains both uppercase and lowercase letters, and include at least one digit.

function validator(password){
    if(password.length<8)
    {
        return false;
    }

    if(!/[A-Z]/.test(password) || !/[a-z]/.test(password)){
        return false;
    }

    if(!/\d/.test(password)){
        return false;
    }
    return true;
}

let passwordToCheck = "SecurePass123";
if(validator(passwordToCheck)){
    console.log("Password is valid!");
} else {
    console.log("Password does not meet the criteria.");
}