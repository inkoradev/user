// Function to close the modal
function closeModal() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.style.display = 'none';
    });
}

// Event listener for closing the modal
document.querySelectorAll(".close").forEach(closeButton => {
    closeButton.addEventListener("click", closeModal);
});

// Event listener for opening the modal (when a blog title or "Read More" is clicked)
document.querySelectorAll(".read-more").forEach(titleLink => {
    titleLink.addEventListener("click", function(event) {
        const modalId = this.getAttribute("href");
        const modal = document.querySelector(modalId);
        modal.style.display = "flex";
        event.preventDefault();
    });
});

// Event listener for closing modal when clicked outside the modal content
window.addEventListener("click", function(event) {
    if (event.target.classList.contains("modal")) {
        closeModal();
    }
});
