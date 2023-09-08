// Get the id of the login form
const loginForm = document.getElementById('login-form');


// wait for the submit button to click
loginForm.addEventListener('submit', async (event) => {
    // Prevent the page from reloading if nothing has been submitted
    event.preventDefault();

    // Get email and password from their form
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
    // Send a post method to the backend server
    const response = await fetch('https://api.ddos.la/user/login', {
        method: 'POST',  
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        },
        // Data send to the server
        body: `email=${email}&password=${password}`,
    });

    // If our login attempt is successful
    if (response.ok) {
        const data = await response.json();

        if (data.status === 1) {
        // Login was successful
        console.log('Login successful:', data.msg);
        // Tell user
        alert("Login successfully!")

        } else {
        // Login failed
        console.error('Login failed:', data.msg);
        // Tell user
        alert("Login unsuccessfully!")
        }
    } else {
        // In case of unexpected error1`
        console.error('HTTP request failed with status:', response.status);
    }
    } catch (error) {
    console.error('Error:', error);
    }
});