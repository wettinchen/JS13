// Functions

// Function Declaration Syntax:
function getUserNameFromEmail(email) {
    return email.slice(0, email.indexOf("@"));
}

console.log(getUserNameFromEmail("user@Github.com"));