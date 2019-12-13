// Possible Password Values
// let specs = "!@#$%^&*()-+";
// let nums = "1234567890";
// let lower = "abcdefghijklmnopqrstuvwxyz";
// let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


// Generator Button Function
function generatePassword() {

    let pLength =
        prompt("Select a password length between 8 and 128 characters.");
    if (pLength > 128 || pLength < 8) {
        pLength = prompt("Please choose a value between 8 and 128.");
    }
    if (pLength > 128 || pLength < 8) {
        location.reload();
    }

    else {

        // Add Special Characters if requested
        var specials = confirm("Special Characters?");

        // Adds Numbers if requested
        var num = confirm("Numbers?");

        // Adds Lower Case Letters if requested
        var lowerCase = confirm("Lowercase letters?");

        // Adds Upper Case Letters if requested
        var uppCase = confirm("Uppercase letters?");
    }

    // Initial blank input
    var charSet = "";

    // If Specials selected
    if (specials) {
        charSet = charSet + "!@#$%^&*()-+";
    }

    // If Numbers selected
    if (num) {
        charSet = charSet + "1234567890";
    }

    // If Lowercase selected
    if (lowerCase) {
        charSet = charSet + "abcdefghijklmnopqrstuvwxyz";
    }

    // If Uppercase selected
    if (uppCase) {
        charSet = charSet + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    // If none selected
    if (charSet == "") {
        alert("Invalid: No criterion Selected")
        return;
    }

    // User Password Variable to be modified
    let userPass = "";

    // Loop for password creation
    for (var i = 0, n = charset.length; i < length; ++i) {
        userPass += charSet[Math.floor(Math.random() * charSet.length)];
    }

    console.log(userPass)

    // Place Password in textbox
    document.getElementById("display").value = userPass
}

var gen = document.getElementById("generate")