// Get the mode toggle checkbox
const modeToggle = document.getElementById('mode-toggle');

// Check if dark mode is stored in localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    modeToggle.checked = true;
}

// Add event listener for the toggle
modeToggle.addEventListener('change', () => {
    if (modeToggle.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    }
});
