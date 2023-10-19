// common.js
function mostrarProductosEnTienda() {
    const productosContainer = document.getElementById('mainContent');
    productosContainer.innerHTML = '';

    productos.forEach((producto, index) => {
        const productoElement = document.createElement('div');
        productoElement.innerHTML = `
            <h3>${producto.titulo}</h3>
            <p>Precio: $${producto.precio}</p>
            <p>Stock: ${producto.cantidad}</p>
            <p>Imagen: <img src="${producto.imagen}" alt="${producto.titulo}"></p>
        `;

        productosContainer.appendChild(productoElement);
    });
}
