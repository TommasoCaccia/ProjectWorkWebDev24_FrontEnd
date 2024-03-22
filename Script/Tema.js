function toggleTheme() {
    const themeLink = document.getElementById('theme-link');
    // Controlla se il tema corrente è il chiaro o lo scuro
    if (themeLink.getAttribute('href') === '../Script/LightTheme.css') {
        // Cambia al tema scuro
        themeLink.setAttribute('href', '../Script/DarkTheme.css');
    } else {
        // Cambia al tema chiaro
        themeLink.setAttribute('href', '../Script/LightTheme.css');
    }
}