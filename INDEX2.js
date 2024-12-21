// Toggle password visibility
document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);

    // Change button text based on visibility state
    this.textContent = type === 'password' ? 'Show Password' : 'Hide Password';
});

document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);

    // Change button text based on visibility state
    this.textContent = type === 'password' ? 'Show Password' : 'Hide Password';
});


// Error handling on form submission with focus on invalid fields and shake effect
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    const loginBox = document.getElementById('login-box');

    // Reset any previous shake animations
    loginBox.classList.remove('shake');

    // Simple validation for empty fields and password rules
    if (emailField.value === '' || passwordField.value === '') {
        errorMessage.textContent = 'Both email and password are required.';
        errorMessage.style.display = 'block'; // Show error message
        loginBox.classList.add('shake'); // Trigger shake animation
        if (emailField.value === '') {
            emailField.focus(); // Focus on email field if it's empty
        } else {
            passwordField.focus(); // Focus on password field if it's empty
        }
    } else if (!validateEmail(emailField.value)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        errorMessage.style.display = 'block';
        emailField.focus(); // Focus on invalid email field
        loginBox.classList.add('shake'); // Trigger shake animation
    } else if (!validatePassword(passwordField.value)) {
        errorMessage.textContent = 'Password must be between 6-20 characters and contain no spaces.';
        errorMessage.style.display = 'block';
        passwordField.focus(); // Focus on invalid password field
        loginBox.classList.add('shake'); // Trigger shake animation
    } else {
        errorMessage.style.display = 'none'; // Hide error message
        alert('Form submitted successfully!'); // Mock form submission
        // You can add actual form submission logic here (e.g., send the data to a server)
    }
});
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Perform login validation here (e.g., check credentials)

    // If the login is successful, redirect to mainpage.html
    window.location.href = 'mainpage.html';
});

// Simple email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Password validation function: 6-20 characters, no spaces
function validatePassword(password) {
    const noSpaceRegex = /^\S{6,20}$/;
    return noSpaceRegex.test(password);
}

// Navigate to the new-account.html page on Create Account button click
document.getElementById('createAccount').addEventListener('click', function () {
    window.location.href = 'new-account.html'; // Ensure this path is correct
});


