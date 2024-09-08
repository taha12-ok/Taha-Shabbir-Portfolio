// hobbies.ts

document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("dark-mode-toggle") as HTMLButtonElement;
    const backButton = document.getElementById("back-button") as HTMLButtonElement;
    const body = document.body;

    // Check for saved dark mode preference in local storage
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
    }

    darkModeToggle.addEventListener("click", () => {
        if (body.classList.contains("dark-mode")) {
            body.classList.remove("dark-mode");
            localStorage.setItem("dark-mode", "disabled");
        } else {
            body.classList.add("dark-mode");
            localStorage.setItem("dark-mode", "enabled");
        }
    });

    backButton.addEventListener("click", () => {
        window.history.back();
    });
});
