// Función para activar/desactivar el modo oscuro
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Cambiar el texto del botón según el modo
    const darkModeButton = document.getElementById('dark-mode-button');
    if (body.classList.contains('dark-mode')) {
        darkModeButton.innerHTML = '<i class="bi bi-sun-fill"></i> Modo Claro';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        darkModeButton.innerHTML = '<i class="bi bi-moon-fill"></i> Modo Oscuro';
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Verificar la preferencia del usuario al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    const darkModeButton = document.getElementById('dark-mode-button');
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeButton.innerHTML = '<i class="bi bi-sun-fill"></i> Modo Claro';
    } else {
        darkModeButton.innerHTML = '<i class="bi bi-moon-fill"></i> Modo Oscuro';
    }
});