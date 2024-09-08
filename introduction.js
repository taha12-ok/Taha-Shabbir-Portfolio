// introduction.js
document.addEventListener("DOMContentLoaded", function () {
    var darkModeToggle = document.getElementById("dark-mode-toggle");
    var body = document.body;
    // Check for saved dark mode preference in local storage
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
    }
    darkModeToggle.addEventListener("click", function () {
        if (body.classList.contains("dark-mode")) {
            body.classList.remove("dark-mode");
            localStorage.setItem("dark-mode", "disabled");
        }
        else {
            body.classList.add("dark-mode");
            localStorage.setItem("dark-mode", "enabled");
        }
    });
});
