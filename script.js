function generatePassword() {
    const length = document.getElementById("length").value;
    const upper = document.getElementById("upper").checked;
    const lower = document.getElementById("lower").checked;
    const number = document.getElementById("number").checked;
    const symbol = document.getElementById("symbol").checked;

    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+";

    let allChars = "";
    let password = "";

    if (upper) allChars += upperChars;
    if (lower) allChars += lowerChars;
    if (number) allChars += numberChars;
    if (symbol) allChars += symbolChars;

    if (allChars === "") {
        document.getElementById("msg").innerText = "Please select at least one option!";
        return;
    }

    for (let i = 0; i < length; i++) {
        password += allChars.charAt(
            Math.floor(Math.random() * allChars.length)
        );
    }

    document.getElementById("password").value = password;
    document.getElementById("msg").innerText = "";
}

function copyPassword() {
    const passwordField = document.getElementById("password");
    if (passwordField.value === "") return;

    passwordField.select();
    document.execCommand("copy");

    document.getElementById("msg").innerText = "Password copied!";
}
