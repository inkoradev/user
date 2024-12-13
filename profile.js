// Select elements
const editBtn = document.getElementById('edit-btn');
const saveBtn = document.getElementById('save-btn');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const bioInput = document.getElementById('bio');

// Function to toggle editing mode
function toggleEdit() {
    const isEditing = nameInput.disabled;

    // Toggle input fields between disabled/enabled
    nameInput.disabled = !isEditing;
    emailInput.disabled = !isEditing;
    bioInput.disabled = !isEditing;

    // Toggle button visibility
    editBtn.style.display = isEditing ? 'none' : 'inline-block';
    saveBtn.style.display = isEditing ? 'inline-block' : 'none';
}

// Function to save changes and redirect
function saveProfile() {
    // Get the entered values
    const updatedName = nameInput.value;
    const updatedEmail = emailInput.value;
    const updatedBio = bioInput.value;

    // Save data to localStorage
    localStorage.setItem('userName', updatedName);
    localStorage.setItem('userEmail', updatedEmail);
    localStorage.setItem('userBio', updatedBio);

    // Redirect to the user-profile page
    window.location.href = 'user-profile.html';
}

// Add event listeners
editBtn.addEventListener('click', toggleEdit);
saveBtn.addEventListener('click', saveProfile);
const username = localStorage.getItem('username');

document.getElementById('save-btn').addEventListener('click', function() {
    // Get the username input value
    const username = document.getElementById('username').value;

    // Save the username to localStorage
    localStorage.setItem('username', username);

    // Redirect to the user-profile page
    window.location.href = 'user-profile.html';
});
