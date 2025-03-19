const { LocalStorage } = require('node-localstorage');

// Create a local storage instance (stores data in the 'scratch' folder)
const localStorage = new LocalStorage('./scratch');

// Check if values exist; if not, set them
if (!localStorage.getItem('name')) {
    localStorage.setItem('name', 'John Doe');
    localStorage.setItem('dob', '01-01-2000');
    localStorage.setItem('email', 'johndoe@example.com');
    localStorage.setItem('gender', 'Male');
}

// Fetch user details
const details = {
    name: localStorage.getItem('name'),
    dob: localStorage.getItem('dob'),
    email: localStorage.getItem('email'),
    gender: localStorage.getItem('gender'),
};

console.log(details); // This should now print actual stored values

// Export details for other files
module.exports = details;
