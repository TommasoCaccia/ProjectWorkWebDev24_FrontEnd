const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeLink = document.getElementById('theme');
let themePreference = localStorage.getItem('themePreference');
 
// Imposta il tema predefinito come chiaro se non c'è nessuna preferenza salvata
if (!themePreference) {
    themePreference = 'light';
}
 
// Imposta il tema in base alla preferenza salvata
if (themePreference === 'dark') {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    themeLink.setAttribute('href', '../Styles/DarkTheme.css');
}
 
// Aggiungi un event listener per cambiare il tema quando l'utente clicca sul toggle
themeToggle.addEventListener('click', function() {
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeLink.setAttribute('href', '../Styles/DarkTheme.css');
        localStorage.setItem('themePreference', 'dark'); // Salva la preferenza del tema
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeLink.setAttribute('href', '../Styles/Lettera.css');
        localStorage.setItem('themePreference', 'light'); // Salva la preferenza del tema
    }
});



/*const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeLink = document.getElementById('theme');

themeToggle.addEventListener('click', function() {
if (body.classList.contains('light-theme')) {
 //Cambia al tema scuro
body.classList.remove('light-theme');
body.classList.add('dark-theme');
themeLink.setAttribute('href', '../Styles/DarkTheme.css');
} else {
// Cambia al tema chiaro
body.classList.remove('dark-theme');
body.classList.add('light-theme');
themeLink.setAttribute('href', '../Styles/Lettera.css');
}

});*/




