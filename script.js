document.getElementById('mystery-button').addEventListener('click', function() {
    var mysteryButton = this;
    var likeMessage = document.getElementById('like-message');

    // Muestra el mensaje "me gustas"
    likeMessage.classList.add('show');
    
    // Cambia el texto del botón y lo deshabilita
    mysteryButton.textContent = '¡Gracias!'; 
    mysteryButton.disabled = true;
    mysteryButton.style.backgroundColor = '#cccccc'; // Estilo de botón deshabilitado
    mysteryButton.style.cursor = 'default';
});
