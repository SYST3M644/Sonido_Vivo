
const DOMINIOS_PERMITIDOS = ["@duoc.cl", "@profesor.duoc.cl", "@gmail.com"];

function marcarError(idCampo, mensaje) {
    const campo = document.getElementById(idCampo);
    const error = document.getElementById("error-" + idCampo);

    campo.classList.remove("campo-valido");
    campo.classList.add("campo-invalido");
    error.textContent = mensaje;
    return false;
}

function marcarCorrecto(idCampo) {
    const campo = document.getElementById(idCampo);
    const error = document.getElementById("error-" + idCampo);

    campo.classList.remove("campo-invalido");
    campo.classList.add("campo-valido");
    error.textContent = "";
    return true;
}

function actualizarContador(idCampo, maximo) {
    const campo = document.getElementById(idCampo);
    const contador = document.getElementById("contador-" + idCampo);
    if (!contador) return;

    const largo = campo.value.length;
    contador.textContent = largo + " / " + maximo;

    if (largo >= maximo) {
        contador.classList.add("contador-tope");
    } else {
        contador.classList.remove("contador-tope");
    }
}

function validarNombre() {
    const valor = document.getElementById("nombre").value.trim();

    if (valor === "") {
        return marcarError("nombre", "Escribe tu nombre para saber con quién hablamos.");
    }
    if (valor.length < 3) {
        return marcarError("nombre", "El nombre debe tener al menos 3 caracteres.");
    }
    if (valor.length > 100) {
        return marcarError("nombre", "El nombre no puede superar los 100 caracteres.");
    }
    return marcarCorrecto("nombre");
}

function validarCorreo() {
    const valor = document.getElementById("correo").value.trim().toLowerCase();

    if (valor === "") {
        return marcarError("correo", "Escribe tu correo para poder responderte.");
    }
    if (valor.length > 100) {
        return marcarError("correo", "El correo no puede superar los 100 caracteres.");
    }
    if (valor.indexOf("@") === -1) {
        return marcarError("correo", "Al correo le falta el @. Ejemplo: nombre@duoc.cl");
    }

    let dominioValido = false;
    for (let i = 0; i < DOMINIOS_PERMITIDOS.length; i++) {
        if (valor.endsWith(DOMINIOS_PERMITIDOS[i])) {
            dominioValido = true;
        }
    }

    if (dominioValido === false) {
        return marcarError("correo", "Usa un correo @duoc.cl, @profesor.duoc.cl o @gmail.com.");
    }

    const usuario = valor.split("@")[0];
    if (usuario === "") {
        return marcarError("correo", "Falta el nombre de usuario antes del @.");
    }

    return marcarCorrecto("correo");
}

function validarComentario() {
    const valor = document.getElementById("comentario").value.trim();

    if (valor === "") {
        return marcarError("comentario", "Cuéntanos tu consulta para poder ayudarte.");
    }
    if (valor.length < 10) {
        return marcarError("comentario", "El comentario es muy corto, escribe al menos 10 caracteres.");
    }
    if (valor.length > 500) {
        return marcarError("comentario", "El comentario no puede superar los 500 caracteres.");
    }
    return marcarCorrecto("comentario");
}

function guardarMensaje(nombre, correo, comentario) {
    const guardados = localStorage.getItem("mensajes_contacto");
    const mensajes = guardados ? JSON.parse(guardados) : [];

    mensajes.push({
        nombre: nombre,
        correo: correo,
        comentario: comentario,
        fecha: new Date().toLocaleString("es-CL")
    });

    localStorage.setItem("mensajes_contacto", JSON.stringify(mensajes));
}


function enviarFormulario(evento) {
    evento.preventDefault();
    const nombreOk = validarNombre();
    const correoOk = validarCorreo();
    const comentarioOk = validarComentario();

    const aviso = document.getElementById("aviso-formulario");

    if (!nombreOk || !correoOk || !comentarioOk) {
        aviso.className = "aviso-error";
        aviso.textContent = "Revisa los campos marcados en rojo antes de enviar.";
        return;
    }

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim().toLowerCase();
    const comentario = document.getElementById("comentario").value.trim();

    guardarMensaje(nombre, correo, comentario);

    aviso.className = "aviso-ok";
    aviso.textContent = "Mensaje enviado. Gracias " + nombre + ", te responderemos a " + correo + ".";

    limpiarFormulario(false);
}

function limpiarFormulario(borrarAviso) {
    document.getElementById("form-contacto").reset();

    const campos = ["nombre", "correo", "comentario"];
    for (let i = 0; i < campos.length; i++) {
        const campo = document.getElementById(campos[i]);
        campo.classList.remove("campo-valido");
        campo.classList.remove("campo-invalido");
        document.getElementById("error-" + campos[i]).textContent = "";
    }

    actualizarContador("nombre", 100);
    actualizarContador("correo", 100);
    actualizarContador("comentario", 500);

    if (borrarAviso) {
        const aviso = document.getElementById("aviso-formulario");
        aviso.className = "";
        aviso.textContent = "";
    }
}

document.addEventListener("DOMContentLoaded", function () {

    const inputNombre = document.getElementById("nombre");
    const inputCorreo = document.getElementById("correo");
    const inputComentario = document.getElementById("comentario");

    inputNombre.addEventListener("input", function () {
        actualizarContador("nombre", 100);
        validarNombre();
    });

    inputCorreo.addEventListener("input", function () {
        actualizarContador("correo", 100);
        validarCorreo();
    });

    inputComentario.addEventListener("input", function () {
        actualizarContador("comentario", 500);
        validarComentario();
    });

    inputNombre.addEventListener("blur", validarNombre);
    inputCorreo.addEventListener("blur", validarCorreo);
    inputComentario.addEventListener("blur", validarComentario);

    document.getElementById("form-contacto").addEventListener("submit", enviarFormulario);

    document.getElementById("btn-limpiar").addEventListener("click", function () {
        limpiarFormulario(true);
    });
});
