document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "Itsincom" && password === "Progetto2") {
        window.location.href = "../Pagine/HomeRiservata.html"
    } else {
        alert("Username o password errati");
        return false;
    }
});

