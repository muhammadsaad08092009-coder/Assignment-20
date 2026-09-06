function handleLogin() {
    let resultDisplay = document.getElementById("result-box");
    

    checkUsername();
    checkPassword();


function checkPassword() {
    let input = document.getElementById("password-Input");
    let value = input.value;
    let result = document.getElementById("result");

    console.log("Password entered:", value);
    result.innerHTML = ""

    if (value.length < 8) {
        console.log("Your password should be at least 8 characters long");
        result.innerHTML = "you have to entered eight digit.";
        result.style.backgroundColor = "lightgreen";        
    }

    if (!/[A-Z]/.test(value)) {
        console.log("You should write 1 Uppercase character");
    }

    if (!/[0-9]/.test(value)) {
        console.log("You should write 1 Digit character");
    }

    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]/.test(value)) {
        console.log("You should write 1 Special character");
    }
}

function checkUsername() {
    let input = document.getElementById("username-Input");
    let value = input.value;

    console.log("Username entered:", value);

    if (value.length < 3) {
        console.log("Your username should be at least 3 characters long");
    }

    if (value.trim() === "") {
        console.log("Username cannot be empty");
    }

    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value)) {
        console.log("Username should not contain special characters");
    }

    if (!/[a-zA-Z]/.test(value)) {
        console.log("Username should contain at least 1 alphabet");
    }
}
}
