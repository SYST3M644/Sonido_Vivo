const CLAVE_USUARIOS = "usuarios_admin";

let runEditando = null;

function obtenerUsuariosAdmin() {
    const guardado = localStorage.getItem(CLAVE_USUARIOS);
    if (guardado) {
        return JSON.parse(guardado);
    }

    return [
        {
            run: "190110222",
            nombre: "Camila",
            apellidos: "Fuentes Rivas",
            correo: "admin@duoc.cl",
            nacimiento: "1996-03-14",
            tipo: "Administrador",
            region: "Región Metropolitana de Santiago",
            comuna: "Providencia",
            direccion: "Av. Providencia 1234, oficina 5"
        },
        {
            run: "21456789K",
            nombre: "Matías",
            apellidos: "Soto Pérez",
            correo: "m.soto@gmail.com",
            nacimiento: "2003-08-02",
            tipo: "Vendedor",
            region: "Región de Valparaíso",
            comuna: "Viña del Mar",
            direccion: "Calle 5 Norte 456"
        }
    ];
}

function guardarUsuariosAdmin(lista) {
    localStorage.setItem(CLAVE_USUARIOS, JSON.stringify(lista));
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
    const aviso = document.getElementById("aviso-usuario");
    aviso.className = esError ? "aviso-error" : "aviso-ok";
    aviso.textContent = texto;
}

function limpiarAviso() {
    const aviso = document.getElementById("aviso-usuario");
    aviso.className = "";
    aviso.textContent = "";
}
function calcularDigitoVerificador(cuerpo) {
    let suma = 0;
    let multiplo = 2;

    for (let i = cuerpo.length - 1; i >= 0; i--) {
        suma = suma + Number(cuerpo.charAt(i)) * multiplo;
        multiplo = (multiplo === 7) ? 2 : multiplo + 1;
    }

    const resto = 11 - (suma % 11);

    if (resto === 11) return "0";
    if (resto === 10) return "K";
    return String(resto);
}

function validarRun() {
    const valor = document.getElementById("u-run").value.trim().toUpperCase();

    if (valor === "") {
        return marcarError("u-run", "El RUN es obligatorio.");
    }
    if (valor.includes(".") || valor.includes("-")) {
        return marcarError("u-run", "Escribe el RUN sin puntos ni guion. Ej: 19011022K");
    }
    if (valor.length < 7 || valor.length > 9) {
        return marcarError("u-run", "El RUN debe tener entre 7 y 9 caracteres.");
    }

    const cuerpo = valor.slice(0, valor.length - 1);
    const digito = valor.charAt(valor.length - 1);

    if (/^[0-9]+$/.test(cuerpo) === false) {
        return marcarError("u-run", "El RUN solo puede tener números y, al final, el dígito verificador.");
    }
    if (/^[0-9K]$/.test(digito) === false) {
        return marcarError("u-run", "El dígito verificador debe ser un número o la letra K.");
    }
    if (calcularDigitoVerificador(cuerpo) !== digito) {
        return marcarError("u-run", "El RUN no es válido, revisa el dígito verificador.");
    }

    if (runEditando === null || runEditando !== valor) {
        const repetido = obtenerUsuariosAdmin().find(function (u) { return u.run === valor; });
        if (repetido) {
            return marcarError("u-run", "Ya existe un usuario con el RUN " + valor + ".");
        }
    }

    return marcarCorrecto("u-run");
}


function validarNombre() {
    const valor = document.getElementById("u-nombre").value.trim();

    if (valor === "") {
        return marcarError("u-nombre", "El nombre es obligatorio.");
    }
    if (valor.length > 50) {
        return marcarError("u-nombre", "El nombre no puede superar los 50 caracteres.");
    }
    return marcarCorrecto("u-nombre");
}

function validarApellidos() {
    const valor = document.getElementById("u-apellidos").value.trim();

    if (valor === "") {
        return marcarError("u-apellidos", "Los apellidos son obligatorios.");
    }
    if (valor.length > 100) {
        return marcarError("u-apellidos", "Los apellidos no pueden superar los 100 caracteres.");
    }
    return marcarCorrecto("u-apellidos");
}

function validarCorreo() {
    const valor = document.getElementById("u-correo").value.trim().toLowerCase();
    const dominios = ["@duoc.cl", "@profesor.duoc.cl", "@gmail.com"];

    if (valor === "") {
        return marcarError("u-correo", "El correo es obligatorio.");
    }
    if (valor.length > 100) {
        return marcarError("u-correo", "El correo no puede superar los 100 caracteres.");
    }
    if (valor.indexOf("@") === -1) {
        return marcarError("u-correo", "Al correo le falta el @. Ejemplo: nombre@duoc.cl");
    }

    let dominioValido = false;
    for (let i = 0; i < dominios.length; i++) {
        if (valor.endsWith(dominios[i])) {
            dominioValido = true;
        }
    }

    if (dominioValido === false) {
        return marcarError("u-correo", "Solo se aceptan correos @duoc.cl, @profesor.duoc.cl o @gmail.com.");
    }
    if (valor.split("@")[0] === "") {
        return marcarError("u-correo", "Falta el nombre de usuario antes del @.");
    }

    return marcarCorrecto("u-correo");
}

function validarTipo() {
    if (document.getElementById("u-tipo").value === "") {
        return marcarError("u-tipo", "Selecciona el perfil del usuario.");
    }
    return marcarCorrecto("u-tipo");
}

function validarRegion() {
    if (document.getElementById("u-region").value === "") {
        return marcarError("u-region", "Selecciona una región.");
    }
    return marcarCorrecto("u-region");
}

function validarComuna() {
    if (document.getElementById("u-comuna").value === "") {
        return marcarError("u-comuna", "Selecciona una comuna.");
    }
    return marcarCorrecto("u-comuna");
}

function validarDireccion() {
    const valor = document.getElementById("u-direccion").value.trim();

    if (valor === "") {
        return marcarError("u-direccion", "La dirección es obligatoria.");
    }
    if (valor.length > 300) {
        return marcarError("u-direccion", "La dirección no puede superar los 300 caracteres.");
    }
    return marcarCorrecto("u-direccion");
}


function llenarRegiones() {
    const select = document.getElementById("u-region");

    select.innerHTML = '<option value="">-- Selecciona la región --</option>' +
        regiones.map(function (r) {
            return '<option value="' + r.nombre + '">' + r.nombre + '</option>';
        }).join("");
}

function llenarComunas(regionElegida, comunaSeleccionada) {
    const select = document.getElementById("u-comuna");
    const region = regiones.find(function (r) { return r.nombre === regionElegida; });

    if (!region) {
        select.innerHTML = '<option value="">-- Primero elige una región --</option>';
        return;
    }

    select.innerHTML = '<option value="">-- Selecciona la comuna --</option>' +
        region.comunas.map(function (c) {
            return '<option value="' + c + '">' + c + '</option>';
        }).join("");

    if (comunaSeleccionada) {
        select.value = comunaSeleccionada;
    }
}

function guardarUsuario(evento) {
    evento.preventDefault();

    const runOk = validarRun();
    const nombreOk = validarNombre();
    const apellidosOk = validarApellidos();
    const correoOk = validarCorreo();
    const tipoOk = validarTipo();
    const regionOk = validarRegion();
    const comunaOk = validarComuna();
    const direccionOk = validarDireccion();

    if (!runOk || !nombreOk || !apellidosOk || !correoOk || !tipoOk || !regionOk || !comunaOk || !direccionOk) {
        mostrarAviso("Revisa los campos marcados en rojo antes de guardar.", true);
        return;
    }

    const usuario = {
        run: document.getElementById("u-run").value.trim().toUpperCase(),
        nombre: document.getElementById("u-nombre").value.trim(),
        apellidos: document.getElementById("u-apellidos").value.trim(),
        correo: document.getElementById("u-correo").value.trim().toLowerCase(),
        nacimiento: document.getElementById("u-nacimiento").value,
        tipo: document.getElementById("u-tipo").value,
        region: document.getElementById("u-region").value,
        comuna: document.getElementById("u-comuna").value,
        direccion: document.getElementById("u-direccion").value.trim()
    };

    let lista = obtenerUsuariosAdmin();

    if (runEditando === null) {
        lista.push(usuario);
        mostrarAviso("Usuario " + usuario.nombre + " " + usuario.apellidos + " creado correctamente.", false);
    } else {
        for (let i = 0; i < lista.length; i++) {
            if (lista[i].run === runEditando) {
                lista[i] = usuario;
            }
        }
        mostrarAviso("Usuario " + usuario.run + " actualizado correctamente.", false);
    }

    guardarUsuariosAdmin(lista);
    volverAModoNuevo();
    mostrarTabla();
}

function editarUsuario(run) {
    const usuario = obtenerUsuariosAdmin().find(function (u) { return u.run === run; });
    if (!usuario) return;

    runEditando = run;

    document.getElementById("titulo-formulario").textContent = "Editar usuario " + run;
    document.getElementById("btn-guardar").textContent = "Guardar cambios";

    document.getElementById("u-run").value = usuario.run;
    document.getElementById("u-nombre").value = usuario.nombre;
    document.getElementById("u-apellidos").value = usuario.apellidos;
    document.getElementById("u-correo").value = usuario.correo;
    document.getElementById("u-nacimiento").value = usuario.nacimiento || "";
    document.getElementById("u-tipo").value = usuario.tipo;
    document.getElementById("u-region").value = usuario.region;
    llenarComunas(usuario.region, usuario.comuna);
    document.getElementById("u-direccion").value = usuario.direccion;

    actualizarContador("u-nombre", 50);
    actualizarContador("u-apellidos", 100);
    actualizarContador("u-correo", 100);
    actualizarContador("u-direccion", 300);
    limpiarAviso();

    window.scrollTo(0, 0);
}

function eliminarUsuario(run) {
    const seguro = confirm("¿Seguro que quieres eliminar al usuario " + run + "?");
    if (!seguro) return;

    let lista = obtenerUsuariosAdmin();
    lista = lista.filter(function (u) { return u.run !== run; });

    guardarUsuariosAdmin(lista);
    volverAModoNuevo();
    mostrarTabla();
    mostrarAviso("Usuario " + run + " eliminado.", false);
}

function volverAModoNuevo() {
    runEditando = null;

    document.getElementById("form-usuario").reset();
    document.getElementById("titulo-formulario").textContent = "Nuevo usuario";
    document.getElementById("btn-guardar").textContent = "Guardar usuario";
    llenarComunas("", "");

    const campos = ["u-run", "u-nombre", "u-apellidos", "u-correo", "u-nacimiento",
        "u-tipo", "u-region", "u-comuna", "u-direccion"];

    for (let i = 0; i < campos.length; i++) {
        document.getElementById(campos[i]).classList.remove("campo-valido");
        document.getElementById(campos[i]).classList.remove("campo-invalido");
        document.getElementById("error-" + campos[i]).textContent = "";
    }

    actualizarContador("u-nombre", 50);
    actualizarContador("u-apellidos", 100);
    actualizarContador("u-correo", 100);
    actualizarContador("u-direccion", 300);
}


function mostrarTabla() {
    const cuerpo = document.getElementById("tabla-usuarios");
    const texto = document.getElementById("buscar-usuario").value.toLowerCase().trim();

    let lista = obtenerUsuariosAdmin();

    if (texto !== "") {
        lista = lista.filter(function (u) {
            return u.run.toLowerCase().includes(texto) ||
                (u.nombre + " " + u.apellidos).toLowerCase().includes(texto) ||
                u.correo.toLowerCase().includes(texto) ||
                u.tipo.toLowerCase().includes(texto);
        });
    }

    document.getElementById("total-usuarios").textContent = lista.length;

    if (lista.length === 0) {
        cuerpo.innerHTML = '<tr><td colspan="6">No hay usuarios que coincidan con la búsqueda.</td></tr>';
        return;
    }

    cuerpo.innerHTML = lista.map(function (u) {
        return "<tr>" +
            "<td>" + u.run + "</td>" +
            "<td>" + u.nombre + " " + u.apellidos + "</td>" +
            "<td>" + u.correo + "</td>" +
            "<td>" + u.tipo + "</td>" +
            "<td>" + u.comuna + "</td>" +
            '<td><button class="boton-editar" data-editar="' + u.run + '">Editar</button> ' +
            '<button class="boton-eliminar" data-eliminar="' + u.run + '">Eliminar</button></td>' +
            "</tr>";
    }).join("");

    cuerpo.querySelectorAll("[data-editar]").forEach(function (boton) {
        boton.addEventListener("click", function () {
            editarUsuario(boton.dataset.editar);
        });
    });

    cuerpo.querySelectorAll("[data-eliminar]").forEach(function (boton) {
        boton.addEventListener("click", function () {
            eliminarUsuario(boton.dataset.eliminar);
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {

    llenarRegiones();
    mostrarTabla();

    document.getElementById("u-run").addEventListener("input", validarRun);
    document.getElementById("u-nombre").addEventListener("input", function () {
        actualizarContador("u-nombre", 50);
        validarNombre();
    });
    document.getElementById("u-apellidos").addEventListener("input", function () {
        actualizarContador("u-apellidos", 100);
        validarApellidos();
    });
    document.getElementById("u-correo").addEventListener("input", function () {
        actualizarContador("u-correo", 100);
        validarCorreo();
    });
    document.getElementById("u-direccion").addEventListener("input", function () {
        actualizarContador("u-direccion", 300);
        validarDireccion();
    });

    document.getElementById("u-tipo").addEventListener("change", validarTipo);

    document.getElementById("u-region").addEventListener("change", function () {
        llenarComunas(this.value, "");
        validarRegion();
        document.getElementById("u-comuna").classList.remove("campo-valido");
        document.getElementById("u-comuna").classList.remove("campo-invalido");
        document.getElementById("error-u-comuna").textContent = "";
    });

    document.getElementById("u-comuna").addEventListener("change", validarComuna);

    document.getElementById("form-usuario").addEventListener("submit", guardarUsuario);

    document.getElementById("btn-cancelar").addEventListener("click", function () {
        volverAModoNuevo();
        limpiarAviso();
    });

    document.getElementById("buscar-usuario").addEventListener("input", mostrarTabla);
});
