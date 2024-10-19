document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Merci " + name + ", votre message a été envoyé !");
        document.getElementById("contactForm").reset();
    } else {
        alert("Veuillez remplir tous les champs.");
    }
});
function updateDateTime() {
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: false 
    };
    const dateTimeString = now.toLocaleString('fr-FR', options);
    document.getElementById('date-time').innerText = dateTimeString;
}
