const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeLink = document.getElementById('theme');

themeToggle.addEventListener('click', function() {
if (body.classList.contains('light-theme')) {
// Cambia al tema scuro
body.classList.remove('light-theme');
body.classList.add('dark-theme');
themeLink.setAttribute('href', '../Styles/DarkTheme.css');
} else {
// Cambia al tema chiaro
body.classList.remove('dark-theme');
body.classList.add('light-theme');
themeLink.setAttribute('href', '../Styles/Lettera.css');
}

});




