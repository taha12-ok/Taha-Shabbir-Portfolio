// Back Button Functionality
const backButton = document.getElementById('back-button');
backButton?.addEventListener('click', () => {
    window.history.back();
});

// Dark Mode Toggle
const toggleButton = document.getElementById('dark-mode-toggle');
toggleButton?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
