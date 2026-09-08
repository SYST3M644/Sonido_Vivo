function mostrarRegistro() {
    document.getElementById("login-card").classList.add("hidden");
    document.getElementById("registro-card").classList.remove("hidden");
}

function mostrarLogin() {
    document.getElementById("login-card").classList.remove("hidden");
    document.getElementById("registro-card").classList.add("hidden");
}

function obtenerUsuarios() {
    return JSON.parse(localStorage.getItem("usuarios_sonido") || "[]");
}

function guardarUsuarios(usuarios) {
    localStorage.setItem("usuarios_sonido", JSON.stringify(usuarios));
}

function login() {
    let usuario = document.getElementById("usuario").value;
    let clave = document.getElementById("clave").value;

    if (usuario === "" || clave === "") {
        alert("Ingresá correo y clave");
        return;
    }

    if (usuario.includes("@sonidovivo.cl") === false) {
        alert("Correo inválido, debe contener @sonidovivo.cl");
        return;
    }

    if (clave.length < 4) {
        alert("La clave debe tener al menos 4 caracteres");
        return;
    }

    if (usuario === "admin@sonidovivo.cl" && clave === "1234") {
        alert("Bienvenido Administrador");
        window.location.href = "admin.html";
        return;
    }

    if (usuario === "user@sonidovivo.cl" && clave === "1234") {
        alert("Bienvenido Cliente");
        window.location.href = "usuario.html";
        return;
    }

    let usuarios = obtenerUsuarios();

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].correo === usuario && usuarios[i].clave === clave) {
            alert("Bienvenido " + usuarios[i].nombre);
            window.location.href = "usuario.html";
            return;
        }
    }

    alert("Usuario o clave incorrectos");
    document.getElementById("clave").value = "";
}

function registro() {
    let nombre = document.getElementById("registro-nombre").value.trim();
    let correo = document.getElementById("registro-correo").value.trim();
    let clave = document.getElementById("registro-clave").value;

    if (nombre === "" || correo === "" || clave === "") {
        alert("Completá todos los campos");
        return;
    }

    if (nombre.length < 4) {
        alert("El nombre debe tener al menos 4 caracteres");
        return;
    }

    if (correo.includes("@sonidovivo.cl") === false) {
        alert("Correo inválido, debe contener @sonidovivo.cl");
        return;
    }

    if (clave.length < 4) {
        alert("La clave debe tener al menos 4 caracteres");
        return;
    }

    let usuarios = obtenerUsuarios();

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nombre === nombre) {
            alert("Ese nombre de usuario ya existe");
            return;
        }
    }

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].correo === correo) {
            alert("Ese correo ya está registrado");
            return;
        }
    }

    usuarios.push({ nombre: nombre, correo: correo, clave: clave });
    guardarUsuarios(usuarios);

    alert("Cuenta creada. Ahora podés iniciar sesión con tu nombre de usuario");
    document.getElementById("registro-nombre").value = "";
    document.getElementById("registro-correo").value = "";
    document.getElementById("registro-clave").value = "";
    mostrarLogin();
}
