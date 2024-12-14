const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('senha');

emailInput.addEventListener('input', () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        // Display an error message
        console.error('Invalid email format');
    } else {
        // Clear the error message
    }
});

passwordInput.addEventListener('input', () => {
    const passwordLength = passwordInput.value.length;
    if (passwordLength < 8) {
        // Display an error message
        console.error('Password must be at least 8 characters long');
    } else {
        // Clear the error message
    }
});