// Functions

// Function Declaration Syntax:
const getUserNameFromEmail = (email) => {
    return email.slice(0, email.indexOf("@"));
}


console.log(getUserNameFromEmail("john@daveDomain.com"));