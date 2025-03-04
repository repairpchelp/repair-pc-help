document.getElementById('post-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Empêche le rechargement de la page

    // Récupérer les valeurs du formulaire
    const username = document.getElementById('username').value;
    const message = document.getElementById('message').value;

    if (username && message) {
        // Créer un nouvel élément de message
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `<h4>${username} a écrit :</h4><p>${message}</p>`;

        // Ajouter le message à la liste des messages
        document.getElementById('message-list').prepend(messageElement);

        // Effacer le formulaire après soumission
        document.getElementById('username').value = '';
        document.getElementById('message').value = '';
    }
});
