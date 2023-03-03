function validateForm(event) {

    event.preventDefault();

    var email = document.getElementById("email").value;

    if (!email.includes("@")) {
        alert("Por favor, introduce un correo válido.");
        return false;
    }

    alert("Se ha enviado correctamente.");
    return true;

}