document.addEventListener("DOMContentLoaded", function () {
    var darkModeButton = document.querySelector(".toggle-dark-mode");
    var backButton = document.querySelector(".back-button");
    if (darkModeButton) {
        darkModeButton.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
        });
    }
    if (backButton) {
        backButton.addEventListener("click", function () {
            window.history.back();
        });
    }
});
