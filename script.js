console.log("Script loaded successfully.");

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Calculate the distance to scroll
            const offset = target.getBoundingClientRect().top + window.scrollY;

            // Scroll smoothly to the target element
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        }
    });
});

// Wait for the DOM to fully load before accessing elements
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('order-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Validate form fields
        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var selectedClass = document.getElementById('class').value;
        var selectedInterest = document.getElementById('interest').value;
        var isValid = true;
        
        // Validation rules
        if (name === '') {
            alert('Please enter your name.');
            isValid = false;
        }
        
        if (email === '') {
            alert('Please enter your email address.');
            isValid = false;
        } else if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            isValid = false;
        }
        
        if (selectedClass === 'none') {
            alert('Please select your class.');
            isValid = false;
        }
        
        if (selectedInterest === 'none') {
            alert('Please select your interest.');
            isValid = false;
        }
        
        // Submit form if valid
        if (isValid) {
            // Here you can submit the form
            // For example: document.getElementById('order-form').submit();
            alert('Form submitted successfully!');
        }
    });
});

// Function to validate email format
function isValidEmail(email) {
    var regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}
