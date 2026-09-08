let productoEditando = null;

function mostrarProductos() {
    let tabla = document.getElementById("tabla-productos");
    tabla.innerHTML = "";

    document.getElementById("total-productos").textContent = productos.length;

    for (let i = 0; i < productos.length; i++) {
        let fila = document.createElement("tr");
        fila.innerHTML =
            "<td>" + productos[i].codigo + "</td>" +
            "<td>" + productos[i].nombre + "</td>" +
            "<td>$" + productos[i].precio + "</td>" +
            "<td>" + productos[i].stock + "</td>" +
            '<td><button class="boton-editar" onclick="abrirEditar(' + i + ')">Editar</button></td>';
        tabla.appendChild(fila);
    }
}

function abrirEditar(indice) {
    productoEditando = indice;
    document.getElementById("edit-nombre").value = productos[indice].nombre;
    document.getElementById("edit-precio").value = productos[indice].precio;
    document.getElementById("edit-stock").value = productos[indice].stock;
    document.getElementById("ventana-editar").classList.remove("hidden");
}

function cerrarVentana() {
    document.getElementById("ventana-editar").classList.add("hidden");
    productoEditando = null;
}

function guardarEdicion() {
    if (productoEditando === null) return;

    let nombre = document.getElementById("edit-nombre").value;
    let precio = Number(document.getElementById("edit-precio").value);
    let stock = Number(document.getElementById("edit-stock").value);

    if (nombre === "" || precio === 0 || stock === 0) {
        alert("Completá todos los campos");
        return;
    }

    productos[productoEditando].nombre = nombre;
    productos[productoEditando].precio = precio;
    productos[productoEditando].stock = stock;

    alert("Producto actualizado");
    cerrarVentana();
    mostrarProductos();
}

mostrarProductos();
