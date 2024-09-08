document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const backButton = document.getElementById("back-button");

    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
        });
    }

    if (backButton) {
        backButton.addEventListener("click", () => {
            window.history.back();
        });
    }
});
