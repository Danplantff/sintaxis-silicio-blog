// Lógica para el menú retráctil en móviles
document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.getElementById('btn-menu');
    const menuPrincipal = document.getElementById('menu-principal');

    if (btnMenu && menuPrincipal) {
        btnMenu.addEventListener('click', () => {
            // Añade o quita la clase 'mostrar' cada vez que se hace clic
            menuPrincipal.classList.toggle('mostrar');
        });
    }
});