document.addEventListener("DOMContentLoaded", () => {
    const darkModeButton = document.querySelector(".toggle-dark-mode") as HTMLButtonElement;
    const backButton = document.querySelector(".back-button") as HTMLButtonElement;

    if (darkModeButton) {
        darkModeButton.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
        });
    }

    if (backButton) {
        backButton.addEventListener("click", () => {
            window.history.back();
        });
    }
});
