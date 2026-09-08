const CLAVE_PRODUCTOS = "productos_sonido";

let codigoEditando = null; 

function obtenerProductosAdmin() {
    const guardado = localStorage.getItem(CLAVE_PRODUCTOS);
    if (guardado) {
        return JSON.parse(guardado);
    }
    return JSON.parse(JSON.stringify(productos));
}

function guardarProductosAdmin(lista) {
    localStorage.setItem(CLAVE_PRODUCTOS, JSON.stringify(lista));
}


function marcarError(idCampo, mensaje) {
    document.getElementById(idCampo).classList.remove("campo-valido");
    document.getElementById(idCampo).classList.add("campo-invalido");
    document.getElementById("error-" + idCampo).textContent = mensaje;
    return false;
}

function marcarCorrecto(idCampo) {
    document.getElementById(idCampo).classList.remove("campo-invalido");
    document.getElementById(idCampo).classList.add("campo-valido");
    document.getElementById("error-" + idCampo).textContent = "";
    return true;
}

function actualizarContador(idCampo, maximo) {
    const contador = document.getElementById("contador-" + idCampo);
    if (!contador) return;

    const largo = document.getElementById(idCampo).value.length;
    contador.textContent = largo + " / " + maximo;

    if (largo >= maximo) {
        contador.classList.add("contador-tope");
    } else {
        contador.classList.remove("contador-tope");
    }
}

function mostrarAviso(texto, esError) {
    const aviso = document.getElementById("aviso-producto");
    aviso.className = esError ? "aviso-error" : "aviso-ok";
    aviso.textContent = texto;
}

function limpiarAviso() {
    const aviso = document.getElementById("aviso-producto");
    aviso.className = "";
    aviso.textContent = "";
}


function validarCodigo() {
    const valor = document.getElementById("p-codigo").value.trim();

    if (valor === "") {
        return marcarError("p-codigo", "El código es obligatorio.");
    }
    if (valor.length < 3) {
        return marcarError("p-codigo", "El código debe tener al menos 3 caracteres.");
    }

    if (codigoEditando === null) {
        const lista = obtenerProductosAdmin();
        const repetido = lista.find(function (p) {
            return p.codigo.toUpperCase() === valor.toUpperCase();
        });
        if (repetido) {
            return marcarError("p-codigo", "Ya existe un producto con el código " + valor + ".");
        }
    }

    return marcarCorrecto("p-codigo");
}

function validarNombre() {
    const valor = document.getElementById("p-nombre").value.trim();

    if (valor === "") {
        return marcarError("p-nombre", "El nombre es obligatorio.");
    }
    if (valor.length > 100) {
        return marcarError("p-nombre", "El nombre no puede superar los 100 caracteres.");
    }
    return marcarCorrecto("p-nombre");
}

function validarCategoria() {
    const valor = document.getElementById("p-categoria").value;

    if (valor === "") {
        return marcarError("p-categoria", "Selecciona una categoría.");
    }
    return marcarCorrecto("p-categoria");
}

function validarDescripcion() {
    const valor = document.getElementById("p-descripcion").value.trim();

    if (valor.length > 500) {
        return marcarError("p-descripcion", "La descripción no puede superar los 500 caracteres.");
    }
    return marcarCorrecto("p-descripcion");
}

function validarPrecio() {
    const texto = document.getElementById("p-precio").value.trim();

    if (texto === "") {
        return marcarError("p-precio", "El precio es obligatorio.");
    }

    const numero = Number(texto);

    if (isNaN(numero)) {
        return marcarError("p-precio", "El precio debe ser un número.");
    }
    if (numero < 0) {
        return marcarError("p-precio", "El precio no puede ser negativo.");
    }
    if (numero === 0) {
        marcarCorrecto("p-precio");
        document.getElementById("error-p-precio").textContent = "";
        return true;
    }
    return marcarCorrecto("p-precio");
}

function validarStock() {
    const texto = document.getElementById("p-stock").value.trim();

    if (texto === "") {
        return marcarError("p-stock", "El stock es obligatorio.");
    }

    const numero = Number(texto);

    if (isNaN(numero)) {
        return marcarError("p-stock", "El stock debe ser un número.");
    }
    if (numero < 0) {
        return marcarError("p-stock", "El stock no puede ser negativo.");
    }
    if (Number.isInteger(numero) === false) {
        return marcarError("p-stock", "El stock debe ser un número entero, sin decimales.");
    }
    return marcarCorrecto("p-stock");
}

function validarCritico() {
    const texto = document.getElementById("p-critico").value.trim();

    if (texto === "") {
        return marcarCorrecto("p-critico");
    }

    const numero = Number(texto);

    if (isNaN(numero)) {
        return marcarError("p-critico", "El stock crítico debe ser un número.");
    }
    if (numero < 0) {
        return marcarError("p-critico", "El stock crítico no puede ser negativo.");
    }
    if (Number.isInteger(numero) === false) {
        return marcarError("p-critico", "El stock crítico debe ser un número entero.");
    }
    return marcarCorrecto("p-critico");
}

function guardarProducto(evento) {
    evento.preventDefault();

    const codigoOk = validarCodigo();
    const nombreOk = validarNombre();
    const categoriaOk = validarCategoria();
    const descripcionOk = validarDescripcion();
    const precioOk = validarPrecio();
    const stockOk = validarStock();
    const criticoOk = validarCritico();

    if (!codigoOk || !nombreOk || !categoriaOk || !descripcionOk || !precioOk || !stockOk || !criticoOk) {
        mostrarAviso("Revisa los campos marcados en rojo antes de guardar.", true);
        return;
    }

    const criticoTexto = document.getElementById("p-critico").value.trim();

    const producto = {
        codigo: document.getElementById("p-codigo").value.trim().toUpperCase(),
        categoria: document.getElementById("p-categoria").value,
        nombre: document.getElementById("p-nombre").value.trim(),
        marca: document.getElementById("p-marca").value.trim(),
        modelo: document.getElementById("p-modelo").value.trim(),
        stock: Number(document.getElementById("p-stock").value),
        stockCritico: criticoTexto === "" ? null : Number(criticoTexto),
        precio: Number(document.getElementById("p-precio").value),
        descripcion: document.getElementById("p-descripcion").value.trim(),
        imagen: document.getElementById("p-imagen").value.trim()
    };

    let lista = obtenerProductosAdmin();

    if (codigoEditando === null) {
        lista.push(producto);
        guardarProductosAdmin(lista);
        mostrarAviso("Producto " + producto.codigo + " creado correctamente.", false);
    } else {
        for (let i = 0; i < lista.length; i++) {
            if (lista[i].codigo === codigoEditando) {
                lista[i] = producto;
            }
        }
        guardarProductosAdmin(lista);
        mostrarAviso("Producto " + producto.codigo + " actualizado correctamente.", false);
    }

    volverAModoNuevo();
    mostrarTabla();
}

function editarProducto(codigo) {
    const lista = obtenerProductosAdmin();
    const producto = lista.find(function (p) { return p.codigo === codigo; });
    if (!producto) return;

    codigoEditando = codigo;

    document.getElementById("titulo-formulario").textContent = "Editar producto " + codigo;
    document.getElementById("btn-guardar").textContent = "Guardar cambios";

    document.getElementById("p-codigo").value = producto.codigo;
    document.getElementById("p-codigo").disabled = true; 
    document.getElementById("p-nombre").value = producto.nombre;
    document.getElementById("p-categoria").value = producto.categoria;
    document.getElementById("p-marca").value = producto.marca || "";
    document.getElementById("p-modelo").value = producto.modelo || "";
    document.getElementById("p-descripcion").value = producto.descripcion || "";
    document.getElementById("p-precio").value = producto.precio;
    document.getElementById("p-stock").value = producto.stock;
    document.getElementById("p-critico").value = (producto.stockCritico === null || producto.stockCritico === undefined) ? "" : producto.stockCritico;
    document.getElementById("p-imagen").value = producto.imagen || "";

    actualizarContador("p-nombre", 100);
    actualizarContador("p-descripcion", 500);
    limpiarAviso();

    window.scrollTo(0, 0);
}

function eliminarProducto(codigo) {
    const seguro = confirm("¿Seguro que quieres eliminar el producto " + codigo + "?");
    if (!seguro) return;

    let lista = obtenerProductosAdmin();
    lista = lista.filter(function (p) { return p.codigo !== codigo; });

    guardarProductosAdmin(lista);
    volverAModoNuevo();
    mostrarTabla();
    mostrarAviso("Producto " + codigo + " eliminado.", false);
}

function volverAModoNuevo() {
    codigoEditando = null;

    document.getElementById("form-producto").reset();
    document.getElementById("p-codigo").disabled = false;
    document.getElementById("titulo-formulario").textContent = "Nuevo producto";
    document.getElementById("btn-guardar").textContent = "Guardar producto";

    const campos = ["p-codigo", "p-nombre", "p-categoria", "p-marca", "p-modelo",
        "p-descripcion", "p-precio", "p-stock", "p-critico", "p-imagen"];

    for (let i = 0; i < campos.length; i++) {
        document.getElementById(campos[i]).classList.remove("campo-valido");
        document.getElementById(campos[i]).classList.remove("campo-invalido");
        document.getElementById("error-" + campos[i]).textContent = "";
    }

    actualizarContador("p-nombre", 100);
    actualizarContador("p-descripcion", 500);
}


function mostrarTabla() {
    const cuerpo = document.getElementById("tabla-productos");
    const texto = document.getElementById("buscar-producto").value.toLowerCase().trim();

    let lista = obtenerProductosAdmin();

    if (texto !== "") {
        lista = lista.filter(function (p) {
            return p.codigo.toLowerCase().includes(texto) ||
                p.nombre.toLowerCase().includes(texto) ||
                p.categoria.toLowerCase().includes(texto);
        });
    }

    document.getElementById("total-productos").textContent = lista.length;

    if (lista.length === 0) {
        cuerpo.innerHTML = '<tr><td colspan="6">No hay productos que coincidan con la búsqueda.</td></tr>';
        return;
    }

    cuerpo.innerHTML = lista.map(function (p) {
        let aviso = "";
        if (p.stockCritico !== null && p.stockCritico !== undefined && p.stock <= p.stockCritico) {
            aviso = ' <span class="aviso-stock">⚠ stock crítico</span>';
        }

        const precio = p.precio === 0 ? "FREE" : "$" + p.precio.toLocaleString("es-CL");

        return "<tr>" +
            "<td>" + p.codigo + "</td>" +
            "<td>" + p.nombre + "</td>" +
            "<td>" + p.categoria + "</td>" +
            "<td>" + precio + "</td>" +
            "<td>" + p.stock + aviso + "</td>" +
            '<td><button class="boton-editar" data-editar="' + p.codigo + '">Editar</button> ' +
            '<button class="boton-eliminar" data-eliminar="' + p.codigo + '">Eliminar</button></td>' +
            "</tr>";
    }).join("");

    cuerpo.querySelectorAll("[data-editar]").forEach(function (boton) {
        boton.addEventListener("click", function () {
            editarProducto(boton.dataset.editar);
        });
    });

    cuerpo.querySelectorAll("[data-eliminar]").forEach(function (boton) {
        boton.addEventListener("click", function () {
            eliminarProducto(boton.dataset.eliminar);
        });
    });
}

function llenarCategorias() {
    const select = document.getElementById("p-categoria");
    const categorias = [...new Set(productos.map(function (p) { return p.categoria; }))];

    select.innerHTML = '<option value="">-- Selecciona una categoría --</option>' +
        categorias.map(function (c) {
            return '<option value="' + c + '">' + c + '</option>';
        }).join("");
}

function llenarMarcas() {
    const lista = document.getElementById("lista-marcas");
    const marcas = [...new Set(productos.map(function (p) { return p.marca; }))];

    lista.innerHTML = marcas.map(function (m) {
        return '<option value="' + m + '"></option>';
    }).join("");
}

document.addEventListener("DOMContentLoaded", function () {

    llenarCategorias();
    llenarMarcas();
    mostrarTabla();

    document.getElementById("p-codigo").addEventListener("input", validarCodigo);
    document.getElementById("p-nombre").addEventListener("input", function () {
        actualizarContador("p-nombre", 100);
        validarNombre();
    });
    document.getElementById("p-categoria").addEventListener("change", validarCategoria);
    document.getElementById("p-descripcion").addEventListener("input", function () {
        actualizarContador("p-descripcion", 500);
        validarDescripcion();
    });
    document.getElementById("p-precio").addEventListener("input", validarPrecio);
    document.getElementById("p-stock").addEventListener("input", validarStock);
    document.getElementById("p-critico").addEventListener("input", validarCritico);

    document.getElementById("form-producto").addEventListener("submit", guardarProducto);

    document.getElementById("btn-cancelar").addEventListener("click", function () {
        volverAModoNuevo();
        limpiarAviso();
    });

    document.getElementById("buscar-producto").addEventListener("input", mostrarTabla);

    document.getElementById("btn-restaurar").addEventListener("click", function () {
        const seguro = confirm("Esto borra los productos creados o editados aquí y vuelve a la lista original. ¿Continuar?");
        if (!seguro) return;

        localStorage.removeItem(CLAVE_PRODUCTOS);
        volverAModoNuevo();
        mostrarTabla();
        mostrarAviso("Lista restaurada con los productos originales.", false);
    });
});
