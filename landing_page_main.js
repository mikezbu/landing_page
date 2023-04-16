// Get the form element
const form = document.querySelector('form');

// Add a submit event listener to the form
form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the input values from the form
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    // Validate the input values
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
    } else if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
    } else {
        // Send the form data to the server (using a dummy URL for example purposes only)
        const url = 'https://example.com/submit';
        const data = {
            name: name,
            email: email,
            message: message
        };
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            // Show a success message and clear the form
            alert('Thanks for your message!');
            form.reset();
        })
        .catch(error => {
            // Show an error message
            alert('Sorry, there was an error submitting your message. Please try again later.');
        });
    }
});

// Function to validate an email address
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
