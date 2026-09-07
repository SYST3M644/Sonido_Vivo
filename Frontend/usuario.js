function mostrarCompras() {
    let compras = [
        { nombre: "Guitarra Acústica Folk", precio: 129990, fecha: "15/08/2024" },
        { nombre: "Cable Instrumento 3m", precio: 9990, fecha: "20/08/2024" },
        { nombre: "Afinador Cromático Clip", precio: 12990, fecha: "02/09/2024" }
    ];

    let contenedor = document.getElementById("lista-compras");
    contenedor.innerHTML = "";

    for (let i = 0; i < compras.length; i++) {
        let div = document.createElement("div");
        div.className = "item";
        div.innerHTML =
            "<strong>" + compras[i].nombre + "</strong> - $" +
            compras[i].precio.toLocaleString() +
            " <span style='color:#888; font-size:13px;'>(" + compras[i].fecha + ")</span>";
        contenedor.appendChild(div);
    }
}

function mostrarFavoritos() {
    let favoritos = [
        { nombre: "Guitarra Eléctrica Stratocaster", precio: 459990 },
        { nombre: "Amplificador 40W", precio: 189990 },
        { nombre: "Pedal Distorsión", precio: 49990 }
    ];

    let contenedor = document.getElementById("lista-favoritos");
    contenedor.innerHTML = "";

    for (let i = 0; i < favoritos.length; i++) {
        let div = document.createElement("div");
        div.className = "item";
        div.innerHTML =
            "<strong>" + favoritos[i].nombre + "</strong> - $" +
            favoritos[i].precio.toLocaleString();
        contenedor.appendChild(div);
    }
}

mostrarCompras();
mostrarFavoritos();
