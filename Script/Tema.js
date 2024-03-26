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
  themeToggle.checked = true;
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


window.onload = function() {
  var themeToggle = document.getElementById('theme-toggle');
  var logo1 = document.getElementById('logo1');
  var logo2 = document.getElementById('logo2');
  if(themeToggle.checked) {
      logo1.style.display = 'none';
      logo2.style.display = 'block';
  } else {
      logo1.style.display = 'block';
      logo2.style.display = 'none';
  }
};

themeToggle.addEventListener('change', function() {
  if(this.checked) {
      logo1.style.display = 'none';
      logo2.style.display = 'block';
  } else {
      logo1.style.display = 'block';
      logo2.style.display = 'none';
  }
});


