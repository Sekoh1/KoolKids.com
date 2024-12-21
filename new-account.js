// Dynamically populate Day and Year dropdowns for Date of Birth
document.addEventListener('DOMContentLoaded', function () {
    const daySelect = document.getElementById('dob-day');
    const yearSelect = document.getElementById('dob-year');

    // Populate Day (1-31)
    for (let day = 1; day <= 31; day++) {
        const option = document.createElement('option');
        option.value = day;
        option.textContent = day;
        daySelect.appendChild(option);
    }

    // Populate Year (1900-2100)
    for (let year = 1900; year <= 2100; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }
});

// Toggle password visibility for both password fields
document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirmPassword');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    
    passwordField.setAttribute('type', type);
    confirmPasswordField.setAttribute('type', type);

    // Change button text based on visibility state
    this.textContent = type === 'password' ? 'Show Passwords' : 'Hide Passwords';
});

// Error handling on form submission
document.getElementById('newAccountForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const firstNameField = document.getElementById('firstName');
    const lastNameField = document.getElementById('lastName');
    const phoneField = document.getElementById('phone');
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirmPassword');
    const errorMessage = document.getElementById('error-message');

    // Clear any previous error message
    errorMessage.style.display = 'none';
    errorMessage.textContent = '';

    // Validate form fields
    if (firstNameField.value === '' || lastNameField.value === '' || phoneField.value === '' || emailField.value === '' || passwordField.value === '' || confirmPasswordField.value === '') {
        errorMessage.textContent = 'All fields are required.';
        errorMessage.style.display = 'block';
    } else if (!validatePhone(phoneField.value)) {
        errorMessage.textContent = 'Please enter a valid phone number (e.g., 123-456-7890).';
        errorMessage.style.display = 'block';
    } else if (!validateEmail(emailField.value)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        errorMessage.style.display = 'block';
    } else if (passwordField.value !== confirmPasswordField.value) {
        errorMessage.textContent = 'Passwords do not match.';
        errorMessage.style.display = 'block';
    } else if (!validatePassword(passwordField.value)) {
        errorMessage.textContent = 'Password must be between 6-20 characters and contain no spaces.';
        errorMessage.style.display = 'block';
    } else {
        alert('Account created successfully!'); // Mock form submission
        // You can add actual form submission logic here (e.g., send the data to a server)
    }
});

// Simple phone number validation function using regex
function validatePhone(phone) {
    const phoneRegex = /^(?:\+1[-.\s]?|1[-.\s]?)?\(?([2-9][0-8][0-9])\)?[-.\s]?([2-9][0-9]{2})[-.\s]?([0-9]{4})$/;
    return phoneRegex.test(phone);
}

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

// Go Back button functionality to return to the login page
document.getElementById('goBack').addEventListener('click', function () {
    window.location.href = 'index.html'; // Ensure the correct path to your login page
});

// Dynamically populate Day and Year dropdowns for Date of Birth
document.addEventListener('DOMContentLoaded', function () {
    const daySelect = document.getElementById('dob-day');
    const yearSelect = document.getElementById('dob-year');

    // Populate Day (1-31)
    for (let day = 1; day <= 31; day++) {
        const option = document.createElement('option');
        option.value = day;
        option.textContent = day;
        daySelect.appendChild(option);
    }

    // Populate Year (1900-2100)
    for (let year = 1900; year <= 2100; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }
});

// Dynamically populate Day and Year dropdowns for Date of Birth
document.addEventListener('DOMContentLoaded', function () {
    const daySelect = document.getElementById('dob-day');
    const yearSelect = document.getElementById('dob-year');

    // Populate Day (1-31)
    for (let day = 1; day <= 31; day++) {
        const option = document.createElement('option');
        option.value = day;
        option.textContent = day;
        daySelect.appendChild(option);
    }

    // Populate Year (1900-2100)
    for (let year = 1900; year <= 2100; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }
});


// Error handling and form validation logic remains the same...

// Go Back button functionality with confirmation dialog and fade-out transition
document.getElementById('goBack').addEventListener('click', function () {
    if (confirm('Are you sure you want to go back to the login page? Unsaved data will be lost.')) {
        document.body.style.animation = 'fadeOut 1s ease-in-out'; // Fade-out effect
        setTimeout(function () {
            window.location.href = 'index.html'; // Navigate back to login after fade-out
        }, 1000); // Delay to allow the fade-out animation to complete
    }
});

// Dynamically populate Day and Year dropdowns for Date of Birth
document.addEventListener('DOMContentLoaded', function () {
    const daySelect = document.getElementById('dob-day');
    const yearSelect = document.getElementById('dob-year');

    // Populate Day (1-31)
    for (let day = 1; day <= 31; day++) {
        const option = document.createElement('option');
        option.value = day;
        option.textContent = day;
        daySelect.appendChild(option);
    }

    // Populate Year (1900-2100)
    for (let year = 1900; year <= 2100; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }
});


// Enable/Disable Confirm Password based on Password input
const passwordField = document.getElementById('password');
const confirmPasswordField = document.getElementById('confirmPassword');

// Monitor password input to enable/disable the confirm password field
passwordField.addEventListener('input', function () {
    if (validatePassword(passwordField.value)) {
        confirmPasswordField.disabled = false;
    } else {
        confirmPasswordField.disabled = true;
    }
});

// Simple phone number validation function using regex
function validatePhone(phone) {
    const phoneRegex = /^(?:\+1[-.\s]?|1[-.\s]?)?\(?([2-9][0-8][0-9])\)?[-.\s]?([2-9][0-9]{2})[-.\s]?([0-9]{4})$/;
    return phoneRegex.test(phone);
}

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

document.getElementById('newAccountForm').addEventListener('submit', function(e) {
    const termsCheckbox = document.getElementById('terms');
    const errorMessage = document.getElementById('error-message');

    // Clear any previous error message
    errorMessage.style.display = 'none';

    // Check if the "Terms and Privacy Policy" checkbox is checked
    if (!termsCheckbox.checked) {
        e.preventDefault(); // Prevent the form from submitting
        errorMessage.textContent = "You must agree to the Terms and Privacy Policy to create an account.";
        errorMessage.style.display = 'block'; // Show the error message
    }
});

document.getElementById('newAccountForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Perform validation here (e.g., check fields, handle errors)

    // If account creation is successful, redirect to mainpage.html
    window.location.href = 'mainpage.html';
});