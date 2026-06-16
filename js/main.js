document.addEventListener('DOMContentLoaded', () => {
    cargarArticulos();
});

async function cargarArticulos() {
    try {
        // Hacemos la petición al archivo JSON
        const respuesta = await fetch('data/articulos.json');
        const articulos = await respuesta.json();
        
        const contenedor = document.getElementById('grid-articulos');
        let htmlContenido = '';

        // Recorremos cada artículo y creamos su estructura HTML
        articulos.forEach(articulo => {
            htmlContenido += `
                <article class="card">
                    <img src="${articulo.imagen}" alt="Portada de ${articulo.titulo}">
                    <div class="card-content">
                        <h3>${articulo.titulo}</h3>
                        <span class="fecha">${articulo.fecha}</span>
                        <p>${articulo.resumen}</p>
                        <a href="articulo.html?id=${articulo.id}" class="btn-leer">Leer más</a>
                    </div>
                </article>
            `;
        });

        // Insertamos todo el HTML generado en el contenedor
        contenedor.innerHTML = htmlContenido;

    } catch (error) {
        console.error('Error al cargar los artículos:', error);
        document.getElementById('grid-articulos').innerHTML = '<p>Hubo un problema al cargar el contenido.</p>';
    }
}