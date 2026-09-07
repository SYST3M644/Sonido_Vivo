/* Este archivo solo se usa en detalle.html.
   Usa cosas que ya existen en script.js:
   productos, formatearPrecio(), agregarAlCarrito() */

function renderDetalle() {
    const datosGuardados = localStorage.getItem("productoSeleccionado");
    const producto = datosGuardados ? JSON.parse(datosGuardados) : null;

    // Si alguien entra a esta página directamente (sin pasar por el catálogo),
    // no hay ningún producto guardado todavía.
    if (!producto) {
        document.querySelector(".detail-page").innerHTML =
            "<p>No se encontró ningún producto. <a href='index.html#catalogo'>Volver al catálogo</a></p>";
        return;
    }

    document.getElementById("detalle-imagen").src = producto.imagen;
    document.getElementById("detalle-imagen").alt = producto.nombre;
    document.getElementById("detalle-categoria").textContent = producto.categoria;
    document.getElementById("detalle-nombre").textContent = producto.marca + " " + producto.nombre;
    document.getElementById("detalle-marca-modelo").textContent = "Modelo: " + producto.modelo;
    document.getElementById("detalle-descripcion").textContent = producto.descripcion;
    document.getElementById("detalle-stock").textContent = "Stock disponible: " + producto.stock + " unidades";
    document.getElementById("detalle-precio").textContent = formatearPrecio(producto.precio);

    document.getElementById("detalle-add-cart-btn").addEventListener("click", function () {
        agregarAlCarrito(producto.codigo);
    });
}

document.addEventListener("DOMContentLoaded", renderDetalle);