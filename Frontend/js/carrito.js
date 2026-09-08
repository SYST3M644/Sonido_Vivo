/* Este archivo solo se usa en carrito.html.
   Usa funciones que ya existen en script.js:
   obtenerCarrito(), guardarCarrito(), actualizarContadorCarrito() */

function formatearPrecioCarrito(numero) {
    return "$" + numero.toLocaleString("es-CL") + " CLP";
}

/* Dibuja la lista de productos guardados en localStorage */
function renderCarrito() {
    const contenedor = document.getElementById("cart-items");
    if (!contenedor) return;

    const carrito = obtenerCarrito();

    if (carrito.length === 0) {
        contenedor.innerHTML = "<p>Tu carrito está vacío.</p>";
        document.getElementById("cart-total").textContent = formatearPrecioCarrito(0);
        return;
    }

    contenedor.innerHTML = carrito.map(function (item) {
        return `
            <div class="cart-item">
                <span class="cart-item-name">${item.nombre}</span>
                <span class="cart-item-qty">Cantidad: ${item.cantidad}</span>
                <span class="cart-item-price">${formatearPrecioCarrito(item.precio * item.cantidad)}</span>
                <button class="remove-item-btn" data-codigo="${item.codigo}">
                    Eliminar
                </button>
            </div>
        `;
    }).join("");

    // Enchufamos el evento de clic a cada botón "Eliminar".
    document.querySelectorAll(".remove-item-btn").forEach(function (boton) {
        boton.addEventListener("click", function () {
            eliminarDelCarrito(boton.dataset.codigo);
        });
    });

    // Sumamos precio x cantidad de cada producto para el total.
    const total = carrito.reduce(function (suma, item) {
        return suma + (item.precio * item.cantidad);
    }, 0);

    document.getElementById("cart-total").textContent = formatearPrecioCarrito(total);
}

/* Saca un producto del carrito según su código y vuelve a dibujar todo */
function eliminarDelCarrito(codigo) {
    let carrito = obtenerCarrito();
    carrito = carrito.filter(function (item) { return item.codigo !== codigo; });
    guardarCarrito(carrito);
    renderCarrito();
    actualizarContadorCarrito();
}

document.addEventListener("DOMContentLoaded", function () {
    renderCarrito();

    const botonVaciar = document.getElementById("clear-cart-btn");
    if (botonVaciar) {
        botonVaciar.addEventListener("click", function () {
            guardarCarrito([]);
            renderCarrito();
            actualizarContadorCarrito();
        });
    }
});