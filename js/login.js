// Obtén una referencia al formulario y sus campos
const loginForm = document.querySelector('form');
const usernameInput = document.getElementById('userName');
const passwordInput = document.getElementById('pwd');

// Agrega un evento de escucha para el envío del formulario
loginForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que se envíe el formulario por defecto

    // Obtén los valores de usuario y contraseña
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Verifica las credenciales del administrador (agrega tu lógica aquí)
    if (username === 'admin' && password === 'password') {
        // Credenciales válidas, redirige al administrador a la página de administrador
        window.location.href = 'products.html'; // Reemplaza 'admin.html' con la URL real de tu página de administrador
    } else {
        // Credenciales incorrectas, muestra un mensaje de error
        alert('Credenciales incorrectas. Inténtalo de nuevo.');
    }
});
