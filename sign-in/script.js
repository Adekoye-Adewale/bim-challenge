const loginForm = document.getElementById('loginForm');
const passwordToggle = document.getElementById('togglePassword');
const passwordField = document.getElementById('password');
const emailField = document.getElementById('email');

// Password requirement elements
const lengthRequirement = document.getElementById('length');
const uppercaseRequirement = document.getElementById('uppercase');
const lowercaseRequirement = document.getElementById('lowercase');
const numberRequirement = document.getElementById('number');
const specialRequirement = document.getElementById('special');

passwordToggle.addEventListener('change', function () {
        passwordField.type = this.checked ? 'text' : 'password';
});

// Form validation and popup
loginForm.addEventListener('submit', function (event) {
        if (emailField.validity.valid && passwordField.validity.valid) {
                alert(`Email: ${emailField.value}\nValid`);
        } else {
                alert('Please ensure both fields are valid.');
        }
});

// Update password requirements list
passwordField.addEventListener('input', function () {
        const value = passwordField.value;

        // Check length
        if (value.length >= 8) {
                lengthRequirement.classList.remove('invalid');
                lengthRequirement.classList.add('valid');
        } else {
                lengthRequirement.classList.remove('valid');
                lengthRequirement.classList.add('invalid');
        }

        // Check for uppercase letter
        if (/[A-Z]/.test(value)) {
                uppercaseRequirement.classList.remove('invalid');
                uppercaseRequirement.classList.add('valid');
        } else {
                uppercaseRequirement.classList.remove('valid');
                uppercaseRequirement.classList.add('invalid');
        }

        // Check for lowercase letter
        if (/[a-z]/.test(value)) {
                lowercaseRequirement.classList.remove('invalid');
                lowercaseRequirement.classList.add('valid');
        } else {
                lowercaseRequirement.classList.remove('valid');
                lowercaseRequirement.classList.add('invalid');
        }

        // Check for number
        if (/\d/.test(value)) {
                numberRequirement.classList.remove('invalid');
                numberRequirement.classList.add('valid');
        } else {
                numberRequirement.classList.remove('valid');
                numberRequirement.classList.add('invalid');
        }

        // Check for special character
        if (/[@$!%*?&]/.test(value)) {
                specialRequirement.classList.remove('invalid');
                specialRequirement.classList.add('valid');
        } else {
                specialRequirement.classList.remove('valid');
                specialRequirement.classList.add('invalid');
        }
});
