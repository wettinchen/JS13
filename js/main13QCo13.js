// Functions

// Function Declaration Syntax:
const getUserNameFromEmail = function(email) {
    return email.slice(0, email.indexOf("@"));
}


console.log(getUserNameFromEmail("dave@daveDomain.com"));