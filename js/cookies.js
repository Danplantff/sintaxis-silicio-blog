document.addEventListener('DOMContentLoaded', () => {
    const cookieBanner = document.getElementById('cookie-banner');
    const btnAceptar = document.getElementById('btn-aceptar-cookies');

    // Verificamos si el banner y el botón existen en la página
    if (cookieBanner && btnAceptar) {
        
        // Comprobamos si el usuario YA aceptó las cookies previamente
        if (!localStorage.getItem('cookiesAceptadas')) {
            // Si no las ha aceptado, mostramos el banner con un ligero retraso de medio segundo
            setTimeout(() => {
                cookieBanner.classList.add('mostrar');
            }, 500);
        }

        // Qué hacer cuando el usuario hace clic en "Aceptar y cerrar"
        btnAceptar.addEventListener('click', () => {
            // Guardamos un pequeño dato en el navegador para recordarlo
            localStorage.setItem('cookiesAceptadas', 'true');
            
            // Ocultamos el banner quitando la clase
            cookieBanner.classList.remove('mostrar');
        });
    }
});