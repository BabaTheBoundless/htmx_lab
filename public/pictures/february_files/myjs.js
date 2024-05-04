function toggleDarkMode() {
    var element = document.body;
    var darkMode = element.classList.contains("dark-mode");
    if (darkMode) {
        element.classList.remove("dark-mode");
    }
    else {
    element.classList.add("dark-mode");
}
}

