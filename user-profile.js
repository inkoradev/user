// Load the user data from localStorage
const userName = localStorage.getItem('userName');
const userEmail = localStorage.getItem('userEmail');
const userBio = localStorage.getItem('userBio');

// Check if the data exists and display it
if (userName && userEmail && userBio) {
    document.getElementById('profile-name').textContent = userName;
    document.getElementById('profile-email').textContent = userEmail;
    document.getElementById('profile-bio').textContent = userBio;
} else {
    document.getElementById('profile-name').textContent = 'No name available';
    document.getElementById('profile-email').textContent = 'No email available';
    document.getElementById('profile-bio').textContent = 'No bio available';
}

const username = localStorage.getItem('username');

// Display the username in the profile section
document.getElementById('profile-username').textContent = username ? username : 'No username set';