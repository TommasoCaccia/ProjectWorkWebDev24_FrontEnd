function inviaLettera() {
    var nome = document.getElementById('nome').value;
    var cognome = document.getElementById('cognome').value;
    var email = document.getElementById('email').value;
    var testoLettera = document.getElementById('testo-lettera').value;

    // Verifica se tutti i campi sono stati compilati
    if (nome && cognome && email && testoLettera) {
        // Verifica se l'email è valida
        if (email.includes('@') && email.includes('.')) {
            alert("La lettera di richiamo è stata inviata con successo al dipendente.");
        } else {
            alert("L'indirizzo email non è valido. Si prega di inserire un'email corretta.");
        }
    } else {
        alert("È necessario compilare tutti i campi presenti nella schermata.");
    }
}
