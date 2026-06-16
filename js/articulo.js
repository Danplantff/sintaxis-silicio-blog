document.addEventListener('DOMContentLoaded', () => {
    cargarPostCompleto();
});

async function cargarPostCompleto() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    const contenedor = document.getElementById('contenido-post');

    if (!postId) {
        contenedor.innerHTML = '<h2>Artículo no encontrado</h2><a href="index.html">Volver al inicio</a>';
        return;
    }

    try {
        const respuesta = await fetch('data/articulos.json');
        const articulos = await respuesta.json();
        
        const articuloActual = articulos.find(item => item.id === postId);

        if (articuloActual) {
            document.title = `${articuloActual.titulo} | Sintaxis & Silicio`;

            contenedor.innerHTML = `
                <header class="post-header">
                    <h1>${articuloActual.titulo}</h1>
                    <span class="fecha">Publicado el: ${articuloActual.fecha}</span>
                </header>
                <div class="post-imagen">
                    <img src="${articuloActual.imagen}" alt="Imagen de ${articuloActual.titulo}">
                </div>
                <div class="post-cuerpo">
                    ${articuloActual.contenido}
                </div>
                <div class="post-footer">
                    <a href="index.html" class="btn-secundario">&larr; Volver a todos los artículos</a>
                </div>
            `;

            // NUEVO: Llamamos a la función para mostrar los relacionados
            mostrarRelacionados(articulos, postId);

        } else {
            contenedor.innerHTML = '<h2>El artículo no existe</h2><a href="index.html">Volver al inicio</a>';
        }

    } catch (error) {
        console.error('Error al cargar el artículo:', error);
        contenedor.innerHTML = '<p>Error de conexión. Intenta de nuevo más tarde.</p>';
    }
}

// NUEVA FUNCIÓN: Inyecta 3 artículos diferentes al actual
function mostrarRelacionados(todosLosArticulos, idActual) {
    const contenedorRelacionados = document.getElementById('grid-relacionados');
    
    // Filtramos para quitar el artículo actual y tomamos solo los primeros 3
    const relacionados = todosLosArticulos
        .filter(articulo => articulo.id !== idActual)
        .slice(0, 3);

    let htmlContenido = '';

    relacionados.forEach(articulo => {
        htmlContenido += `
            <article class="card">
                <img src="${articulo.imagen}" alt="Portada de ${articulo.titulo}">
                <div class="card-content">
                    <h3>${articulo.titulo}</h3>
                    <a href="articulo.html?id=${articulo.id}" class="btn-leer">Leer más</a>
                </div>
            </article>
        `;
    });

    contenedorRelacionados.innerHTML = htmlContenido;
}