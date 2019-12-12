


//Password Generator
function generate() {

    let complexity = document.getElementById("").value;


    // Possible Password Values
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-+";

    let Password = "";

    // Loop for password character selection
    for (var i = 0; i <= complexity; i++) {
        Password = Password + values.charAt(Math.floor(Math.random() * Math.floor(value.length - 1)));
    }

    // Place Password in textbox
    document.getElementById(password).value = Password;

}