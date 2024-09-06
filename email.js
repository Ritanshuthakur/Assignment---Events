document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    // Event Listeners for real-time validation
    nameInput.addEventListener("input", validateName);
    nameInput.addEventListener("blur", validateName);

    emailInput.addEventListener("input", validateEmail);
    emailInput.addEventListener("blur", validateEmail);

    passwordInput.addEventListener("input", validatePassword);
    passwordInput.addEventListener("blur", validatePassword);

    // Function to validate Name
    function validateName() {
        const nameError = document.getElementById("name-error");
        if (nameInput.value.trim() === "") {
            nameError.style.display = "block";
        } else {
            nameError.style.display = "none";
        }
    }

    // Function to validate Email
    function validateEmail() {
        const emailError = document.getElementById("email-error");
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            emailError.style.display = "block";
        } else {
            emailError.style.display = "none";
        }
    }

    // Function to validate Password
    function validatePassword() {
        const passwordError = document.getElementById("password-error");
        if (passwordInput.value.length < 8) {
            passwordError.style.display = "block";
        } else {
            passwordError.style.display = "none";
        }
    }

    // Prevent form submission if any input is invalid
    document.getElementById("registration-forn").addEventListener("submit", function (event) {
        validateName();
        validateEmail();
        validatePassword();

        // Check if there are any visible error messages
        const errors = document.querySelectorAll(".error-message");
        for (let error of errors) {
            if (error.style.display === "block") {
                event.preventDefault();
                break;
            }
        }
    });
});
