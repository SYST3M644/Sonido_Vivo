/* VALIDACIÓN DEL FORMULARIO DE CONTACTO
   Reglas pedidas en el Anexo 1:
   - Nombre:     requerido, máximo 100 caracteres.
   - Correo:     máximo 100 caracteres, solo @duoc.cl, @profesor.duoc.cl y @gmail.com.
                 (lo dejamos requerido, porque sin correo no podemos responder).
   - Comentario: requerido, máximo 500 caracteres.
   Los mensajes se muestran al lado del campo, no con alert(). */

const DOMINIOS_PERMITIDOS = ["@duoc.cl", "@profesor.duoc.cl", "@gmail.com"];

/* ---------- Ayudantes para pintar los mensajes ---------- */

// Deja el campo en rojo y escribe el mensaje debajo.
function marcarError(idCampo, mensaje) {
    const campo = document.getElementById(idCampo);
    const error = document.getElementById("error-" + idCampo);

    campo.classList.remove("campo-valido");
    campo.classList.add("campo-invalido");
    error.textContent = mensaje;
    return false;
}

// Deja el campo en verde y borra el mensaje.
function marcarCorrecto(idCampo) {
    const campo = document.getElementById(idCampo);
    const error = document.getElementById("error-" + idCampo);

    campo.classList.remove("campo-invalido");
    campo.classList.add("campo-valido");
    error.textContent = "";
    return true;
}

// Contador de caracteres (la "sugerencia" que se ve arriba del campo).
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

/* ---------- Validación campo por campo ---------- */

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

    // Revisamos si el correo termina en alguno de los dominios permitidos.
    let dominioValido = false;
    for (let i = 0; i < DOMINIOS_PERMITIDOS.length; i++) {
        if (valor.endsWith(DOMINIOS_PERMITIDOS[i])) {
            dominioValido = true;
        }
    }

    if (dominioValido === false) {
        return marcarError("correo", "Usa un correo @duoc.cl, @profesor.duoc.cl o @gmail.com.");
    }

    // El texto que va antes del @ no puede estar vacío.
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

/* ---------- Guardar el mensaje ---------- */

// Como todavía no tenemos servidor, el mensaje queda guardado en localStorage.
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

/* ---------- Envío del formulario ---------- */

function enviarFormulario(evento) {
    evento.preventDefault(); // evitamos que la página se recargue

    // Validamos los tres campos (sin cortar en el primero, así el usuario
    // ve todos los errores juntos).
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

// Deja el formulario como al principio.
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

/* ---------- Al cargar la página ---------- */

document.addEventListener("DOMContentLoaded", function () {

    const inputNombre = document.getElementById("nombre");
    const inputCorreo = document.getElementById("correo");
    const inputComentario = document.getElementById("comentario");

    // Validación en tiempo real: "input" se dispara con cada tecla.
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

    // "blur" es cuando el usuario sale del campo.
    inputNombre.addEventListener("blur", validarNombre);
    inputCorreo.addEventListener("blur", validarCorreo);
    inputComentario.addEventListener("blur", validarComentario);

    document.getElementById("form-contacto").addEventListener("submit", enviarFormulario);

    document.getElementById("btn-limpiar").addEventListener("click", function () {
        limpiarFormulario(true);
    });
});
