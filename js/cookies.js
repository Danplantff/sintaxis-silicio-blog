// Archivo: js/cookies.js
document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('cookie-banner');
    const btnAceptar = document.getElementById('btn-aceptar-cookies');

    if (!banner || !btnAceptar) return; // Evita errores si no encuentra el elemento

    // Comprobar si el usuario ya aceptó las cookies previamente
    const cookiesAceptadas = localStorage.getItem('cookiesAceptadas_SintaxisSilicio');

    if (!cookiesAceptadas) {
        // Mostrar el banner con un pequeño retraso de 1 segundo
        setTimeout(() => {
            banner.classList.add('mostrar');
        }, 1000);
    }

    // Acción al hacer clic en el botón
    btnAceptar.addEventListener('click', () => {
        // Guardar la preferencia en el navegador del usuario de forma permanente
        localStorage.setItem('cookiesAceptadas_SintaxisSilicio', 'true');
        
        // Ocultar el banner deslizándolo hacia abajo
        banner.classList.remove('mostrar');
    });
});